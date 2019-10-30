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
import Icons from "../Icons";
export default class InputIDNumber extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    
    text: "",
  };

  setText(text) {
    this.setState({wantToEdit:true})

    if(this.props.inputValueGetter == undefined){
      alert('Please provide input value getter function to this component')
      return
    }
    
    this.setState({ text,wantToEdit:true });
    InputValidations.validateOnlyNumerics(text, (valid, error) => {
      if(this.state.error.length == 0 && !valid)
      HelperMethods.animateLayout()

        this.setState({ error });
      if (valid) {
        if(this.state.error.length > 0)
        HelperMethods.animateLayout()
        
        this.props.inputValueGetter(text);
      }
    });
  }

  render() {
    let {width,value,textLabel,bgColor,labelStyleAdditional} = this.props
    let label = {...labelStyle,...labelStyleAdditional}
    return (
      <Input
        label={textLabel || "Email Address"}
        labelStyle={labelStyle}
        rightIcon={<Icons lib='Ionicons' name='md-pin' color={Colors.accent} size={29} style={{paddingRight:12}}  />}
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
