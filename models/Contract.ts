// models/Contract.ts
import { Task } from './Task';

export class Contract {
    tasks: Task[];
    currentTaskIndex: number;
    createdAt: Date;
    expirationTime: number;

    constructor(tasks: Task[] = [], expirationTime: number = 24 * 60 * 60 * 1000) {
        this.tasks = tasks;
        this.currentTaskIndex = 0;
        this.createdAt = new Date();
        this.expirationTime = expirationTime;
    }

    isExpired(): boolean {
        const now = new Date().getTime();
        return now > this.createdAt.getTime() + this.expirationTime;
    }

    getCurrentTask(): Task | undefined {
        return this.tasks[this.currentTaskIndex];
    }

    completeCurrentTask(userInput: string): boolean {
        const currentTask = this.getCurrentTask();
        if (currentTask && currentTask.validate(userInput)) {
            currentTask.completed = true;
            this.currentTaskIndex++;
            return true;
        }
        return false;
    }

    areAllTasksCompleted(): boolean {
        return this.currentTaskIndex >= this.tasks.length;
    }
}
