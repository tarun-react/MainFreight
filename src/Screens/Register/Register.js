import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import { personaContainer } from "UIProps/Styles";
import EStyleSheet from "react-native-extended-stylesheet";

import CustomText from "AppLevelComponents/UI/CustomText";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import Divider from "AppLevelComponents/UI/Divider";
import Fonts from "UIProps/Fonts";
import Email from "AppLevelComponents/UI/FormInputs/Email";
import FirstName from "AppLevelComponents/UI/FormInputs/FirstName";
import MobileNumber from "AppLevelComponents/UI/FormInputs/MobileNumber";
import PlainText from "AppLevelComponents/UI/FormInputs/PlainText";
import Password from "AppLevelComponents/UI/FormInputs/Password";
import ScreenMemory from "AppLevelComponents/UI/ScreenMemory";
import { login } from "ServiceProviders/ApiCaller";
import { storeUserInfo } from "DataManagers/UserDataManager";
import { UserInfoConsumer } from "../../AppLevelComponents/Contexts/CxtUserInfo";
import AsyncStorageHandler from "../../StorageHelpers/AsyncStorageHandler";
import Constants from "../../Helpers/Constants";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import CustomCheckbox from "../../AppLevelComponents/UI/CustomCheckbox";
import SubmitBackBtn from "../../MainFreightUI/SubmitBackBtn";

let valObj = {
  email: "samyak@yopmail.com",
  password: ""
};

let currentContext;
class Register extends Component {
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

  navigateForgotPass = () => {
    this.props.navigation.navigate("forgotPassword");
  };

  register = () => {
    this.props.navigation.navigate("dashboard");

  }
  render() {
    return (
      <UserInfoConsumer>
        {context => {
          currentContext = context;
          return (
            <ScreenMemory screen="login">
              <Container hideGradient>
                <View style={{ padding: 15 }}>
                  <SubHeader
                    type={Constants.header_back_middle_right}
                    rightText="Home"
                  />
                  <View style={{ alignItems: "center", marginTop: 20 }}>
                    <View style={styles.circle} />
                    <CustomText text="Upload photo" style={{ marginTop: 10 }} />
                  </View>

                  <View>
                    <FirstName bgColor={Colors.buttonSelectorLight} inputValueGetter={val => {}} textLabel="Name" />
                    <FirstName bgColor={Colors.buttonSelectorDark} inputValueGetter={val => {}} textLabel="Company Name" />
                    <MobileNumber bgColor={Colors.buttonSelectorLight} inputValueGetter={val => {}} textLabel="Mobile number" />
                    <Email bgColor={Colors.buttonSelectorDark} inputValueGetter={val => {}} />
                    <PlainText bgColor={Colors.buttonSelectorLight} inputValueGetter={val => {}} textLabel="Billing Address" />
                  </View>
                </View>
              </Container>
              <View
                style={{ backgroundColor: "#4472C4", alignItems: "center" }}
              >
              <CustomText
                  text="Disclaimer Notice:
By clicking Submit, you agree to give consent to disclose your information to MFCL2000.com and their service partners to send marketing materials and/or execute your orders made"
                  color={Colors.black}
                  size={11}
                  
                  fontStyle='italic'
                  style={{ margin:10,marginTop: 10, marginBottom: 20, }}
                />

                <View style={styles.bottomBtn} >
                  <SubmitBackBtn horizontal onSubmit={this.register} />
                </View>
              </View>
            </ScreenMemory>
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

  bottomBtn:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
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

export default withNavigation(Register);
