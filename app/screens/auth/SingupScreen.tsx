import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StatusBar,
} from 'react-native';
import CustomSafeView from '../../components/custom_safe_view/CustomSafeView';
import { styles } from './auth.style';
import CustomInputField from '../../components/custom_input_field/CustomInputField';
import CustomBtn from '../../components/custom_btn/CustomBtn';
import CustomMemberField from '../../components/custom_member_field/CustomMemberField';
import { useRouter } from 'expo-router';

export default function SingupScreen() {
  
  const router = useRouter()
  
    return (
    <ImageBackground
      source={require('../../assets/images/background_image.png')}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <CustomSafeView>
        <StatusBar barStyle="light-content" />
        <View style={styles.formRootContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.containerText}>FitUniverse</Text>
            <Text style={styles.formTitle}>Singup</Text>
            <CustomInputField label="Name" />
            <CustomInputField label="Email" />
            <CustomInputField label="Password" />
            <CustomBtn
              btnName="Singup"
              onBtnClick={() => {}}
              customBtnStyle={styles.btn}
              customBtnTextStyle={styles.btnText}
            />

            <CustomMemberField
              alreadyText="Already a member? "
              actionText="Login"
              onActionClick={()=>{
                router.replace("screens/auth/LoginScreen")
              }}
            />
          </View>
        </View>
      </CustomSafeView>
    </ImageBackground>
  );
}
