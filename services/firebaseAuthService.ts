import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

// Log In function
export const logIn = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// Sign Up function
export const signUp = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// Log Out function
export const logOut = async () => {
    try {
        await auth.signOut();
    } catch (error: any) {
        throw new Error(error.message);
    }
};
