import React, { Component } from "react";
import { View, ImageBackground } from "react-native";

class BottomImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style} = this.props
    return (
      <View style={style}>
        <ImageBackground
          source={require("assets/img/bottomImage.png")}
          resizeMode="cover"
          style={{ zIndex: 10000, width: "100%", height: 200,alignItems:'center',justifyContent:'flex-end' }}
        >
        <View style={{width:'100%',height:'100%',backgroundColor:'rgba(255,255,255,0.6)',alignItems:'center',justifyContent:'flex-end'}} >
          {this.props.children}
        </View>
        </ImageBackground>
      </View>
    );
  }
}

export default BottomImage;
