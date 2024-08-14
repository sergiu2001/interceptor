// src/components/LogDisplay.tsx
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { gameStyles as styles } from '../../assets/styles/gameStyle';
import useTypewriterAnimation from '../../hooks/useTypewriterAnimation';

interface LogDisplayProps {
    logs: string[];
}

const LogDisplay: React.FC<LogDisplayProps> = ({ logs }) => {
    return (
        <ScrollView style={styles.logContainer}>
            {logs.map((log, index) => (
                <AnimatedLog key={index} text={log} />
            ))}
        </ScrollView>
    );
};

const AnimatedLog: React.FC<{ text: string }> = ({ text }) => {
    const displayedText = useTypewriterAnimation(text);

    return <Text style={[styles.logText, styles.mainText]}>{displayedText}</Text>;
};

export default LogDisplay;
