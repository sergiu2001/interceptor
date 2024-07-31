import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
    monospace: {
        fontFamily: 'monospace',
    },
    greenText: {
        color: '#0f0',
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});

export const homeStyles = StyleSheet.create({
    ...commonStyles,
    gestureContainer: {
        flex: 1,
        backgroundColor: '#000',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 60,
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    title: {
        fontSize: 32,
        textAlign: 'left',
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 30,
    },
    menu: {
        alignSelf: 'flex-start',
        marginLeft: 0,
        marginTop: height / 6,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    arrow: {
        fontSize: 24,
        marginRight: 10,
    },
    menuText: {
        fontSize: 24,
    },
    buttons: {
        position: 'absolute',
        bottom: 30,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    instructionText: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        padding: 10,
        backgroundColor: '#0f0',
        borderRadius: 5,
        marginVertical: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#000',
    },
});

export const gameStyles = StyleSheet.create({
    ...commonStyles,
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 10,
    },
    logContainer: {
        flex: 1,
    },
    logText: {
        color: '#0f0',
    },
    input: {
        height: 40,
        borderColor: '#0f0',
        borderWidth: 1,
        color: '#0f0',
        paddingHorizontal: 10,
    },
});
