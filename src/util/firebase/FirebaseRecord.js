import {firebaseDatabase} from "./firebase";

/**
 * 파이어 베이스 리스트
 */
export class FirebaseRecord {
    constructor(actions, model, path = null) {
        this._actions = actions;
        this._model = model;
        this._path = path;
    }

    /**
     * 경로
     * @returns {*}
     */
    get path() {
        return this._path;
    }

    /**
     * 경로 지정
     * @param path
     */
    set path(path) {
        this._path = path;
    }

    /**
     *
     * @param key
     * @param value
     * @returns {Promise}
     */
    set(key, value) {
        return new Promise((resolve, reject) => {
            firebaseDatabase.ref(`${this._path}/$key`)
                .set(value, error => error ? reject(error) : resolve());
        });
    }

    update(key, value) {
        return new Promise((resolve, reject) => {
            firebaseDatabase.ref(`${this._path}/$key`)
                .update(value, error => error ? reject(error) : resolve());
        });
    }

    /**
     * 구독
     * action은 onLoad가 존재하여야 한다.
     * @param emit
     */
    subscribe(emit) {
        let ref = firebaseDatabase.ref(this._path);
        let initialized = false;

        let list = [];

        ref.once('value', () => {
            initialized = true;
            emit(this._actions.onLoad(list));//action은 onLoad가 존재하여야 한다.
        });

        ref.on('child_added', snapshot => {
            if (initialized) {
                emit(this._actions.onAdd(this.unwrapSnapShot(snapshot)));
            } else {
                list.push(this.unwrapSnapShot(snapshot));
            }
        });

        ref.on('child_changed', snapshot => {
            emit(this._actions.onChange(this.unwrapSnapShot(snapshot)));
        });

        ref.on('child_removed', snapshot => {
            emit(this._actions.onRemove(this.unwrapSnapShot(snapshot)));
        });

        this._unsubscibe = () => ref.off();
    }

    /**
     * 구독 해제
     */
    unsubscibe() {
        this._unsubscibe();
    }

    /**
     *
     * @param snapshot
     * @returns {*}
     */
    unwrapSnapShot(snapshot) {
        let data = snapshot.val();
        data.id = snapshot.key;
        return new this._model(data);
    }
}