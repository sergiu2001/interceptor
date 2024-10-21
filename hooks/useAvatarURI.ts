import { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage, getStoredAvatarUri, storeAvatarUri } from '../firebaseConfig';

const useAvatarUri = (avatarPath: string) => {
    const [imageUri, setImageUri] = useState<string | null>(null);

    useEffect(() => {
        const loadImage = async () => {
            const cachedUri = await getStoredAvatarUri();

            if (cachedUri) {
                setImageUri(cachedUri);
            } else {
                fetchAvatarUri();
            }
        };

        const fetchAvatarUri = async () => {
            const avatarRef = ref(storage, "avatars/"+avatarPath);

            try {
                const uri = await getDownloadURL(avatarRef);
                setImageUri(uri);
                storeAvatarUri(uri);
            } catch (error) {
                console.error('Error fetching avatar URI from Firebase Storage:', error);
            }
        };

        loadImage();
    }, [avatarPath]);

    return imageUri;
};

export default useAvatarUri;
