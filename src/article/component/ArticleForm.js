import React, {Component} from "react";
import * as articleActions from "../action";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import Header from "./Header";
import {Card, CardActions} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import Divider from "material-ui/Divider";
import Dialog from "material-ui/Dialog";
import {Link, browserHistory} from "react-router";
import {firebaseDatabase} from "@/firebase/firebase";
import {Article} from "~/article/article";

export class ArticleForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentWillMount() {
        this.props.loadArticles(function () {

            },
            function () {
                let {article} = this.props;
                this.props.updateArticle(article.set("hit", article.hit + 1).toJSON());
            }.bind(this)
        );
    }

    componentWillUnmount() {
        this.props.unloadArticles();
    }

    onSubmit(event) {
        event.preventDefault();
        let [{article}, {title, content}] = [this.props, this.refs];

        if (this.props.params.id) {
            this.props.updateArticle(article.merge({
                title: title.getValue(),
                content: content.getValue()
            }).toJSON());
        } else {
            this.props.createArticle(title.getValue(), content.getValue());
        }

        browserHistory.push('/');
    }

    onDelete(event) {
        event.preventDefault();
        this.setState({open: true});
    }

    delete() {
        this.props.deleteArticle(this.props.article);
        browserHistory.push('/');
    }

    handleClose(event) {
        event.preventDefault();
        this.setState({open: false});
    }

    render() {
        const {article} = this.props;
        const deleteButtons = [
            <FlatButton label="닫기" primary={true}
                        onTouchTap={this.handleClose}
            />,
            <RaisedButton label="삭제" secondary={true}
                          onTouchTap={this.delete}
            />
        ];
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
                            <RaisedButton label="삭제" secondary={true}
                                          onTouchTap={this.onDelete}
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
                    <Dialog
                        title="삭제하시겠습니까?"
                        actions={deleteButtons}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        데이터가 영구적으로 삭제 됩니다.
                    </Dialog>
                </div>
            </div>
        );
    }

    _handleTextFieldChange(e) {
        let [{article = new Article()}, {title, content}] = [this.props, this.refs];
        this.props.updateArticleByLocal(article.merge({
            title: title.getValue(),
            content: content.getValue()
        }));
    }
}

const mapStateToProps = createSelector(
    (state, props) => {
        const filtered = state.articles.filter(
            article => {
                if (props.params.id)return article.id === props.params.id;
                return !article.id;
            });
        if (filtered.size > 0) return filtered.first();
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