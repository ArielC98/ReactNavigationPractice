import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../presentation/screens/tabs/Tab1Screen';
import { globalColors } from '../presentation/theme/theme';
import { Pressable, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../presentation/components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{

        tabBarActiveTintColor: globalColors.primary,

        sceneStyle: {
          backgroundColor: globalColors.background,
        },
        tabBarLabelStyle: {
          marginBottom: 5
        },
        headerStyle: {
          elevation: 0
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}

    >
      <Tab.Group
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <Pressable
              style = {{marginLeft: 5}}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
              <IonIcon name="menu-outline" color = {globalColors.primary}/>
            </Pressable>
          ),
        })}
      >

        <Tab.Screen name="Tab1" options={{ title: 'Tab 1', tabBarIcon: ({ color }) => (<IonIcon name = "accessibility-outline" color = {color}/>) }} component={Tab1Screen} />
        <Tab.Screen name="Tab2" options={{ title: 'Tab 2', tabBarIcon: ({ color }) => (<IonIcon name = "airplane-outline" color = {color}/>) }} component={TopTabsNavigator} />
        <Tab.Screen name="Tab3" options={{ title: 'Tab 3', tabBarIcon: ({ color }) => (<IonIcon name = "bar-chart-outline" color = {color}/>) }} component={StackNavigator} />
      </Tab.Group>
    </Tab.Navigator>
  );
}