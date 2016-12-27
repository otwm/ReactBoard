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

export class ArticleForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '',
            content: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.createArticle(this.state.title, this.state.content);
    }

    render() {
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
                                value={this.state.title}
                            />
                            <TextField
                                hintText="내용을 기입해 주세요."
                                floatingLabelText="내용"
                                fullWidth={true}
                                multiLine={true}
                                value={this.state.content}
                                rows={6}
                            />
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createSelector(
    () => ({})
);

const mapDispatchToProps = Object.assign(
    {},
    articleActions,
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleForm);