import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Contract } from '../models/Contract';
import { Task } from '../models/Task';
import { gameStyles as styles } from '../assets/styles/gameStyle';

interface TaskDisplayProps {
    contract: Contract;
}

const TaskDisplay: React.FC<TaskDisplayProps> = ({ contract }) => {
    return (
        <ScrollView style={styles.taskContainer}>
            { contract.tasks.slice(0, contract.currentTaskIndex + 1).map((task: Task, index: number) => (
                <View style={styles.taskCard} key={task.id}>
                    <Text
                        style={[
                            task.completed == 1 ? styles.taskCompletedText : task.completed == 2 ? styles.taskIncompleteText : styles.taskText,
                        ]}
                    >
                        [{index+1}]. {task.description}
                    </Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default TaskDisplay;