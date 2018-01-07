/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Modal,
    StyleSheet,
    Text,
    Alert
} from 'react-native';

import { observer } from 'mobx-react/native'
import { IMobxData } from './Starts';
import { Login, Splash, Home } from './Components';
import { StackNavigator } from 'react-navigation';

const SimpleApp = StackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
});
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    model: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginng: {
        width: 100,
        height: 50,
        backgroundColor: 'rgba(0,0,0,.5)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
});

@observer
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            IMobxData.App.showSplash ?
                <Splash /> :
                <View style={styles.container}>
                    <SimpleApp />
                    <Modal
                        animationType={"slide"}
                        transparent={true}
                        visible={IMobxData.App.modalVisible}>
                        <View style={styles.model}>
                            <View style={styles.loginng}>
                                <Text style={styles.text}>登录中</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
        );
    }
}
