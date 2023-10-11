

import { StyleSheet,Platform,StatusBar} from "react-native";




export const styles = StyleSheet.create({

    backgroundImage: {
    flex: 1,
    justifyContent :"center",
    alignItems : "flex-start"
  },
    SafeViewContainer : {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }

})