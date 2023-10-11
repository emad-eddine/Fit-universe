import { StyleSheet } from "react-native";
import { Colors } from "../../utils/constants";

export const styles =  StyleSheet.create({

    backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },

  formRootContainer : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },

  formContainer :{
    width : "90%",
    height : "80%",
    backgroundColor : Colors.WHITE_TEXT,
    opacity : 0.9,
    borderTopWidth : 20,
    borderTopColor : Colors.LIGHT_GREEN,
    borderRadius : 15,
    alignItems : "center"
  },


  containerText :{
    fontFamily : "OS_Bold",
    fontSize : 20,
    color : Colors.LIGHT_GREEN,
    marginTop : 10
  },

  formTitle :{
    fontFamily : "OS_Regular",
    fontSize : 35,
    color : Colors.LIGHT_GREEN,
    marginTop : 10
  },
  
    btn : {
    backgroundColor : Colors.DARK_GREEN
  },

  btnText : {
    color : Colors.WHITE_TEXT
  },

 



})