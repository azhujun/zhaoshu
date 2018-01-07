/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import styles from './styles';
import { observer } from 'mobx-react/native'
import { IMobxData } from '../../Starts';
@observer
export default class Splash extends Component {
    constructor(props) {
        super(props);
    }
    //加载完毕
    componentDidMount() {
        this.timer = setTimeout(() => {
            IMobxData.setApptate({ showSplash: false });
        }, 2000)
    }

    //卸载
    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);
    }

    _onPressButton = () => {
        IMobxData.setApptate({ showSplash: false });
    }
    render() {
        return (
            <ImageBackground
                style={styles.splash}
                source={require('../../images/splash.jpg')}
                resizeMode="cover">
                <TouchableOpacity style={styles.position} onPress={this._onPressButton}>
                    <View style={styles.flex}>
                        <Text style={styles.text}>开始</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
