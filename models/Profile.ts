// models/Profile.ts

import {Reputation} from './Reputation';

export class Profile {
    alias: string;
    reputation: string;
    trojans: number;
    location: string;
    status: string;
    xp: number;
    totalContracts: number;
    completedContracts: number;
    failedContracts: number;
    avatar: string;

    constructor(
        alias: string,
        trojans: number = 0,
        location: string = 'New Vega System',
        status: string = 'active',
        xp: number = 0,
        totalContracts: number = 0,
        completedContracts: number = 0,
        failedContracts: number = 0,
        avatar: string,
    ) {
        this.alias = alias;
        this.reputation = this.calculateReputation();
        this.trojans = trojans;
        this.location = location;
        this.status = status;
        this.xp = xp;
        this.totalContracts = totalContracts;
        this.completedContracts = completedContracts;
        this.failedContracts = failedContracts;
        this.avatar = avatar;
    }

    updateReputation(newRep: string): void {
        this.reputation = newRep;
    }

    addTrojans(count: number): void {
        this.trojans += count;
    }

    updateLocation(newLocation: string): void {
        this.location = newLocation;
    }

    setStatus(newStatus: string): void {
        this.status = newStatus;
    }

    addXp(amount: number): void {
        this.xp += amount;
        this.reputation = this.calculateReputation();
    }

    incrementTotalContracts(): void {
        this.totalContracts += 1;
    }

    incrementCompletedContracts(): void {
        this.completedContracts += 1;
    }

    incrementFailedContracts(): void {
        this.failedContracts += 1;
    }

    updateAvatar(newAvatar: string): void {
        this.avatar = newAvatar;
    }

    private calculateReputation(): string {
        const currentReputation = Reputation.reduce((prev, current) => {
            return this.xp >= current.minXP ? current : prev;
        });

        return currentReputation.title;
    }

}