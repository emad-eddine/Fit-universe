
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
export default function LandingScreen() {
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
              <Pressable style={styles.btn}>
                  <Text style={styles.btnText}>Singup</Text>
              </Pressable>
              <Pressable style={styles.btn}>
                  <Text style={styles.btnText}>Login</Text>
              </Pressable>
          </View>

      </CustomSafeView>
    </ImageBackground>


  )
}