import { View, Text, TextInput } from 'react-native';
import { styles } from './CustomInputField.style';
import { useState } from 'react';


interface Props{
    label : string,
    onValueChange : (stateValue:string) => void,
    isSecure ?: boolean
}



const CustomInputField:React.FC<Props> = ({label,onValueChange,isSecure}) => {

  const [textValue,setText] = useState("")
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput secureTextEntry={isSecure} style={styles.inputField} value={textValue} onChangeText={(text)=>{
        setText(text)
        onValueChange(text)
      }}
      />
    </View>
  );
};
export default CustomInputField;
