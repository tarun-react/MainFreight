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
      const {title,italic} = this.props
    return (
      <View style={styles.container} >
        <CustomText text={title} color='#fff' size={17} fontStyle={italic ? 'italic' : undefined} />
      </View>
    );
  }
}

const styles = {
    container:{
        backgroundColor:Colors.screenTitle,
        padding:15,
        width:'100%',
        alignItems: 'center',
        marginTop:17,
    }
}
export default ScreenTitle;
