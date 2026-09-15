import { NativeTabs, Icon, Badge, Label } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';


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
      labelStyle={{ selected: { color: colors.activeText } }}
    >

      {/* Home Tab */}  
      <NativeTabs.Trigger name="home" options={{ title: 'Home'}}>
        <Label>Home</Label>
        <Icon
          src={require('@/assets/images/tabIcons/home-filled.png')}
        />
      </NativeTabs.Trigger>

      {/* Favourite Tab */}
      <NativeTabs.Trigger name="favourite" options={{ title: 'Favourite'}}>
        <Label>Favourite</Label>
        <Icon
          src={require('@/assets/images/tabIcons/heart.png')}
        />
      </NativeTabs.Trigger>

      {/* Order Tab */}
      <NativeTabs.Trigger name="order" options={{ title: 'Order'}}>
        <Label>Order</Label>
        {/* <Badge>9+</Badge> */}
        <Icon
          src={require('@/assets/images/tabIcons/order.png')}
        />
      </NativeTabs.Trigger>

      {/* Profile Tab */}
      <NativeTabs.Trigger name="profile" options={{ title: 'Profile'}}>
        <Label>Profile</Label>
        <Icon
          src={require('@/assets/images/tabIcons/profile.png')}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

AppTabs.displayName = 'AppTabs';
