import { storage } from '@/firebaseConfig';
import { ref, getDownloadURL, listAll, getMetadata } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';

const CACHE_KEY = 'cachedImages';

const getCachedImage = async (imageRef: any, folder: string): Promise<string | null> => {
    try {
        const imageName = (await getMetadata(imageRef)).name;
        const cachePath = `${folder}/${imageName}.png`;
        const fileUri = `${FileSystem.documentDirectory}${cachePath.replace(/\//g, '_')}`;

        // Load cache data
        const cachedImages = await AsyncStorage.getItem(CACHE_KEY);
        const cacheMap = cachedImages ? JSON.parse(cachedImages) : {};

        // Return cached path if available
        if (cacheMap[cachePath]) {
            const fileExists = await FileSystem.getInfoAsync(cacheMap[cachePath]);
            if (fileExists.exists) {
                return cacheMap[cachePath];
            }
        }

        // Download image from Firebase
        const downloadUrl = await getDownloadURL(imageRef);
        const downloaded = await FileSystem.downloadAsync(downloadUrl, fileUri);

        if (downloaded.status === 200) {
            cacheMap[cachePath] = fileUri;
            await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(cacheMap));
            return fileUri;
        }
    } catch (error) {
        console.error('Error caching image:', error);
    }
    return null;
};

export const downloadAvatarImage = async (imageName: string): Promise<string | null> => {
    try {
        const imageRef = ref(storage, `avatars/${imageName}.png`);
        return await getCachedImage(imageRef, 'avatars');
    } catch (error) {
        console.error('Error downloading avatar image:', error);
        throw error;
    }
};

export const downloadOtherImage = async (imageName: string): Promise<string | null> => {
    try {
        const imageRef = ref(storage, `other/${imageName}.png`);
        return await getCachedImage(imageRef, 'other');
    } catch (error) {
        console.error('Error downloading other image:', error);
        throw error;
    }
};

export const downloadAvatars = async (): Promise<string[][]> => {
    try {
        const imageListRef = ref(storage, 'avatars/');
        const list = await listAll(imageListRef);

        const downloadUrlList = await Promise.all(
            list.items.map(async (imageRef) => {
                const localPath = await getCachedImage(imageRef, 'avatars');
                const imageName = (await getMetadata(imageRef)).name;
                return [localPath || '', imageName];
            })
        );

        return downloadUrlList;
    } catch (error) {
        console.error('Error downloading avatars:', error);
        throw error;
    }
};
