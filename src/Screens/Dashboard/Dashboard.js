import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import HelperMethods from 'Helpers/Methods'

import { personaContainer } from "UIProps/Styles";
import EStyleSheet from "react-native-extended-stylesheet";

import CustomText from "AppLevelComponents/UI/CustomText";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import Divider from "AppLevelComponents/UI/Divider";
import Fonts from "UIProps/Fonts";
import { UserInfoConsumer } from "AppLevelComponents/Contexts/CxtUserInfo";
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
import Constants from "Helpers/Constants";
import SubHeader from "AppLevelComponents/UI/SubHeader";
import CustomCheckbox from "AppLevelComponents/UI/CustomCheckbox";
import ScreenTitle from "MainFreightUI/ScreenTitle";
import HomeRoundButton from "./components/HomeRoundButton";

let valObj = {
  email: "samyak@yopmail.com",
  password: ""
};

let currentContext;
class Dashboard extends Component {
  state = {
    isApiCall: undefined
  };

  navigate = screen =>{
    if(!screen){
      alert('in Progress')
      return
    }
    this.props.navigation.navigate(screen)
  }

  onBackPress = () =>{
    HelperMethods.appExitPrompter()
  }
  render() {
    return (
      <UserInfoConsumer>
        {context => {
          currentContext = context;
          return (
            <Container onBackPress={this.onBackPress} >
              <View style={{ padding: 15 }}>
                <SubHeader
                rightPress={()=>this.props.navigation.navigate('profile')}
                  type={Constants.header_back_middle_right}
                  rightText="My Profile"
                />
                <View
                  style={{ alignItems: "center", marginTop: 20, width: "100%" }}>
                  <CustomButton
                    textStyle={{
                      fontSize: 27,
                      fontStyle: "italic",
                      fontFamily: Fonts.heavy
                    }}
                    containerStyle={{ marginTop: 10, width: "100%" }}
                    onPress={this.login}
                    text="pack & go"
                  />

                  <View style={styles.btnContainer}>
                      <HomeRoundButton onPress={this.navigate.bind(this,'booking')} text='Booking' />
                      <HomeRoundButton onPress={this.navigate.bind(this,'')} text='Order Tracking' />
                  </View>

                  <View style={styles.btnContainer}>
                      <HomeRoundButton onPress={this.navigate.bind(this,'')} text='order history' />
                      <HomeRoundButton onPress={this.navigate.bind(this,'')} text='other enquiries' />
                  </View>

                </View>
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
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:30
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

export default withNavigation(Dashboard);
