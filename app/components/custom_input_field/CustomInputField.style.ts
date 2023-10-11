import { StyleSheet } from "react-native";
import { Colors } from "../../utils/constants";



export const styles = StyleSheet.create({
inputContainer :{
        width : "80%",
        justifyContent: "flex-start",
        alignItems : "flex-start",
        paddingVertical : 10,
        paddingLeft : 10
  },

  inputLabel : {
        fontFamily : "OS_Regular",
        fontSize : 20,
        color : Colors.LIGHT_GREEN
  },

  inputField:{
        borderWidth : 2,
        borderStyle : "solid",
        borderColor : Colors.DARK_GREEN,
        width : "100%",
        marginTop : 10,
        borderRadius : 10,
        fontFamily : "OS_Regular",
        fontSize : 20,
        color : Colors.DARK_GREEN,
        paddingHorizontal : 10,
        paddingVertical : 8
  }



})