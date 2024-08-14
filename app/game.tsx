// app/GameScreen.tsx
import React, { useState } from 'react';
import { BackHandler, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gameStyles as styles } from '../assets/styles/gameStyle';
import FlickerOverlay from '../components/game/FlickerOverlay';
import ScanlineOverlay from '../components/game/ScanlineOverlay';
import LogDisplay from '../components/game/LogDisplay';
import CommandInput from '../components/game/CommandInput';
import { useScanlineAnimation } from '../hooks/useScanlineAnimation';
import { useFlickerAnimation } from '../hooks/useFlickerAnimation';
import { router } from 'expo-router';

const GameScreen: React.FC = () => {
    const [logs, setLogs] = useState(['Welcome, astronaut! Use "scan" to view available contracts.']);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);

    const scanlineAnim = useScanlineAnimation();
    const flickerAnim = useFlickerAnimation();

    const handleCommand = (text: string) => {
        let newLogs = [...logs, `~$: ${text}`];
        let newHistory = [...history, text];
        const command = text.trim().toLowerCase();

        switch (command) {
            case 'help':
                newLogs.push('scan' + '\t'.repeat(20 - 'scan'.length) + 'Scan for contracts.');
                newLogs.push('user' + '\t'.repeat(20 - 'user'.length) + 'Display user statistics.');
                newLogs.push('system' + '\t'.repeat(20 - 'system'.length) + 'Access system settings.');
                newLogs.push('clear' + '\t'.repeat(21 - 'clear'.length) + 'Clear the terminal screen.');
                newLogs.push('exit' + '\t'.repeat(21 - 'exit'.length) + 'Exit.');
                break;

            case 'exit':
                newLogs.push('Exiting the application...');
                BackHandler.exitApp();
                break;
            default:
                newLogs.push(`Unknown command: ${text}. Use \ihelp\i to see all available commands.`);
                break;
        }

        setLogs(newLogs);
        setHistory(newHistory);
        setInput('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.bezel}>
                <View style={styles.crt}>
                    <FlickerOverlay flickerAnim={flickerAnim} />
                    <ScanlineOverlay scanlineAnim={scanlineAnim} />
                    <LogDisplay logs={logs} />
                    <CommandInput input={input} setInput={setInput} handleCommand={handleCommand} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default GameScreen;
