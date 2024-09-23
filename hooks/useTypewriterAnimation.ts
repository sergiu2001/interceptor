import { useState, useEffect } from 'react';

interface UseTypewriterAnimationOptions {
    typingSpeed?: number; // Milliseconds between each character
    onComplete?: () => void; // Callback when typing is complete
    blinkSpeed?: number;     // Milliseconds for the blinking underscore toggle
}

const useTypewriterAnimation = (
    text: string,
    { typingSpeed = 30, onComplete, blinkSpeed = 100 }: UseTypewriterAnimationOptions = {}
) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);  
    const [showUnderscore, setShowUnderscore] = useState(true);  // For blinking effect

    // Typing effect
    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeoutId);
        } else if (!isComplete) {
            setIsComplete(true);  // Set complete when animation finishes
            if (onComplete) onComplete();
        }
    }, [index, text, typingSpeed, onComplete, isComplete]);

    // Blinking underscore effect
    useEffect(() => {
        if (!isComplete) {
            const blinkIntervalId = setInterval(() => {
                setShowUnderscore((prev) => !prev);
            }, blinkSpeed);

            return () => clearInterval(blinkIntervalId);
        }
    }, [isComplete, blinkSpeed]);

    const displayedTextWithUnderscore = isComplete
        ? displayedText // No underscore after completion
        : `${displayedText}${showUnderscore ? '_' : ' '}`; // Append blinking underscore

    return { displayedText: displayedTextWithUnderscore, isComplete };
};

export default useTypewriterAnimation;
