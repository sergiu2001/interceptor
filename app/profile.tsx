// app/ProfileScreen.tsx
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

const ProfileScreen: React.FC = () => {
    const [logs, setLogs] = useState(['Use "back" to return to the main menu.']);
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
                newLogs.push('back' + '\t'.repeat(20 - 'help'.length) + 'Return back.');
                break;
            case 'back':
                router.replace('./');
                break;
            default:
                newLogs.push(`Unknown command: ${text}. Use "help" to see all available commands.`);
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

export default ProfileScreen;
