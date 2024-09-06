// models/Task.ts

export class Task {
    id: string;
    description: string;
    rule: (input: string) => boolean;
    completed: boolean;

    constructor(id: string, description: string, rule: (input: string) => boolean) {
        this.id = id;
        this.description = description;
        this.rule = rule;
        this.completed = false;
    }

    validate(input: string): boolean {
        return this.rule(input);
    }
}

// Example Task Implementations

export const exampleTasks: Task[] = [
    new Task('1', 'Password must be at least 7 characters long', (input) => input.length >= 7),
    new Task('2', 'Password must contain at least one number', (input) => /\d/.test(input)),
    new Task('3', 'Password must contain an uppercase letter', (input) => /[A-Z]/.test(input)),
    new Task('4', 'Password must contain a special character', (input) => /[!@#$%^&*(),.?":{}|<>]/.test(input)),
    new Task('5', 'The sum of digits must be 25', (input) => {
        const digits = input.match(/\d/g);
        return digits ? digits.map(Number).reduce((a, b) => a + b, 0) === 25 : false;
    }),
    // Add more tasks as needed
];
