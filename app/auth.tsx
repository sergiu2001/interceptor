
import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { gameStyles as styles } from '../assets/styles/gameStyle';
import FlickerOverlay from '../components/FlickerOverlay';
import ScanlineOverlay from '../components/ScanlineOverlay';
import LogDisplay from '../components/LogDisplay';
import CommandInput from '../components/CommandInput';
import { useScanlineAnimation } from '../hooks/useScanlineAnimation';
import { useFlickerAnimation } from '../hooks/useFlickerAnimation';
import { logIn, signUp } from '../services/firebaseAuthService';
import { createUserProfile, getUserProfile } from '../services/firebaseFirestoreService';
import { FirebaseError } from 'firebase/app';

const AuthScreen: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([
        'Welcome to Codex Porta. Type LOGIN or SIGNUP to proceed.',
    ]);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<string[]>([]);
    const [step, setStep] = useState<
        | 'choice'
        | 'loginEmail'
        | 'loginPassword'
        | 'signupEmail'
        | 'signupPassword'
        | 'signupUsername'
    >('choice');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const scanlineAnim = useScanlineAnimation();
    const flickerAnim = useFlickerAnimation();

    const handleCommand = async (text: string) => {
        let newLogs = [...logs, `~$: ${text}`];
        let newHistory = [...history, text];
        const command = text.trim().toLowerCase();

        switch (step) {
            case 'choice':
                if (command === 'login') {
                    newLogs.push('Enter your email:');
                    setStep('loginEmail');
                } else if (command === 'signup') {
                    newLogs.push('Enter your email:');
                    setStep('signupEmail');
                } else {
                    newLogs.push('Unknown command. Type LOGIN or SIGNUP.');
                }
                break;
            case 'loginEmail':
                setEmail(text);
                newLogs.push('Enter your password:');
                setStep('loginPassword');
                break;
            case 'loginPassword':
                try {
                    await logIn(email, text);
                    newLogs.push('Login successful. Retrieving profile...');
                    const profile = await getUserProfile();
                    if (profile) {
                        newLogs.push(`Welcome back, ${profile.alias}.`);
                    } else {
                        newLogs.push('No profile found. Please try again later.');
                    }
                } catch (error: any) {
                    newLogs.push(`Login failed: ${new FirebaseError(error.code, error.message)}`);
                }
                break;
            case 'signupEmail':
                setEmail(text);
                newLogs.push('Enter your password:');
                setStep('signupPassword');
                break;
            case 'signupPassword':
                setPassword(text);
                newLogs.push('Enter a username:');
                setStep('signupUsername');
                break;
            case 'signupUsername':
                try {
                    await signUp(email, password);
                    await createUserProfile(text, '../assets/images/avatars/mustacheF.png');
                } catch (error: any) {
                    newLogs.push(`Signup failed: ${new FirebaseError(error.code, error.message)}`);
                }
                break;
            default:
                newLogs.push(
                    `Unknown command: ${text}. Use HELP to see all available commands.`
                );
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
                    <CommandInput
                        input={input}
                        setInput={setInput}
                        handleCommand={handleCommand}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AuthScreen;
