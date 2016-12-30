import React, {Component} from "react";
import * as articleActions from '../action';
import {connect} from "react-redux";
import {createSelector} from "reselect";
import Header from "./Header";
import {Card, CardActions} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Divider from "material-ui/Divider";
import {Link} from "react-router";
import {browserHistory} from 'react-router'
import {firebaseDatabase} from '@/firebase/firebase';
import {Article} from '~/article/article';

export class ArticleForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        // var $this = this;
        // if (this.props.params.id) {
        //     firebaseDatabase
        //         .ref(`article/${this.props.params.id}`)
        //         .once('value', (snapshot) => {
        //             let data = snapshot.val();
        //             data.id = snapshot.key;
        //             $this.state = {
        //                 article: new Article(data)
        //             };
        //
        //         });
        // }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.loadArticles();
    }

    onSubmit(event) {
        event.preventDefault();
        const title = this.refs.title.getValue();
        const content = this.refs.content.getValue();

        this.props.createArticle(title, content);

        browserHistory.push('/');
    }

    render() {
        const {article} = this.props;
        return (
            <div>
                <Header/>
                <div style={{margin: 10}}>
                    <Card>
                        <CardActions>
                            <RaisedButton label="목록"
                                          containerElement={<Link to="/articles"/>}
                            />
                            <RaisedButton label="저장" primary={true}
                                          onTouchTap={this.onSubmit}
                            />
                        </CardActions>
                        <Divider />
                        <div style={{margin: 10}}>
                            <TextField
                                hintText="제목을 입력하여 주십시오."
                                floatingLabelText="제목"
                                fullWidth={true}
                                ref="title"
                                value={article ? article.title : ''}
                                onChange={this._handleTextFieldChange.bind(this)}
                            />
                            <TextField
                                hintText="내용을 기입해 주세요."
                                floatingLabelText="내용"
                                fullWidth={true}
                                multiLine={true}
                                ref="content"
                                value={article ? article.content : ''}
                                onChange={this._handleTextFieldChange.bind(this)}
                                rows={6}
                            />
                        </div>
                    </Card>
                </div>
            </div>
        );
    }

    _handleTextFieldChange(e) {
        let [{article}, {title, content}] = [this.props, this.refs];

        this.props.updateArticle(article.merge({
            title: title.getValue(),
            content: content.getValue()
        }));
    }
}

const mapStateToProps = createSelector(
    (state, props) => {
        if (props.params.id) {
            return state.articles.filter(
                article => article.id === props.params.id
            ).first();
        }
        return new Article();
    },
    (article) => ({
        article
    })
);

const mapDispatchToProps = Object.assign(
    {},
    articleActions,
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleForm);