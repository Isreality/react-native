import { Platform } from 'react-native';

export const Colors = {
  // primary: '#E60023',

  light: {
    primary: '#E60023',
    text: '#646464',
    activeText: '#Eb1c26',
    background: '#ffffff',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#fafafa',
    navBackground: '#e8e7ef',
    iconColor: '#686477',
    iconColorFocused: '#201e2b',
    textSecondary: '#60646C',
  },
  dark: {
    primary: '#E60023',
    text: '#ffffff',
    activeText: '#E60023',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    navBackground: '#201e2b',
    iconColor: '#e5e5e5',
    iconColorFocused: '#ffffff',
    textSecondary: '#B0B4BA',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
