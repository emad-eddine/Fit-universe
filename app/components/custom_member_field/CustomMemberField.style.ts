
import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/constants';

export const styles = StyleSheet.create({
 memberContainer :{

        position :"absolute",
        bottom : 20,
        width : "80%",
        flexDirection :"row",
        justifyContent : "flex-start",
        alignItems : "flex-start"
  },

  memberTopText :{
        fontFamily : "OS_Medium",
        fontSize : 16
  },

  memberActionText:{
fontFamily : "OS_Bold",
        fontSize : 16,
        textDecorationLine :"underline",
        color : Colors.LIGHT_GREEN
  }


})