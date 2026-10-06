import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';


export default function AppTabs() {
  const systemScheme = useColorScheme();
  const scheme = systemScheme === 'dark' ? 'dark' : 'light';
  const colors = Colors[scheme];
  // const colors = Colors[scheme ?? 'light'];

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
      <NativeTabs.Trigger name="home">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('../../assets/images/tabIcons/home-filled.png')}
          // src={require('@icons/home-filled.png')}
        />
      </NativeTabs.Trigger>

      {/* Favourite Tab */}
      <NativeTabs.Trigger name="favourite">
        <NativeTabs.Trigger.Label>Favourite</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('../../assets/images/tabIcons/heart.png')}
          // src={require('@icons/heart.png')}
        />
      </NativeTabs.Trigger>

      {/* Order Tab */}
      <NativeTabs.Trigger name="order">
        <NativeTabs.Trigger.Label>Order</NativeTabs.Trigger.Label>
        {/* <Badge>9+</Badge> */}
        <NativeTabs.Trigger.Icon
          src={require('../../assets/images/tabIcons/order.png')}
          // src={require('@icons/order.png')}
        />
      </NativeTabs.Trigger>

      {/* Profile Tab */}
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('../../assets/images/tabIcons/profile.png')}
          // src={require('@icons/profile.png')}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

AppTabs.displayName = 'AppTabs';
