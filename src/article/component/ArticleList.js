import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {Card, CardActions} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import {Link} from "react-router";
import Divider from 'material-ui/Divider';
import { articleActions } from '~/article';

import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";

class ArticleList extends Component {

    componentWillMount() {
        this.props.loadArticle();
    }

    render() {
        return (
            <div>
                <Header/>
                <div style={{margin: 10}}>
                    <Card>
                        <CardActions>
                            <TextField
                                hintText="제목, 내용 , 이름으로 검색"
                                floatingLabelText="검색어"
                            />
                            <RaisedButton label="검색"/>
                            <RaisedButton label="추가" primary={true}
                                          containerElement={<Link to="/articles/form"/>}
                            />
                            <RaisedButton label="삭제" secondary={true}/>
                        </CardActions>
                        <Divider />
                        <List
                            articles={this.props.articles}
                        />
                        <Pagination/>
                    </Card>
                </div>
            </div>
        );
    }
}

class Search extends Component {
    render() {
        return (<div></div>);
    }
}

class List extends Component {
    render() {
        return (
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>
                                No
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                title
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                date
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                hit
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                author
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            this.props.articles.map((row, index) => (
                                <TableRow key={row.key}>
                                    <TableRowColumn>{row.no}</TableRowColumn>
                                    <TableRowColumn>{row.title}</TableRowColumn>
                                    <TableRowColumn>{row.date}</TableRowColumn>
                                    <TableRowColumn>{row.hit}</TableRowColumn>
                                    <TableRowColumn>{row.author}</TableRowColumn>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    <TableFooter/>
                </Table>
            </div>
        );
    }
}

class Pagination extends Component {
    render() {
        return (<div></div>);
    }
}

const mapStateToProps = createSelector(
    (state) => state.articles,
    (articles) => ({
        articles
    })
);

const mapDispatchToProps = Object.assign(
    {},
    articleActions
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleList);


