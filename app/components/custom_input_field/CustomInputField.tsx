import { View, Text, TextInput } from 'react-native';
import { styles } from './CustomInputField.style';


interface Props{
    label : string,
}



const CustomInputField:React.FC<Props> = ({label}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput style={styles.inputField}  />
    </View>
  );
};
export default CustomInputField;
