import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const commonStyles = StyleSheet.create({
    monospace: {
        fontFamily: 'Courier New', // Retro, console-like font
    },
    greenText: {
        color: '#00FF00', // Bright green for retro effect
    },
    container: {
        flex: 1,
        backgroundColor: '#000000', // Deep black background for space theme
    },
});

export const gameStyles = StyleSheet.create({
    ...commonStyles,
    container: {
        flex: 1,
        backgroundColor: '#000000',
        padding: 10,
    },
    logContainer: {
        flex: 1,
    },
    logText: {
        color: '#00FF00', // Bright green log text for command-line feel
        fontFamily: 'Courier New',
        textShadowColor: '#000000', // Subtle shadow for depth
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    input: {
        height: 40,
        borderColor: '#00FF00', // Bright green border for input
        borderWidth: 1,
        color: '#00FF00', // Bright green input text
        paddingHorizontal: 10,
        fontFamily: 'Courier New',
        backgroundColor: '#000000', // Black background for input field
    },
});
