import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/constants';

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent :"center",
    alignItems : "flex-start"
  },

  headerTitleContainer1: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
    marginVertical : 20,
  },

  headerTitleContainer2: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
  },

  headerTextStyle: {
    fontFamily: 'OS_Bold',
    textAlign: "center"
  },

  headerTitle1: {
    fontSize: 20,
    color: Colors.LIGHT_GREEN,
    marginTop : 40
  },

  headerTitle2: {
    color: Colors.WHITE_TEXT,
    fontSize: 40,
    marginTop :"30%"
  },

  headerTitle3: {
    color: Colors.WHITE_TEXT,
    fontSize: 40,
  },

  headerTitle4: {
    color: Colors.WHITE_TEXT,
    fontSize: 40,
    
  },

  headerTitle5: {
    color: Colors.WHITE_TEXT,
    fontSize: 40,
    backgroundColor : Colors.LIGHT_GREEN
  },

  headerTitle6: {
    color: Colors.WHITE_TEXT,
    fontSize: 40,
  },

  headerTitle7: {
    color: Colors.WHITE_TEXT,
    fontSize: 40,
    backgroundColor : Colors.LIGHT_GREEN
  },


  btnsContainer :{
        position : "absolute",
        bottom :0,
        left : 0,
        width :"100%",
        marginBottom : "5%",
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center",
        
  },

  btnText:{
    color : Colors.WHITE_TEXT,
    fontFamily : "OS_Light",
    fontSize : 25
  },

  btn : {
    backgroundColor : Colors.LIGHT_GREEN,
    paddingHorizontal : 15,
    paddingVertical : 10,
    borderRadius : 10,
    justifyContent : "center",
    alignItems : "center",
    
  }








});
