
import './utils/gesture-handler.native';

import { NavigationContainer } from "@react-navigation/native"
import { StackNavigator } from './routes/StackNavigator';
import { DrawerNavigator } from './routes/DrawerNavigator';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <DrawerNavigator/>
    </NavigationContainer>
  )
}