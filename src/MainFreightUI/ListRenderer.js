import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import ListItem from './ListItem';
import CustomText from 'AppLevelComponents/UI/CustomText'
class ListRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItems = ({ item, index }) => {
      let bgColor =  index % 2 == 0 ? '#D3DEEF' : '#EAEFF7'
      return (
          <View style={{backgroundColor:bgColor,padding:20,width:'100%',marginBottom:2}} >
            <CustomText text={item.name} color='#000'  />
          </View>
      );
    };


  render() {
      const {data,renderItem} = this.props
    return (
        <View style={{backgroundColor:'#fff'}} >

      <FlatList
      
                  data={data}
                  keyExtractor={(item, index) => index + ""}
                  renderItem={renderItem || this.renderItems}
                />
        </View>

    );
  }
}

export default ListRenderer;
