import { StyleSheet, Dimensions } from 'react-native';

export const gameStyles = StyleSheet.create({
    specialText: {
        color: '#00BB00',
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
        backgroundColor: '#0010003F',
        zIndex: 3,
        pointerEvents: 'none',
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    logoText: {
        fontFamily: 'SpaceMonoRegular',
        color: '#00B000',
        fontSize: 30,
        textShadowColor: '#FF0000BF',
        textShadowOffset: { width: 1.5, height: 1 },
        textShadowRadius: 4,
        textAlign: 'center',
    },

    logContainer: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    logText: {
        color: '#00B000',
        textShadowColor: '#FF0000BF',
        textShadowOffset: { width: 1.5, height: 1 },
        textShadowRadius: 4,
    },

    input: {
        height: 50,
        borderColor: '#00B00099',
        borderWidth: 1,
        color: '#00FF00DF',
        paddingHorizontal: 10,
        backgroundColor: '#000000',
        borderRadius: 3,
        fontSize: 16,
        zIndex: 3,
    },

    profileContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    profileDataContainer: {
        paddingLeft: 4,
        paddingTop: 20,
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
        flex: 1,
        width: Dimensions.get('window').width,
    },
    gameConsole: {
        flex: 1,
        backgroundColor: '#c1c0be',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        width: Dimensions.get('window').width,
    },
    gameTasksContainer: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 5,
        width: Dimensions.get('window').width,
    },

    taskContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',

    },
    taskCard: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    taskText: {
        color: '#FFFFFF',
        fontSize: 17,
        textShadowColor: '#0000FFBF',
        textShadowOffset: { width: 1.5, height: 1 },
        textShadowRadius: 4,
        textAlign: 'justify',
    },
    taskCompletedText: {
        color: '#00B000',
        fontSize: 17,
        textShadowColor: '#FF0000BF',
        textShadowOffset: { width: 1.5, height: 1 },
        textShadowRadius: 4,
        textDecorationLine: 'line-through',
        textAlign: 'justify',
    },
    taskIncompleteText: {
        color: '#7A100F',
        fontSize: 17,
        textShadowColor: '#7A100FBF',
        textShadowOffset: { width: 1.5, height: 1 },
        textShadowRadius: 4,
        textAlign: 'justify',
    },
    
    gameInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 50,
    },
    gameInput: {
        flex: 1,
        borderColor: '#00FF0099',
        borderWidth: 1,
        color: '#00FF00DF',
        paddingHorizontal: 10,
        backgroundColor: '#000000',
        borderRadius: 3,
        fontSize: 16,
        zIndex: 3,
    },
    gameInputButton: {
        marginLeft: 5,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282828',
        borderRadius: 3,
        borderColor: '#4E4E4E',
        borderWidth: 1,
        zIndex: 3,
    }

});
