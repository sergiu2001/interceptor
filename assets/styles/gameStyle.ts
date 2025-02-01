import { StyleSheet, Dimensions } from 'react-native';
import { ThemeVars } from '../themes/themeTypes';

export const gameStyles = (theme: ThemeVars) => StyleSheet.create({
    // Typography & Text
    specialText: {
        color: theme.secondaryColor,
        fontFamily: theme.fontFamily,
        fontSize: 17,
        textShadowColor: theme.secondaryShadowColor,
        textShadowRadius: 4,
        letterSpacing: 1.1,
    },
    logText: {
        fontFamily: theme.fontFamily,
        fontSize: 17,
        color: theme.mainColor,
        textShadowColor: theme.mainShadowColor,
        textShadowRadius: 4,
        letterSpacing: 1.1,
    },
    profileDataHeader: {
        fontFamily: theme.fontFamily,
        fontSize: 17,
        backgroundColor: theme.secondaryColor,
        color: '#000000',
        textShadowColor: '#000000',
        textShadowRadius: 4,
        letterSpacing: 1.1,
        paddingHorizontal: 5,
        paddingBottom: 3,
    },
    profileData: {
        fontFamily: theme.fontFamily,
        fontSize: 17,
        color: theme.mainColor,
        textShadowColor: theme.mainShadowColor,
        textShadowRadius: 4,
        letterSpacing: 1.1,
    },
    avatarName: {
        color: theme.mainColor,
        fontFamily: theme.fontFamily,
        fontSize: 19,
        alignSelf: 'center',
        marginLeft: 35,
    },
    taskText: {
        color: '#FFFFFF',
        fontFamily: theme.fontFamily,
        fontSize: 21,
        textAlign: 'justify',
    },
    taskCompletedText: {
        color: '#00FF00',
        fontFamily: theme.fontFamily,
        fontSize: 21,
        textDecorationLine: 'line-through',
        textAlign: 'justify',
    },
    taskIncompleteText: {
        color: '#7A100F',
        fontFamily: theme.fontFamily,
        fontSize: 21,
        textAlign: 'justify',
    },

    // Layout & Containers
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
    scanline: {
        height: 20,
        width: '100%',
        zIndex: 3,
    },
    scanlineContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: Dimensions.get('window').height,
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
        paddingTop: 10,
    },
    logo: {
        width: 225,
        height: 210,
        resizeMode: 'stretch',
        tintColor: theme.avatarTintColor,
    },
    logContainer: {
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
    },

    // Inputs
    input: {
        height: 50,
        borderColor: theme.inputBorderColor,
        borderWidth: 1,
        color: theme.inputBorderColor,
        paddingHorizontal: 10,
        backgroundColor: '#000000',
        borderRadius: 3,
        fontSize: 17,
        fontFamily: theme.fontFamily,
        zIndex: 3,
    },
    gameInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: 50,
    },
    gameInput: {
        flex: 1,
        borderColor: theme.inputBorderColor,
        borderWidth: 1,
        color: theme.inputBorderColor,
        paddingHorizontal: 10,
        backgroundColor: '#000000',
        borderRadius: 3,
        fontSize: 21,
        fontFamily: theme.fontFamily,
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
    },

    // Profiles & Avatars
    profileContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    profileDataContainer: {
        flex: 2,
        flexDirection: 'column',
    },
    profileDataRow: {
        flex: 3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 5,
    },
    avatar: {
        width: 140,
        height: 170,
        overflow: 'hidden',
        tintColor: theme.avatarTintColor,
    },

    // Game screens & tasks
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


    // Store
    storeContainer: {
        padding: 20,
    },
    // Avatars List
    avatarsGrid: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        
    },
    avatarCard: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    avatarImage: {
        width: 110,
        height: 130,
        marginBottom: 10,
        borderColor: theme.avatarBorderColor,
        borderWidth: 3,
        tintColor: theme.avatarTintColor,
    },

    // Theme List
    themeGrid: {
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    themeCard: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    activeTheme: {
        backgroundColor: '#4CAF50',
    },
    themeText: {
        fontSize: 17,
    },

});
