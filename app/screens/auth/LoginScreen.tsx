import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { styles } from './auth.style';
import CustomSafeView from '../../components/custom_safe_view/CustomSafeView';
import CustomInputField from '../../components/custom_input_field/CustomInputField';
import CustomBtn from '../../components/custom_btn/CustomBtn';
import CustomMemberField from '../../components/custom_member_field/CustomMemberField';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { checkUserCredentials } from '../../controllers/authController';
import { DB_RESPONSE } from '../../utils/constants';
export default function LoginScreen() {



  const router = useRouter()

  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")
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
            <Text style={styles.formTitle}>Login</Text>
            <CustomInputField label="Email" onValueChange={(text)=>{
              setEmail(text)
            }}/>
            <CustomInputField label="Password" onValueChange={(text)=>{
              setPassword(text)
            }} />
            <CustomBtn
              btnName="Login"
              onBtnClick={() => {
               checkUserCredentials(email,password).then((value)=>{
                console.log(value);
               }).catch((e)=>{
                console.log(e);
                
               })
                
              }}
              customBtnStyle={styles.btn}
              customBtnTextStyle={styles.btnText}
            />

            <CustomMemberField
              alreadyText="Not a member? "
              actionText="Singup"
              onActionClick={()=>{
                router.replace("screens/auth/SingupScreen")
              }}
            />
          </View>
        </View>
      </CustomSafeView>
    </ImageBackground>
  );
}
