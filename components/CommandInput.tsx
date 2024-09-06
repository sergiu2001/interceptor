// src/components/CommandInput.tsx
import React from 'react';
import { TextInput } from 'react-native';
import { gameStyles as styles } from '../assets/styles/gameStyle';

interface CommandInputProps {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    handleCommand: (text: string) => void;
}

const CommandInput: React.FC<CommandInputProps> = ({ input, setInput, handleCommand }) => {
    return (
        <TextInput
            style={[styles.input]}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={() => handleCommand(input)}
            placeholder=">_"
            placeholderTextColor="#888"
        />
    );
};

export default CommandInput;
