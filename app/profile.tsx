// app/ProfileScreen.tsx
import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gameStyles as styles } from '../assets/styles/gameStyle';
import FlickerOverlay from '../components/FlickerOverlay';
import ScanlineOverlay from '../components/ScanlineOverlay';
import LogDisplay from '../components/LogDisplay';
import CommandInput from '../components/CommandInput';
import { useScanlineAnimation } from '../hooks/useScanlineAnimation';
import { useFlickerAnimation } from '../hooks/useFlickerAnimation';
import { router } from 'expo-router';

const ProfileScreen: React.FC = () => {
    const [plogs, setPLogs] = useState<string[]>(['ALIAS: starlord', 'REPUTATION: lord', 'TROJANS: 5000', 'LOCATION: New Vega System', 'STATUS: active']);
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
                newLogs.push('\t'.repeat(3)+'~ BACK\n'+'\t'.repeat(3)+'~ REP\n'+'\t'.repeat(3)+'~ XP\n'+'\t'.repeat(3)+'~ CRED\n'+'\t'.repeat(3)+'~ LOCATION\n'+'\t'.repeat(3)+'~ STAT\n'+'\t'.repeat(3)+'~ HISTORY');
                break;
            case 'rep':
                newLogs.push('Your reputation is LORD.');    
                break;
            case 'xp':
                newLogs.push('You have 200 xp until next promotion.');  
                break;
            case 'cred':
                newLogs.push('You have 5000 trojans in your digital wallet.');  
                break;
            case 'location':
                newLogs.push('Right now you are in the New Vega System.');  
                break;
            case 'stat':
                newLogs.push('Your status is active.');
                break;
            case 'history':
                newLogs.push('You have no history.');
                break;
            case 'back':
                router.replace('./');
                break;
            default:
                newLogs.push(`Unknown command ${text}. Use "help" to see all available commands.`);
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
                    <ScrollView>
                        <View style={styles.profileContainer}>
                            <LogDisplay style={styles.profileDataContainer} logs={plogs} />
                            <Image
                                style={styles.avatar}
                                source={require('../assets/images/avatars/mustacheF.png')}
                            />
                        </View>
                        <LogDisplay style={styles.logContainer} logs={logs} />
                    </ScrollView>
                    <CommandInput input={input} setInput={setInput} handleCommand={handleCommand} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;
