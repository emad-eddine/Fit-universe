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
import { useState } from 'react';
import { addUserToDb } from '../../controllers/authController';

export default function SingupScreen() {
  
  const router = useRouter()
  const [userName,setUserName] = useState<string>("")
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
            <Text style={styles.formTitle}>Singup</Text>
            <CustomInputField label="Name" onValueChange={(text)=>{
              setUserName(text)
            }}/>
            <CustomInputField label="Email" onValueChange={(text)=>{
              setEmail(text)
            }} />
            <CustomInputField isSecure={true} label="Password" onValueChange={(text)=>{
              setPassword(text)
            }}/>
            <CustomBtn
              btnName="Singup"
              onBtnClick={() => {
                addUserToDb(userName,email,password).then(()=>{
                
                      console.log('added to db');
                    
                  
                }).catch((e)=>{
                  console.log(e);
                  
                })
              }}
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
