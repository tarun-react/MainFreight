import 'Helpers/global'
import EStyleSheet from "react-native-extended-stylesheet";
import {Colors} from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
EStyleSheet.build({
  $rem: global.rem
});

export const inputStyles = EStyleSheet.create({
  fontSize:17*global.rem,
  color: Colors.black,
  backgroundColor:'#fff',
  marginBottom:-5,
  marginTop:-10
});

export let labelStyle = EStyleSheet.create({
  top:11,left:20,zIndex:1,
  fontFamily:Fonts.heavy,
  color:'#000',
  alignSelf:'flex-start',
  width:null,
  fontSize:14,
  fontStyle:'italic',
  fontWeight:'700'
});

export const inputStylesContainer = EStyleSheet.create({
  
  // padding: global.rem * 5,

  color: "#fff",
  alignSelf:'flex-start',
  
  marginTop:  20
});

export const inputErrors = {
  color: "red",
  fontSize: 24*global.rem,
  alignSelf: 'flex-start',
  textAlign:'left',
};

export const inputContainerStyle = {
  borderBottomWidth: 0,
  borderColor: Colors.inputBorderColor,
  height:53,
  marginBottom:-5,
  marginTop:-10
};

export const cardStyle = {
  backgroundColor:Colors.noticeMsgBox,
      alignItems: "flex-start",
      margin:0,
      borderRadius: 5,
      marginVertical: 10,
}
export const personaContainer = {
    
    flex:1,
    width: "100%",
    backgroundColor: '#f7f7f9',
}

export const containerStyle = {
  flex: 1,
  padding:15*global.rem,
    backgroundColor: "#000"
  
}

export const containerContentStyle = {
 
alignItems: "center",flexGrow:1, paddingBottom:10,

  
}

