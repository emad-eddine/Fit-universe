
import { 
  View, 
  Text,
  ImageBackground,
  StatusBar,
  Pressable
} 
from 'react-native'
import { styles } from './LandingScreen.style'
import CustomSafeView from '../../components/custom_safe_view/CustomSafeView'
import CustomBtn from '../../components/custom_btn/CustomBtn'

import { useRouter } from 'expo-router'


export default function LandingScreen() {
  
  const router = useRouter()
  
  return (
    <ImageBackground 
    source={require("../../assets/images/background_image.png")}
    resizeMode='cover'
    style={styles.backgroundImage}>
    
      <StatusBar 
      barStyle="light-content"
      />
      <CustomSafeView>
      
          <Text style={[styles.headerTitle1,styles.headerTextStyle]}>Welcome to FitUniverse</Text>
          <Text style={[styles.headerTitle2,styles.headerTextStyle]}>Your Ultimate</Text>
          <View style={styles.headerTitleContainer1}>
              <Text style={[styles.headerTitle4,styles.headerTextStyle]}>Path to</Text>
              <Text style={[styles.headerTitle5,styles.headerTextStyle]}> Health</Text>
          </View> 

          <View style={styles.headerTitleContainer2}>
              <Text style={[styles.headerTitle6,styles.headerTextStyle]}>And</Text>
              <Text style={[styles.headerTitle7,styles.headerTextStyle]}> Fitness</Text>
          </View>

          <View style={styles.btnsContainer}>
              <CustomBtn  
                btnName='Signup'
                onBtnClick={()=>{router.replace("/screens/auth/SingupScreen")}}
                customBtnStyle={styles.btn}
              />

              <CustomBtn  
                btnName='Login'
                onBtnClick={()=>{router.replace("/screens/auth/LoginScreen")}}
                customBtnStyle={styles.btnTransparent}

              />
          </View>

      </CustomSafeView>
    </ImageBackground>


  )
}