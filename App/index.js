/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { observer } from 'mobx-react/native'
import { IMobxData } from './Starts';
import { Login } from './Components';

@observer
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Login />
        );
    }
}
