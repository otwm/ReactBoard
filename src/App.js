import React, {Component} from 'react';
import {render} from 'react-dom';
import Board from './components/board/list/Board';

class App extends Component {
    render() {
        return (
            <Board/>
        );
    }
}

render(<App/>, document.getElementById("app"));