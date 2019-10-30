import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import { personaContainer } from "UIProps/Styles";
import EStyleSheet from "react-native-extended-stylesheet";
import InputDatePicker from "AppLevelComponents/UI/FormInputs/InputDatePicker";

import CustomText from "AppLevelComponents/UI/CustomText";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import { storeUserInfo } from "DataManagers/UserDataManager";
import { UserInfoConsumer } from "AppLevelComponents/Contexts/CxtUserInfo";
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
import Constants from "Helpers/Constants";
import SubHeader from "AppLevelComponents/UI/SubHeader";
import ScreenTitle from "MainFreightUI/ScreenTitle";
import ListRenderer from "MainFreightUI/ListRenderer";
import InputIDNumber from "../../AppLevelComponents/UI/FormInputs/InputIDNumber";
import ButtonSelector from "../../MainFreightUI/ButtonSelector";
import SubmitBackBtn from "../../MainFreightUI/SubmitBackBtn";

let data = [{ name: "Documents" }, { name: "Small Goods" },
    {name:'Large Goods'},{name:'House Removal'},{name:'Full Container'}
];
let valObj = {
  email: "samyak@yopmail.com",
  password: ""
};

let currentContext;
class DeliveryInfo extends Component {
  state = {
    isApiCall: undefined
  };

  login = () => {
    this.setState({ isApiCall: true });
    login(valObj.email, valObj.password)
      .then(resp => {
        this.setState({ isApiCall: false });
        currentContext.setUserData(resp);
        storeUserInfo(resp).then(() => {
          AsyncStorageHandler.get(Constants.canResetPass, val => {
            if (val != null) {
              if (val == "true") {
                this.props.navigation.navigate("resetPassword");
              }
            } else {
              this.props.navigation.navigate("DashboardStack");
            }
          });
        });
      })
      .catch(err => {
        this.setState({ isApiCall: "failed" });
      });
  };

  
  navigate = (screen) => {
    this.props.navigation.navigate(screen);
  };

  render() {
    return (
      <UserInfoConsumer>
        {context => {
          currentContext = context;
          return (
            <Container>
              <View style={{ padding: 15 }}>
                <SubHeader
                  rightText="Hi, cathy"
                  noUnderline={true}
                />
                <ScreenTitle title="Delivery Information" />
                <ScreenTitle bgWhite title="Delivery" />
                
                    <InputDatePicker bgColor={Colors.buttonSelectorDark} inputValueGetter={val => {}} />
                    <InputIDNumber bgColor={Colors.buttonSelectorLight} inputValueGetter={val => {}} textLabel='From Postal Code' />
                    <InputIDNumber bgColor={Colors.buttonSelectorDark} inputValueGetter={val => {}} textLabel='To Postal Code' />
                    
                <ScreenTitle bgWhite  title="Package" />
                    <ButtonSelector onPress={this.navigate.bind(this,'packagingType')} bgColor={'#EAEFF7'} text="Select packaging type" />

                    <ScreenTitle bgWhite title="Quantity" />
                    <ButtonSelector bgColor={Colors.buttonSelectorDark} text="Select" />
                    <SubmitBackBtn onSubmit={this.navigate.bind(this,'houseRemoval')} />

              </View>
            </Container>
          );
        }}
      </UserInfoConsumer>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  subContainer: {
    alignItems: "center"
  },

  bottomBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 100 / 2,
    backgroundColor: "#F7FAFD",
    borderColor: Colors.blue,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withNavigation(DeliveryInfo);
