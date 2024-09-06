// src/components/AnimatedComponents/FlickerOverlay.tsx
import React from 'react';
import { Animated } from 'react-native';
import Svg, { Defs, Rect, Pattern } from 'react-native-svg';
import { gameStyles as styles } from '../assets/styles/gameStyle';

interface FlickerOverlayProps {
    flickerAnim: Animated.Value;
}

const FlickerOverlay: React.FC<FlickerOverlayProps> = ({ flickerAnim }) => {
    return (
        <Animated.View style={[styles.flickerOverlay, { opacity: flickerAnim }]}>
            <Svg height="100%" width="100%" style={styles.screenLineV}>
                <Defs>
                    <Pattern id="pattern-vertical" patternUnits="userSpaceOnUse" width="2" height="2">
                        <Rect width="2" height="1" fill="rgba(18, 16, 16, 0.0)" />
                        <Rect y="1" width="2" height="1" fill="rgba(0, 0, 0, 0.25)" />
                    </Pattern>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#pattern-vertical)" />
            </Svg>
            <Svg height="100%" width="100%" style={styles.screenLineH}>
                <Defs>
                    <Pattern id="pattern-horizontal" patternUnits="userSpaceOnUse" width="3" height="3">
                        <Rect width="1" height="3" fill="rgba(255, 0, 0, 0.06)" />
                        <Rect x="1" width="1" height="3" fill="rgba(0, 255, 0, 0.02)" />
                        <Rect x="2" width="1" height="3" fill="rgba(0, 0, 255, 0.06)" />
                    </Pattern>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#pattern-horizontal)" />
            </Svg>
        </Animated.View>
    );
};

export default FlickerOverlay;
