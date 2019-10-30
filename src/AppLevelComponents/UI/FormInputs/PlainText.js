import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import {Colors} from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import {
  inputStylesContainer,
  labelStyle,
  inputsError,
  inputContainerStyle
} from "UIProps/Styles";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import InputIcon from "./InputIcon";

export default class PlainText extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    text: ""
  };

  setText(text) {
    this.setState({ text,wantToEdit:true });
    this.props.inputValueGetter(text);
    
  }

  render() {
    let {width,value,textLabel,marginBottom,labelStyleAdditional,bgColor} = this.props
    let label = {...labelStyle,...labelStyleAdditional}
    
    return (
      <Input
      label={textLabel || "Email Address"}
      labelStyle={labelStyle}
      inputContainerStyle={{...inputContainerStyle,height:100,backgroundColor:bgColor,}}
      onChangeText={text => this.setText(text)}
      inputStyle={{textAlignVertical:'top',height:100}}
      value={this.state.wantToEdit ? this.state.text : value}
      placeholderTextColor={Colors.inputs_placeholders}
      errorStyle={inputsError}
      errorMessage={this.state.error}
    />
    );
  }
}
