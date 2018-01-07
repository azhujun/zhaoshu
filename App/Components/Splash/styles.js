import { StyleSheet, Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const isIos = Platform.OS === 'ios';
const styles = StyleSheet.create({
    splash: {
        marginTop: isIos ? 20 : 0,
        width: width,
        height: isIos ? (height - 20) : height
    },
    position: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#dedede'
    },
    text: {
        fontSize: 12,
        color: "#fff",
        backgroundColor: 'rgba(0,0,0,0)'
    },
    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;