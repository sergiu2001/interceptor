// src/components/ScanlineOverlay.tsx
import React from 'react';
import { Animated, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { gameStyles as styles } from '../assets/styles/gameStyle';

interface ScanlineOverlayProps {
    scanlineAnim: Animated.Value;
}

const ScanlineOverlay: React.FC<ScanlineOverlayProps> = ({ scanlineAnim }) => {
    const scanlineStyle = {
        transform: [
            {
                translateY: scanlineAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, Dimensions.get('window').height],
                }),
            },
        ],
    };

    return (
        <Animated.View style={[styles.scanlineContainer, scanlineStyle]}>
            <LinearGradient
                colors={['rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.05)']}
                style={styles.scanline}
            />
        </Animated.View>
    );
};

export default ScanlineOverlay;
