import { View, Text,Pressable } from 'react-native'
import { styles } from './CustomBtn.style'


interface Props{
    customBtnStyle ?: Object,
    customBtnTextStyle ?: Object,
    btnName : string,
    onBtnClick : () => void
}




const CustomBtn:React.FC<Props> = ({customBtnStyle,customBtnTextStyle,btnName,onBtnClick}) => {
  return (
    <Pressable style={[customBtnStyle,styles.btn]} onPress={onBtnClick}>
                  <Text style={[customBtnTextStyle,styles.btnText]}>{btnName}</Text>
    </Pressable>
  )
}
export default CustomBtn