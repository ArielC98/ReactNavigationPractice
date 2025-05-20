import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../presentation/screens/tabs/Tab1Screen';
import { Tab2Screen } from '../presentation/screens/tabs/Tab2Screen';
import { Tab3Screen } from '../presentation/screens/tabs/Tab3Screen';
import { globalColors } from '../presentation/theme/theme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyle : {
          backgroundColor: globalColors.background,
        },
        tabBarLabelStyle:{
          marginBottom: 5
        },
        headerStyle: {
          elevation:0
        },
        tabBarStyle:{
          borderTopWidth:0,
          elevation:0
        }
      }}  
    >
      <Tab.Screen name="Tab1" options = {{title:'Tab 1', tabBarIcon:({color}) =>(<Text style = {{color}}>Tab1</Text>)}}component={Tab1Screen} />
      <Tab.Screen name="Tab2" options = {{title:'Tab 2', tabBarIcon:({color}) =>(<Text style = {{color}}>Tab2</Text>)}}component={Tab2Screen} />
      <Tab.Screen name="Tab3" options = {{title:'Tab 3', tabBarIcon:({color}) =>(<Text style = {{color}}>Tab3</Text>)}}component={Tab3Screen} />
    </Tab.Navigator>
  );
}