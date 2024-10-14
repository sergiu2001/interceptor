// src/services/firebaseFirestoreService.tsx

import { db, auth } from '../android/app/firebaseConfig';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { Profile } from '../models/Profile';


export const createUserProfile = async (alias: string, avatar: string) => {
    try {
        const user = auth.currentUser;

        if (!user) {
            throw new Error('No authenticated user found');
        }

        // Create a new Profile instance
        const profile = new Profile(alias, 0, 'New Vega System', 'active', 0, 0, 0, 0, avatar);

        // Save the profile to Firestore
        await setDoc(doc(db, 'users', user.uid), {
            alias: profile.alias,
            reputation: profile.reputation,
            trojans: profile.trojans,
            location: profile.location,
            status: profile.status,
            xp: profile.xp,
            totalContracts: profile.totalContracts,
            completedContracts: profile.completedContracts,
            failedContracts: profile.failedContracts,
            avatar: profile.avatar,
        });
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw new Error('Profile creation failed');
    }
};

export const getUserProfile = async (): Promise<Profile | null> => {
    try {
        const user = auth.currentUser;

        if (!user) {
            throw new Error('No authenticated user found');
        }

        const userProfileRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userProfileRef);

        if (docSnap.exists()) {
            const data = docSnap.data();

            // Recreate the Profile from the Firestore document
            const profile = new Profile(
                data.alias,
                data.trojans,
                data.location,
                data.status,
                data.xp,
                data.totalContracts,
                data.completedContracts,
                data.failedContracts,
                data.avatar
            );

            return profile;
        } else {
            console.log('No profile found for the user');
            return null;
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return null;
    }
};

export const updateUserProfile = async (profile: Profile) => {
    try {
        const user = auth.currentUser;

        if (!user) {
            throw new Error('No authenticated user found');
        }

        const userProfileRef = doc(db, 'users', user.uid);

        // Update the profile in Firestore
        await updateDoc(userProfileRef, {
            alias: profile.alias,
            reputation: profile.reputation,
            trojans: profile.trojans,
            location: profile.location,
            status: profile.status,
            xp: profile.xp,
            totalContracts: profile.totalContracts,
            completedContracts: profile.completedContracts,
            failedContracts: profile.failedContracts,
            avatar: profile.avatar,
        });
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw new Error('Profile update failed');
    }
};
