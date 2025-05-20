import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../presentation/screens/home/HomeScreen';
import { ProductsScreen } from '../presentation/screens/products/ProductsScreen';
import { SettingsScreen } from '../presentation/screens/settings/SettingsScreen';
import { ProductScreen } from '../presentation/screens/products/ProductScreen';
import { Pressable, Text } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';



export type RootStackParams = {
  Home: undefined,
  Products: undefined,
  Product: { id: number, name: string },
  Settings: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        }
      }}
    >
      {/* <Stack.Group
        screenOptions={({ navigation }) => ({
          presentation: 'transparentModal',
          headerLeft: () => (
            <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
              <Text>Menu</Text>
            </Pressable>
          ),
        })}
      > */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      {/* </Stack.Group> */}
    </Stack.Navigator>
  );
}