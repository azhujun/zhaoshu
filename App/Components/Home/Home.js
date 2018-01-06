/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    Text,
    View
} from 'react-native';
import styles from './styles';
import { observer } from 'mobx-react/native'

@observer
export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!11
                </Text>
            </View>
        );
    }
}
