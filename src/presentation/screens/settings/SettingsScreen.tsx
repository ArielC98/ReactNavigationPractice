import {View, Text} from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {

  const navigation = useNavigation();

  return (
    <View style = {globalStyles.container}>
      <Text>SettingsScreen</Text> 

      <PrimaryButton
        label='Previous'
        onPress={()=> navigation.goBack()}
      />
      <PrimaryButton
        label='Home'
        onPress={()=> navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  )
}
