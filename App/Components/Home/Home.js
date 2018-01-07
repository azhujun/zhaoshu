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
export default class Home extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null,
        gesturesEnabled: false
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home
                </Text>
            </View>
        );
    }
}
