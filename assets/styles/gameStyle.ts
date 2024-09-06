import { StyleSheet, Dimensions } from 'react-native';

export const gameStyles = StyleSheet.create({
    specialText: {
        color: '#00BB00',
        fontFamily: 'SpaceMono-Regular',
        textShadowColor: '#FF0000BF',
        textShadowOffset: { width: 1.5, height: 1 },
        textShadowRadius: 4,
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    bezel: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 5,
    },
    crt: {
        flex: 1,
        backgroundColor: '#111',
        overflow: 'hidden',
        position: 'relative',
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
        zIndex: 3,
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

    logContainer: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    logText: {
        color: '#00FF00',
        fontFamily: 'SpaceMono-Regular',
        textShadowColor: '#FF0000BF',
        textShadowOffset: { width: 1.5, height: 1 },
        textShadowRadius: 4,
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

    profileContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    profileDataContainer: {
        paddingLeft: 4,
        alignSelf: 'center',
    },
    avatar: {
        width: 140,
        height: 140,
        overflow: 'hidden',
    },

    gameContainer: {
        flex: 1,
        zIndex: 1,
    },
    gameTerminal: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    gameConsole: {
        flex: 1,
        backgroundColor: '#c1c0be',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    gameTasksContainer: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 5,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }, 
});
