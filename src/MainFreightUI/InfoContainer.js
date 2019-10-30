import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Colors} from "UIProps/Colors";
import CustomText from 'AppLevelComponents/UI/CustomText';
class InfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {title,italic} = this.props
  return (
    <View style={styles.container} >
      <CustomText text={title} color='#000' size={15} fontStyle={italic ? 'italic' : undefined} />
      {this.props.children}
    </View>
  );
}
}

const styles = {
  container:{
      backgroundColor:'#D3DEEF',
      padding:15,
      width:'100%',
      marginVertical:17,
  }
}

export default InfoContainer;
