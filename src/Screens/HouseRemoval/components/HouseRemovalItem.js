import React, { Component } from 'react';
import { View, Image } from 'react-native';
import CustomText from 'AppLevelComponents/UI/CustomText'
import {Colors} from "UIProps/Colors";
export class HouseRemovalItem extends Component {
    render() {
        const {index,item} = this.props
    let bgColor =  index % 2 == 0 ? Colors.buttonSelectorLight : Colors.buttonSelectorDark

      return (
          <View style={[styles.container,{backgroundColor:bgColor}]} >
  
          <CustomText text={item.time} color='#000'  />
          <CustomText text={item.price} color='#000'  />
        </View>
      );
    }
  }
  
  const styles = {
      container:{
          padding:20,width:'100%',marginBottom:2,
          flexDirection:'row',
          alignItems: 'center',
          justifyContent: 'space-around',
      }
}

export default HouseRemovalItem
