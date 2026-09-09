import { NativeTabs as OriginalNativeTabs, Icon, Badge, Label } from 'expo-router/unstable-native-tabs';
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
      labelVisibilityMode="labeled"
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      tintColor={colors.iconColorFocused}
      iconColor={{ default: '#817c7c', selected: '#E60023' }}
      labelStyle={{ selected: { color: colors.activeText } }}>
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
        <Badge>9+</Badge>
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

      {/* <NativeTabs.Trigger name="search" role='search' options={{ title: 'Search'}}>
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
        <Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          // renderingMode="template"
        />
      </NativeTabs.Trigger> */}
    </NativeTabs>
  );
}
