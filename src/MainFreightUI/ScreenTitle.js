import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Colors} from "UIProps/Colors";
import CustomText from '../AppLevelComponents/UI/CustomText';
class ScreenTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {title,italic,textCenter,bgWhite} = this.props
    return (
      <View style={[styles.container,{alignItems:textCenter ? 'center' : undefined,backgroundColor:bgWhite?'#DEEBF7' : Colors.screenTitle, }]} >
        <CustomText text={title} color={bgWhite?'#000' : '#fff'} size={17} fontStyle={italic ? 'italic' : undefined} style={{fontWeight:'700'}} />
      </View>
    );
  }
}

const styles = {
    container:{
        
        padding:15,
        width:'100%',
        marginTop:17,
    }
}
export default ScreenTitle;
