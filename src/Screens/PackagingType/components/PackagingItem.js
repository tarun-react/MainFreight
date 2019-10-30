import React, { Component } from 'react';
import { View, Image } from 'react-native';
import CustomText from 'AppLevelComponents/UI/CustomText'
class PackagingItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {bgColor,item} = this.props
    return (
        <View style={[styles.container,{backgroundColor:bgColor}]} >
        <Image source={{uri:item.image}} style={{width:50,height:50}} />

        <View>

        <CustomText text={item.name} color='#000'  />
        <CustomText text={item.rate} color='red'  />
        </View>

        <View>

        <CustomText text={item.weight} color='#000'  />
        <CustomText text={item.dimension} color='#000'  />
        </View>

        <View />
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

export default PackagingItem;
