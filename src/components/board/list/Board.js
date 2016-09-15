import React, {Component} from 'react';
import {render} from 'react-dom';

import BoardList from './BoardList';
import Pagination from './Pagination';
import Search from './Search';

class Board extends Component {
    render() {
        return (
            <div>
                <Search/>
                <BoardList/>
                <Pagination/>
            </div>
        );
    }
}

export default Board;