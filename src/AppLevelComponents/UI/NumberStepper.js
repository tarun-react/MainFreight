import React, {Component} from 'react';
import {Text, View} from 'react-native';
import UIStepper from 'react-native-ui-stepper';
import {UserInfoConsumer} from 'AppLevelComponents/Contexts/CxtUserInfo';

let currentContext;
export class NumberStepper extends Component {
  state = {
    initialValue: undefined,
  };

  render() {
    return (
                <UIStepper
                  initialValue={1}
                  displayValue={true}
                  minimumValue={1}
                  tintColor={'#000'}
                  borderColor='#000'
                  textColor='#000'
                  maximumValue={10}
                  onValueChange={value => {
                    this.setValue(value);
                  }}
                />
    );
  }
}

export default NumberStepper;
