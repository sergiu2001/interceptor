// app/GameScreen.tsx
import React, { useState } from 'react';
import { Dimensions, ScrollView, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gameStyles as styles } from '../assets/styles/gameStyle';
import FlickerOverlay from '../components/FlickerOverlay';
import ScanlineOverlay from '../components/ScanlineOverlay';
import LogDisplay from '../components/LogDisplay';
import CommandInput from '../components/CommandInput';
import { useScanlineAnimation } from '../hooks/useScanlineAnimation';
import { useFlickerAnimation } from '../hooks/useFlickerAnimation';
import { router } from 'expo-router';
import { Contract } from '@/models/Contract';

const GameScreen: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
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
                newLogs.push('ABANDON');
                break;
            case 'abandon':
                router.replace('./')
                break;
            default:
                newLogs.push(`Unknown command ${text}. Use HELP to see all available commands.`);
                break;
        }

        setLogs(newLogs);
        setHistory(newHistory);
        setInput('');
    };

    const contract = new Contract();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.gameContainer} horizontal={true} pagingEnabled={true} keyboardDismissMode={'on-drag'} showsHorizontalScrollIndicator={false} contentOffset={{ x: Dimensions.get('window').width, y: 0 }}>
                <View style={styles.gameConsole}>

                </View>
                <View style={[styles.bezel, styles.gameTerminal]}>
                    <View style={styles.crt}>
                        <FlickerOverlay flickerAnim={flickerAnim} />
                        <ScanlineOverlay scanlineAnim={scanlineAnim} />
                        <LogDisplay style={styles.logContainer} logs={logs} />
                        <CommandInput input={input} setInput={setInput} handleCommand={handleCommand} />
                    </View>
                </View>
                <View style={[styles.bezel, styles.gameTasksContainer]}>
                    <View style={styles.crt}>
                        <FlickerOverlay flickerAnim={flickerAnim} />
                        <ScanlineOverlay scanlineAnim={scanlineAnim} />
                        {/* <FlatList></FlatList> */}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default GameScreen;
