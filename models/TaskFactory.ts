import { Difficulty } from './Difficulty';
import { Task } from './Task';

export class TaskFactory {

    static taskMinLength(length: number): Task {
        return new Task(
            'b1',
            'The Codex Porta requires a sequence of at least {minLength} glyphs to authorize any further commands.',
            (input: string) => input.length >= length,
            { minLength: length },
        );
    }

    static taskUppercaseGlyphs(count: number): Task {
        return new Task(
            'b2',
            'The Codex Porta requires a sequence of {uppercaseGlyphsCount} uppercase glyphs to authorize any further commands.',
            (input: string) => input.match(/[A-Z]/g)?.length === count,
            { uppercaseGlyphsCount: count },
            '/[A-Z]/g'
        );
    }

    static taskSpecialGlyphs(count: number): Task {
        return new Task(
            'b3',
            'The Codex Porta requires a sequence of {specialGlyphsCount} special glyphs to authorize any further commands.',
            (input: string) => input.match(/[!@#$%^&*(),.?":{}|<>]/g)?.length === count,
            { specialGlyphsCount: count },
            '/[!@#$%^&*(),.?":{}|<>]/g'
        );
    }

    static taskDigitGlyphsSum(sum: number): Task {
        return new Task(
            'b4',
            'The Codex Porta requires a sum of {digitGlyphsSum} digit glyphs in the sequence to authorize any further commands.',
            (input: string) => input.match(/\d/g)?.reduce((acc, digit) => acc + parseInt(digit, 10), 0) === sum,
            { digitGlyphsSum: sum },
            '/\d/g'
        );
    }



    static createTasksForDifficulty(difficulty: Difficulty): Task[] {
        switch (difficulty) {
            case Difficulty.Initiate:
                return [
                    this.taskMinLength(3),
                    this.taskUppercaseGlyphs(1),
                    this.taskSpecialGlyphs(1),
                    this.taskDigitGlyphsSum(Math.floor(Math.random() * (25 - 10 + 1)) + 10),
                ].sort(() => Math.random() - 0.5);

            case Difficulty.Adept:
                return [
                    this.taskMinLength(5),
                    this.taskUppercaseGlyphs(1),
                    this.taskSpecialGlyphs(1),
                    this.taskDigitGlyphsSum(Math.floor(Math.random() * (25 - 10 + 1)) + 10),
                ].sort(() => Math.random() - 0.5);

            case Difficulty.Operative:
                return [
                    this.taskMinLength(5),
                    this.taskUppercaseGlyphs(2),
                    this.taskSpecialGlyphs(2),
                    this.taskDigitGlyphsSum(Math.floor(Math.random() * (25 - 10 + 1)) + 10),
                ].sort(() => Math.random() - 0.5);

            case Difficulty.Executioner:
                return [
                    this.taskMinLength(7),
                    this.taskUppercaseGlyphs(2),
                    this.taskSpecialGlyphs(2),
                    this.taskDigitGlyphsSum(Math.floor(Math.random() * (25 - 10 + 1)) + 10),
                ].sort(() => Math.random() - 0.5);

            case Difficulty.Ascendant:
                return [
                    this.taskMinLength(7),
                    this.taskUppercaseGlyphs(2),
                    this.taskSpecialGlyphs(3),
                    this.taskDigitGlyphsSum(Math.floor(Math.random() * (25 - 10 + 1)) + 10),
                ].sort(() => Math.random() - 0.5);

            case Difficulty.Eclipse:
                return [
                    this.taskMinLength(9),
                    this.taskUppercaseGlyphs(3),
                    this.taskSpecialGlyphs(3),
                    this.taskDigitGlyphsSum(Math.floor(Math.random() * (25 - 10 + 1)) + 10),
                ].sort(() => Math.random() - 0.5);

            default:
                return [];
        }
    }
}
