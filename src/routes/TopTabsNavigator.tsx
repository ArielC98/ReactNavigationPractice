import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../presentation/screens/profile/ProfileScreen';
import { AboutScreen } from '../presentation/screens/about/AboutScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}