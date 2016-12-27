import {Component} from 'react';
import React from 'react';
import {createStore} from 'redux';

import HomeContainer from '../containers/home'
import reducer from '../reducers/index'

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class Home extends React.Component {
    render() {
        return (
            <HomeContainer store={store}/>
        );
    }
}
