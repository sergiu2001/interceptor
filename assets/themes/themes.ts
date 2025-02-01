
import { ThemeVars } from './themeTypes';

export type ThemeType = 'Original' | 'ClassicDark' | 'FutureNeon' | 'BadFuture' | 'RetroDark';

export const themes: Record<ThemeType, ThemeVars> = {
    Original: {
        fontFamily: 'VT323Regular',
        mainColor: '#00FF00',
        mainShadowColor: '#FFFFFF',
        secondaryColor: '#FFB000',
        secondaryShadowColor: '#FFFFFF',
        inputBorderColor: '#00B00099',
        avatarTintColor: '#00FF00',
        avatarBorderColor: '#FFB000AA',
    },

    ClassicDark: {
        fontFamily: 'VT323Regular',
        mainColor: '#00FF00', // Classic green
        mainShadowColor: '#000000',
        secondaryColor: '#660033', // Classic red
        secondaryShadowColor: '#1A3300',
        inputBorderColor: '#004D00AA',
        avatarTintColor: '#00FF00',
        avatarBorderColor: '#660033AA',
    },

    FutureNeon: {
        fontFamily: 'VT323Regular',
        mainColor: '#00FF00', // Green glow on black
        mainShadowColor: '#000000',
        secondaryColor: '#FF0080', // Purple glow
        secondaryShadowColor: '#4A4A4A',
        inputBorderColor: '#00AA00AA',
        avatarTintColor: '#00FF00',
        avatarBorderColor: '#FF0080AA',
    },

    BadFuture: {
        fontFamily: 'VT323Regular',
        mainColor: '#00FFFF', // Cyan glow on black background
        mainShadowColor: '#000000',
        secondaryColor: '#FF1E56', // Neon pink glow
        secondaryShadowColor: '#660033',
        inputBorderColor: '#004D00AA',
        avatarTintColor: '#00FFFF',
        avatarBorderColor: '#FF1E56AA',
    },

    RetroDark: {
        fontFamily: 'VT323Regular',
        mainColor: '#00FF00', // Green on black
        mainShadowColor: '#000000',
        secondaryColor: '#FF1E56', // Neon pink
        secondaryShadowColor: '#660033',
        inputBorderColor: '#004D00AA',
        avatarTintColor: '#00FF00',
        avatarBorderColor: '#FF1E56AA',
    }

};
