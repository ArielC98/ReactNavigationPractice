import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../presentation/screens/tabs/Tab1Screen';
import { globalColors } from '../presentation/theme/theme';
import { Pressable, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
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
            <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
              <Text>Menu</Text>
            </Pressable>
          ),
        })}
      >

        <Tab.Screen name="Tab1" options={{ title: 'Tab 1', tabBarIcon: ({ color }) => (<Text style={{ color, fontSize: 12 }}>Tab1</Text>)}} component={Tab1Screen} />
        <Tab.Screen name="Tab2" options={{ title: 'Tab 2', tabBarIcon: ({ color }) => (<Text style={{ color, fontSize: 12 }}>Tab2</Text>) }} component={TopTabsNavigator} />
        <Tab.Screen name="Tab3" options={{ title: 'Tab 3', tabBarIcon: ({ color }) => (<Text style={{ color, fontSize: 12 }}>Tab3</Text>) }} component={StackNavigator} />
      </Tab.Group>
    </Tab.Navigator>
  );
}