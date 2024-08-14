// src/hooks/useScanlineAnimation.ts
import { useEffect, useState } from 'react';
import { Animated } from 'react-native';

export const useScanlineAnimation = () => {
    const scanlineAnim = useState(new Animated.Value(0))[0];

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scanlineAnim, {
                    toValue: 1,
                    duration: 3000,
                    useNativeDriver: true,
                }),
                Animated.delay(10000),
            ])
        ).start();
    }, [scanlineAnim]);

    return scanlineAnim;
};
