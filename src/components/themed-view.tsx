import { View, type ViewProps } from 'react-native';

import { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  type?: ThemeColor;
  safe?: boolean;
};

export function ThemedView({ style, safe = false, lightColor, darkColor, type, ...otherProps }: ThemedViewProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  if (!safe) return (
    <View 
      style={[{ backgroundColor: theme[type ?? 'background'] }, style]} 
      {...otherProps} 
    />
  )
  
  return (
    <View 
      style={[{ 
        backgroundColor: theme[type ?? 'background'], 
        paddingTop: insets.top,
        paddingBottom: insets.top,
      }, style]} 
      {...otherProps} 
    />
  )

  // return <View 
  //          style={[{ backgroundColor: theme[type ?? 'background'] }, style]} 
  //          {...otherProps} 
  //        />;
}
