

import { View, Text } from 'react-native'
import { styles } from './CustomMemberField.style'


interface Props{
    alreadyText : string,
    actionText : string,
    onActionClick : () => void
}



const CustomMemberField:React.FC<Props> = ({alreadyText,actionText,onActionClick}) => {
  return (
   <View style={styles.memberContainer}>
                <Text style={styles.memberTopText}>{alreadyText}</Text>
                <Text style={styles.memberActionText} onPress={onActionClick}>{actionText}</Text>
            </View>
  )
}
export default CustomMemberField