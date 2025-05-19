import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { DrawerActions, type NavigationProp, useNavigation } from "@react-navigation/native";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { type RootStackParams } from "../../../routes/StackNavigator";
import { useEffect } from "react";


export const HomeScreen = (props: any) => {


  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    
    
        
  }, [])
  


  return (
    <View style={globalStyles.container}>


      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Products"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  )
}
