// src/hooks/useTypewriterAnimation.ts
import { useState, useEffect } from 'react';

interface UseTypewriterAnimationOptions {
    typingSpeed?: number; // Milliseconds between each character
    onComplete?: () => void; // Callback when typing is complete
}

const useTypewriterAnimation = (
    text: string,
    { typingSpeed = 50, onComplete }: UseTypewriterAnimationOptions = {}
) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeoutId);
        } else if (onComplete) {
            onComplete();
        }
    }, [index, text, typingSpeed, onComplete]);

    return displayedText;
};

export default useTypewriterAnimation;
