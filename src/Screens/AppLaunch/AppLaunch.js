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
import Password from "AppLevelComponents/UI/FormInputs/Password";
import ScreenMemory from "AppLevelComponents/UI/ScreenMemory";
import { login } from "ServiceProviders/ApiCaller";
import { storeUserInfo } from "DataManagers/UserDataManager";
import { UserInfoConsumer } from "../../AppLevelComponents/Contexts/CxtUserInfo";
import AsyncStorageHandler from "../../StorageHelpers/AsyncStorageHandler";
import Constants from "../../Helpers/Constants";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import CustomCheckbox from "../../AppLevelComponents/UI/CustomCheckbox";

let valObj = {
  email: "samyak@yopmail.com",
  password: ""
};

let currentContext;
class AppLaunch extends Component {
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
            <ScreenMemory screen="login">
              <Container>
                <View style={{ padding: 15 }}>
                  <SubHeader rightText="Profile" />

                  <CustomButton
                    containerStyle={{ marginTop: 20 }}
                    onPress={this.navigate.bind(this,'register')}
                    text="Register now"
                  />
                  <CustomText
                    text="Already a member?"
                    fontStyle="italic"
                    style={{ marginTop: 10 }}
                  />
                  <CustomText
                    text="Login to access your bookings"
                    fontStyle="italic"
                    style={{ marginTop: 10 }}
                  />

                  <CustomButton
                    containerStyle={{ marginTop: 20 }}
                    btnType="white"
                    onPress={this.login}
                    text="Login"
                  />

                  <View style={{ alignItems: "center", marginTop: 20 }}>
                    <CustomCheckbox checkedStatusGetter={checked => {}} text="Stay Login" />
                    <CustomText
                      text="Enjoy 10% off on your first booking !!!"
                      color={Colors.yellow}
                      fontStyle="italic"
                      style={{ marginTop: 10 }}
                    />
                  </View>
                </View>
              </Container>
              <View
                style={{ backgroundColor: "#4472C4", alignItems: "center" }}
              >
                <CustomText
                  text="CONTINUE AS GUEST"
                  color={Colors.accent}
                  onPress={this.navigate.bind(this,'dashboard')}
                font={Fonts.heavy}
                  style={{ marginTop: 10, marginBottom: 0 }}
                />
                <CustomText
                  text="Register as driver with us"
                    onPress={this.navigate.bind(this,'register')}
                  fontStyle="italic"
                  color={Colors.blue}
                  style={{ marginTop: 10, marginBottom: 20 }}
                />
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
  }
});

export default withNavigation(AppLaunch);
