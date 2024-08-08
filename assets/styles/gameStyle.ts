import { StyleSheet, Dimensions } from 'react-native';

export const gameStyles = StyleSheet.create({
    mainText: {
        fontFamily: 'SpaceMono-Regular',
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    bezel: {
        flex: 1,
        backgroundColor: '#000000',
        borderRadius: 10,
        padding: 5,
    },
    crt: {
        flex: 1,
        backgroundColor: '#111',
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative',
    },
    logContainer: {
        flex: 1,
        padding: 10,
    },
    logText: {
        color: '#00FF00',
        fontFamily: 'SpaceMono-Regular',
        textShadowColor: '#000000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    input: {
        height: 40,
        borderColor: '#00FF00',
        borderWidth: 1,
        color: '#00FF00',
        paddingHorizontal: 10,
        fontFamily: 'SpaceMono-Regular',
        backgroundColor: '#000000',
        zIndex: 3,
    },
    scanlineContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: Dimensions.get('window').height,
    },
    scanline: {
        height: 20,
        width: '100%',
    },
    screenLineV: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
    },
    screenLineH: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
    },
    flickerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(18, 16, 16, 0.1)',
        zIndex: 3,
        pointerEvents: 'none',
    },
});
