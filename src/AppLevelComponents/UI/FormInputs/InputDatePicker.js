import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Picker } from "react-native";
import { Input } from "react-native-elements";
import { Colors } from "UIProps/Colors";
import InputValidations from "Helpers/InputValidations";
import { labelStyleSignup,inputContainerStyle } from "UIProps/Styles";
import "Helpers/global";
import DateTimePicker from "react-native-modal-datetime-picker";
import EStyleSheet from 'react-native-extended-stylesheet';
 
import HelperMethods from "Helpers/Methods";
import CustomText from "../CustomText";
import AntDesign from 'react-native-vector-icons/AntDesign'
export default class InputDatePicker extends Component {
  state = {
    error: "",
wantToEdit:undefined,
    text: "",
    date:'',
    isDateTimePickerVisible:false,
  };

  setText(text) {
    if (this.props.inputValueGetter == undefined) {
      alert("Please provide input value getter function to this component");
      return;
    }
    this.setState({ text,wantToEdit:true });
    InputValidations.validateEmail(text, (valid, error) => {
      if (this.state.error.length == 0 && !valid) HelperMethods.animateLayout();

      this.setState({ error });
      if (valid) {
        if (this.state.error.length > 0) HelperMethods.animateLayout();

        this.props.inputValueGetter(text);
      } else {
        this.props.inputValueGetter(undefined); //set undefined for showing errors alert to user in this class parent
      }
    });
  }

  openDatePicker(){
    this.setState({ isDateTimePickerVisible: true });
  }

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleDatePicked = date => {
    let formatedDate = HelperMethods.formatDate_DMY(date)
    this.setState({date:formatedDate})
    this.props.inputValueGetter(formatedDate)    
    this.hideDateTimePicker();
  };

  render() {
    let { label,children,placeHolder,value } = this.props;
    let placeHolderTxt = value || label
    let placeHolderColor = value ? Colors.light : Colors.inputs_placeholders 
    return (
        <TouchableWithoutFeedback onPress={()=>this.openDatePicker()}>
      <View style={[styles.container,inputContainerStyle]}>
        <View style={{marginTop: 15,flexDirection: 'row',alignItems:'center',justifyContent:'space-between'}}>
          <CustomText style={{fontSize:15,paddingLeft:20}} color={this.state.date ? Colors.light : '#000'  }  text={this.state.date || 'Delivery Date'} />
          <AntDesign
          style={{ paddingRight: 10 }}
          color={'#000'}
          name={'calendar'}
          size={ 20}
          />
        </View>
        
        <DateTimePicker
        
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>
          </TouchableWithoutFeedback>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: '100%',
  $rem : global.rem,

  labelEstyle:{
    marginTop:'10rem',

  },

  container:{
marginTop:20
  }
})

