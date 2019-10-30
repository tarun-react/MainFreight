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

export default class FirstName extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    text: ""
  };

  setText(text) {
    this.setState({ text,wantToEdit:true });
    InputValidations.validationUserName(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();

      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props.inputValueGetter(text);
      }
    });
  }

  render() {
    let {width,value,textLabel,marginBottom,labelStyleAdditional} = this.props
    let label = {...labelStyle,...labelStyleAdditional}
    return (
      <Input
        label={textLabel || "Email Address"}
        labelStyle={labelStyle}
        inputContainerStyle={{...inputContainerStyle,marginBottom: marginBottom,}}
        onChangeText={text => this.setText(text)}
        value={this.state.wantToEdit ? this.state.text : value}
        placeholderTextColor={Colors.inputs_placeholders}
        errorStyle={inputsError}
        errorMessage={this.state.error}
      />
    );
  }
}
