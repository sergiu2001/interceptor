import { useState, useEffect } from 'react';

interface UseTypewriterAnimationOptions {
    typingSpeed?: number; // Milliseconds between each character
    onComplete?: () => void; // Callback when typing is complete
}

const useTypewriterAnimation = (
    text: string,
    { typingSpeed = 10, onComplete }: UseTypewriterAnimationOptions = {}
) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);  // New state to track completion

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeoutId);
        } else if (!isComplete) {
            setIsComplete(true); // Set complete when animation finishes
            if (onComplete) onComplete();
        }
    }, [index, text, typingSpeed, onComplete, isComplete]);

    return { displayedText, isComplete };  // Return the new `isComplete` state
};

export default useTypewriterAnimation;
