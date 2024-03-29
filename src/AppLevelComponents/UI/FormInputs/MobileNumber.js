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
export default class MobileNumber extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    text: ""
  };

  setText(text) {
    if (this.props.inputValueGetter == undefined) {
      alert("Please provide input value getter function to this component");
      return;
    }

    this.setState({ text,wantToEdit:true });
    InputValidations.validatePhone(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();

      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props.inputValueGetter(text);
      }
    });
  }

  render() {
    let {width,value,textLabel,marginBottom,labelStyleAdditional,bgColor} = this.props
    let label = {...labelStyle,...labelStyleAdditional}
    return (
      <Input
        label={textLabel || "Email Address"}
        labelStyle={labelStyle}
        inputContainerStyle={{...inputContainerStyle,backgroundColor:bgColor,}}
        onChangeText={text => this.setText(text)}
        value={this.state.wantToEdit ? this.state.text : value}
        placeholderTextColor={Colors.inputs_placeholders}
        errorStyle={inputsError}
        keyboardType='numeric'
        maxLength={14}
        errorMessage={this.state.error}
      />
    );
  }
}
