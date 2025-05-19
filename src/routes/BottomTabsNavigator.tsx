import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../presentation/screens/settings/SettingsScreen';
import { Tab1Screen } from '../presentation/screens/tabs/Tab1Screen';
import { Tab2Screen } from '../presentation/screens/tabs/Tab2Screen';
import { Tab3Screen } from '../presentation/screens/tabs/Tab3Screen';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1Screen} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Tab3" component={Tab3Screen} />
    </Tab.Navigator>
  );
}