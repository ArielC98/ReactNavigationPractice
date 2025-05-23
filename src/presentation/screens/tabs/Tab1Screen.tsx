import { DrawerActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'


export const Tab1Screen = () => {

  const navigation = useNavigation();


  return (
    <View>
      <Text>Tab1Screen</Text>
    </View>
  )
}
