import { NativeTabs as OriginalNativeTabs, Icon } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

type NativeTabsType = typeof OriginalNativeTabs & {
  Trigger: React.ComponentType<{ name: string; children?: React.ReactNode }> & {
    Label: React.ComponentType<{ children: React.ReactNode }>;
    Icon: React.ComponentType<{ src: any; renderingMode?: 'template' | 'original' }>;
  };
};

const NativeTabs = OriginalNativeTabs as NativeTabsType;

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme ?? 'light'];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      // tabBarActiveTintColor={colors.iconColorFocused}
      labelStyle={{ selected: { color: colors.text } }}>
      <NativeTabs.Trigger name="home" options={{ title: 'Home'}}>
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <Icon
          src={require('@/assets/images/tabIcons/home.png')}
          // renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="order" options={{ title: 'Order'}}>
        <NativeTabs.Trigger.Label>Order</NativeTabs.Trigger.Label>
        <Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          // renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="cart" options={{ title: 'Cart'}}>
        <NativeTabs.Trigger.Label>Cart</NativeTabs.Trigger.Label>
        <Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          // renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile" options={{ title: 'Profile'}}>
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          // renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
