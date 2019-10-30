import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Colors } from '../../../UIProps/Colors';
import CustomText from 'AppLevelComponents/UI/CustomText'
class HomeRoundButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {text,italic,onPress} = this.props
    return (
      <TouchableWithoutFeedback onPress={()=>onPress()} >

      <View style={styles.circle} >
        <CustomText text={text.toUpperCase()}  textAlign='center' color={Colors.blue} size={17} fontStyle={italic ? 'italic' : undefined} />
        
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
    circle: {
        width:  140,
        height: 140,
        borderRadius: 100 / 1,
        borderWidth:1,
        margin:10,
        borderColor:Colors.blue,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center"
      },
}

export default HomeRoundButton;
