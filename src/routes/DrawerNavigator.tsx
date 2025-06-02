import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { ProfileScreen } from '../presentation/screens/profile/ProfileScreen';
import { useWindowDimensions, View } from 'react-native';
import { globalColors } from '../presentation/theme/theme';
import { IonIcon } from '../presentation/components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {


  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator    
      drawerContent = {(props) => <CustomDrawerContent {...props}/>}
      screenOptions={{
        drawerType: (dimensions.width >= 760)?'permanent':'slide',

        headerShown:false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        }
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen options={{drawerIcon: ({color}) =>(<IonIcon name="bonfire-outline" color ={color}/>)}} name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen options={{drawerIcon: ({color}) =>(<IonIcon name="person-circle-outline" color ={color}/>)}} name="Profile" component={ProfileScreen} />
      
    </Drawer.Navigator >
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) =>{
  return(
    <DrawerContentScrollView>
      <View
        style= {{
          height:150,
          backgroundColor:globalColors.primary,
          margin:30,
          borderRadius:50
        }}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}