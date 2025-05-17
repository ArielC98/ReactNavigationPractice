
import './utils/gesture-handler.native';

import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import { StackNavigator } from './routes/StackNavigator';


export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}