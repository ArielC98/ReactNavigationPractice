import { Pressable, Text } from "react-native-gesture-handler"
import { globalStyles } from "../../theme/theme"
import { useNavigation } from "@react-navigation/native";

interface Props {
  label: string,
  onPress: () => void
}


export const PrimaryButton = ({label, onPress}:Props) => {

  return (
    <Pressable
      onPress={onPress}
      style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  )
}
