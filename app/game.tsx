import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gameStyles as styles } from '../assets/styles/gameStyle';

const GameScreen: React.FC = () => {
    const [logs, setLogs] = useState(['Welcome, astronaut! Type "hack" to start hacking.']);
    const [input, setInput] = useState('');

    const handleCommand = (text: string) => {
        let newLogs = [...logs, `> ${text}`];

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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.logContainer}>
                {logs.map((log, index) => (
                    <Text key={index} style={[styles.logText, styles.monospace]}>{log}</Text>
                ))}
            </ScrollView>
            <TextInput
                style={[styles.input, styles.monospace]}
                value={input}
                onChangeText={setInput}
                onSubmitEditing={() => handleCommand(input)}
                placeholder="Type command..."
                placeholderTextColor="#888"
            />
        </SafeAreaView>
    );
};

export default GameScreen;
