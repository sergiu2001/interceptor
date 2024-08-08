import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gameStyles as styles } from '../assets/styles/gameStyle';
import Svg, { Defs, Rect, Stop, Pattern } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const GameScreen: React.FC = () => {
    const [logs, setLogs] = useState(['Welcome, astronaut! Type "hack" to start hacking.']);
    const [input, setInput] = useState('');
    const scanlineAnim = useState(new Animated.Value(0))[0];
    const flickerAnim = useState(new Animated.Value(0))[0];

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scanlineAnim, {
                    toValue: 1,
                    duration: 3000,
                    useNativeDriver: true
                }),
                Animated.delay(10000)
            ])
        ).start();
    }, [scanlineAnim]);

    useEffect(() => {
        const flickerKeyframes = [
            0.27861, 0.34769, 0.23604, 0.90626, 0.18128, 0.83891,
            0.65583, 0.67807, 0.26559, 0.84693, 0.96019, 0.08594,
            0.20313, 0.71988, 0.53455, 0.37288, 0.71428, 0.70419,
            0.7003, 0.36108, 0.24387
        ];

        const flickerSequence = flickerKeyframes.map(opacity =>
            Animated.timing(flickerAnim, {
                toValue: opacity,
                duration: 15,
                useNativeDriver: true
            })
        );

        Animated.loop(
            Animated.sequence(flickerSequence)
        ).start();
    }, [flickerAnim]);

    const handleCommand = (text: string) => {
        let newLogs = [...logs, `>> ${text}`];

        if (text === 'hack') {
            newLogs.push('Hacking initiated... Solve the puzzle to guess the password.');
        } else if (text.startsWith('guess ')) {
            const guess = text.split(' ')[1];
            newLogs.push(`You guessed: ${guess}`);
            if (guess === 'correct-password') {
                newLogs.push('Access granted!');
            } else {
                newLogs.push('Access denied. Try again.');
            }
        } else {
            newLogs.push(`Unknown command: ${text}`);
        }

        setLogs(newLogs);
        setInput('');
    };

    const scanlineStyle = {
        transform: [
            {
                translateY: scanlineAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, Dimensions.get('window').height]
                })
            }
        ]
    };

    const flickerStyle = {
        opacity: flickerAnim
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bezel}>
                <View style={[styles.crt]}>
                    <Animated.View style={[styles.flickerOverlay, flickerStyle]} >
                        <Svg height="100%" width="100%" style={styles.screenLineV}>
                            <Defs>
                                <Pattern id="pattern-vertical" patternUnits="userSpaceOnUse" width="2" height="2">
                                    <Rect width="2" height="1" fill="rgba(18, 16, 16, 0.0)" />
                                    <Rect y="1" width="2" height="1" fill="rgba(0, 0, 0, 0.25)" />
                                </Pattern>
                            </Defs>
                            <Rect width="100%" height="100%" fill="url(#pattern-vertical)" />
                        </Svg>
                        <Svg height="100%" width="100%" style={styles.screenLineH}>
                            <Defs>
                                <Pattern id="pattern-horizontal" patternUnits="userSpaceOnUse" width="3" height="3">
                                    <Rect width="1" height="3" fill="rgba(255, 0, 0, 0.06)" />
                                    <Rect x="1" width="1" height="3" fill="rgba(0, 255, 0, 0.02)" />
                                    <Rect x="2" width="1" height="3" fill="rgba(0, 0, 255, 0.06)" />
                                </Pattern>
                            </Defs>
                            <Rect width="100%" height="100%" fill="url(#pattern-horizontal)" />
                        </Svg>
                    </Animated.View>
                    <Animated.View style={[styles.scanlineContainer, scanlineStyle]} >
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.05)']}
                            style={styles.scanline}
                        />
                    </Animated.View>
                    <ScrollView style={styles.logContainer}>
                        {logs.map((log, index) => (
                            <Text key={index} style={[styles.logText, styles.mainText]}>{log}</Text>
                        ))}
                    </ScrollView>
                    <TextInput
                        style={[styles.input, styles.mainText]}
                        value={input}
                        onChangeText={setInput}
                        onSubmitEditing={() => handleCommand(input)}
                        placeholder="Type command..."
                        placeholderTextColor="#888"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default GameScreen;
