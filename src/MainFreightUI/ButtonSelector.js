import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Fonts from "UIProps/Fonts";
import CustomText from 'AppLevelComponents/UI/CustomText'
import Icons from '../AppLevelComponents/UI/Icons';
import { Colors } from '../UIProps/Colors';
class ButtonSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {text,bgColor,hideIcon,onPress,center,italic} = this.props
    return (
      <TouchableWithoutFeedback onPress={()=>onPress && onPress()} > 

        <View style={{backgroundColor:bgColor || Colors.buttonSelectorLight ,flexDirection:'row',alignItems:'center',justifyContent:hideIcon ? 'center' : 'space-between' ,padding:20,width:'100%',marginBottom:2}} >
        {this.props.children}
        <CustomText text={text} fontStyle={italic && 'italic'} color='#000' style={{fontWeight:'700'}} />
        {!hideIcon && 
        <Icons lib='AntDesign' name='right' color='#000' />
        }
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ButtonSelector;
