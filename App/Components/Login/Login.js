/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Animated,
    Dimensions,
    Easing,
    Button,
    ActivityIndicator
} from 'react-native';
import styles from './styles';
import { observer } from 'mobx-react/native'
import { IMobxData } from '../../Starts/index';
const { width, height } = Dimensions.get('window');

@observer
export default class Login extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        header: null
    })

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(width),
        };
    }

    _onClick = () => {
        IMobxData.setApptate({ modalVisible: true });
        this.timer = setTimeout(() => {
            IMobxData.setApptate({ modalVisible: false });
            this.props.navigation.navigate('Home', { name: 'two' })
        }, 2000);
    }

    componentDidMount() {
        Animated.spring(
            this.state.fadeAnim,
            {
                toValue: 0
            }
        ).start();
    }

    //卸载
    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <Animated.View
                style={[styles.container, {
                    position: 'absolute',
                    left: this.state.fadeAnim
                }]}>
                <View style={styles.formBox}>
                    <Text>form</Text>
                </View>
                <Button
                    title="login"
                    onPress={this._onClick} />
            </Animated.View>
        );
    }
}
