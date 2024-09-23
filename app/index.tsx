// app/HomeScreen.tsx
import React, { useState } from 'react';
import { BackHandler, View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gameStyles as styles } from '../assets/styles/gameStyle';
import FlickerOverlay from '../components/FlickerOverlay';
import ScanlineOverlay from '../components/ScanlineOverlay';
import LogDisplay from '../components/LogDisplay';
import CommandInput from '../components/CommandInput';
import { useScanlineAnimation } from '../hooks/useScanlineAnimation';
import { useFlickerAnimation } from '../hooks/useFlickerAnimation';
import { router } from 'expo-router';

const HomeScreen: React.FC = () => {
    const [logs, setLogs] = useState<string[]>(['Use HELP command to view the list of commands.']);
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
                newLogs.push('\t'.repeat(3) + '~ SCAN\n' + '\t'.repeat(3) + '~ PROFILE\n' + '\t'.repeat(3) + '~ SYS\n' + '\t'.repeat(3) + '~ CLC\n' + '\t'.repeat(3) + '~ EXIT');
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
                newLogs.push(`Unknown command: ${text}. Use help to see all available commands.`);
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
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/images/avatars/terminusF.png')}
                        />
                        <Text style={styles.logoText}>TERMINUS</Text>
                    </View>
                    <FlickerOverlay flickerAnim={flickerAnim} />
                    <ScanlineOverlay scanlineAnim={scanlineAnim} />
                    <LogDisplay style={styles.logContainer} logs={logs} />
                    <CommandInput input={input} setInput={setInput} handleCommand={handleCommand} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
