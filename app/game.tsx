// app/GameScreen.tsx
import React, { useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gameStyles as styles } from '../assets/styles/gameStyle';
import FlickerOverlay from '../components/FlickerOverlay';
import ScanlineOverlay from '../components/ScanlineOverlay';
import GameDisplay from '../components/GameDisplay';
import GameInput from '../components/GameInput';
import { useScanlineAnimation } from '../hooks/useScanlineAnimation';
import { useFlickerAnimation } from '../hooks/useFlickerAnimation';
import { router } from 'expo-router';
import { Contract } from '../models/Contract';
import { Difficulty } from '../models/Difficulty';
import TaskDisplay from '../components/TaskDisplay';

const GameScreen: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const [contract, setContract] = useState<Contract>(new Contract(Difficulty.Initiate));

    const [inputHistory, setInputHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const MAX_HISTORY = 10;

    const scanlineAnim = useScanlineAnimation();
    const flickerAnim = useFlickerAnimation();

    const handleCommand = (text: string) => {
        let newLogs = [...logs, `~$: ${text}`];
        const command = text.trim();

        switch (command) {
            case 'abandon':
                router.replace('./')
                break;
            default:
                contract.tasks.slice(0, contract.currentTaskIndex + 1).map((task) => contract.validateTask(task, command));
                if (contract.isCurentTaskCompleted()) {
                    contract.currentTaskIndex++;
                }
                setContract(contract);
                break;
        }

        if (command != ""){
            const updatedHistory = [input, ...inputHistory].slice(0, MAX_HISTORY);
            setInputHistory(updatedHistory);
            setHistoryIndex(-1);
        }

        setLogs(newLogs);
        setInput('');
    };

    const handleHistory = () => {

        if (inputHistory.length === 0) return;

        const newIndex = (historyIndex + 1) % (inputHistory.length + 1);
        setHistoryIndex(newIndex);

        if (newIndex === inputHistory.length) {
            setInput('');
        } else {
            setInput(inputHistory[newIndex]);
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.gameContainer} horizontal={true} pagingEnabled={true} keyboardDismissMode={'on-drag'} showsHorizontalScrollIndicator={false} contentOffset={{ x: Dimensions.get('window').width, y: 0 }}>
                <View style={styles.gameConsole}>

                </View>
                <View style={[styles.bezel, styles.gameTerminal]}>
                    <View style={styles.crt}>
                        <FlickerOverlay flickerAnim={flickerAnim} />
                        <ScanlineOverlay scanlineAnim={scanlineAnim} />
                        <GameDisplay logs={logs} contract={contract} style={styles.logContainer} />
                        <GameInput input={input} setInput={setInput} handleCommand={handleCommand} handleHistory={handleHistory} />
                    </View>
                </View>
                <View style={[styles.bezel, styles.gameTasksContainer]}>
                    <View style={styles.crt}>
                        <FlickerOverlay flickerAnim={flickerAnim} />
                        <ScanlineOverlay scanlineAnim={scanlineAnim} />
                        <TaskDisplay contract={contract} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default GameScreen;
