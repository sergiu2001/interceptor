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
    const [logs, setLogs] = useState(['Use HELP command to view the list of commands.']);
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
                newLogs.push('This is the list of available commands:');
                newLogs.push('SCAN, PROFILE, SYS, CLC, EXIT');
                break;
            case 'scan':
                newLogs.push('Scanning for contracts...');
                newLogs.push('Contract found: Hack the satellite system.');
                router.replace('./game');
                break;
            case 'profile':
                router.replace("./profile");
                break;
            case 'sys':
                newLogs.push('System settings:');
                newLogs.push('1. Adjust Screen Brightness');
                newLogs.push('2. Configure Audio');
                newLogs.push('3. Update Terminal Software');
                break;
            case 'clc':
                router.replace('./');
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
                    <LogDisplay style={styles.logContainer} logs={logs} />
                    <CommandInput input={input} setInput={setInput} handleCommand={handleCommand} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default GameScreen;
