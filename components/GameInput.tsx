import React from 'react';
import { TextInput, Button, View, TouchableHighlight } from 'react-native';
import { gameStyles as styles } from '../assets/styles/gameStyle';

interface GameInputProps {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleCommand: (text: string) => void;
    handleHistory: () => void;
}

const GameInput: React.FC<GameInputProps> = ({ input, setInput, handleCommand, handleHistory }) => {

    return (
        <View style={styles.gameInputContainer}>
            <TextInput
                style={[styles.gameInput]}
                value={input}
                onChangeText={setInput}
                onSubmitEditing={() => handleCommand(input)}
                placeholder='>_'
                placeholderTextColor="#4CAF50"
                autoCorrect={false}
                autoCapitalize="none"
            />
            <TouchableHighlight style={styles.gameInputButton} onPress={handleHistory} underlayColor={'#3b3b3b'} >
                <View />
            </TouchableHighlight>
        </View>
    );
};

export default GameInput;
