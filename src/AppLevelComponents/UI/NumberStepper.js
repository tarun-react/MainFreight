import React, {Component} from 'react';
import {Text, View} from 'react-native';
import UIStepper from 'react-native-ui-stepper';
import {UserInfoConsumer} from 'AppLevelComponents/Contexts/CxtUserInfo';

let currentContext;
export class NumberStepper extends Component {
  state = {
    initialValue: undefined,
  };
  setValue = value => {
    this.props.valGetter(value);
  };

  componentDidMount() {
    this.setState({initialValue: currentContext.userData.hours});
  }

  render() {
    return (
      <UserInfoConsumer>
        {context => {
          currentContext = context;
          return (
            <>
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
            </>
          );
        }}
      </UserInfoConsumer>
    );
  }
}

export default NumberStepper;
