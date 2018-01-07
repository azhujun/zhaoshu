import { StyleSheet, Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const isIos = Platform.OS === 'ios';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    formBox: {
        height: 200,
        width: width - 40,
        backgroundColor: 'rgba(0,0,0,.5)',
    }
});

export default styles;