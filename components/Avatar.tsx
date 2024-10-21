import React from 'react';
import FastImage from 'react-native-fast-image';
import useAvatarUri from '../hooks/useAvatarURI';
import { gameStyles as styles } from '../assets/styles/gameStyle';

interface AvatarProps {
    avatarPath: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatarPath }) => {
    const imageUri = useAvatarUri(avatarPath);

    return (
        <FastImage
            style={styles.avatar}
            source={{
                uri: imageUri ?? undefined,
                priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
        />
    );
};

export default Avatar;
