import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import { personaContainer } from "UIProps/Styles";
import EStyleSheet from "react-native-extended-stylesheet";

import CustomText from "AppLevelComponents/UI/CustomText";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import { login } from "ServiceProviders/ApiCaller";
import { storeUserInfo } from "DataManagers/UserDataManager";
import { UserInfoConsumer } from "../../AppLevelComponents/Contexts/CxtUserInfo";
import AsyncStorageHandler from "../../StorageHelpers/AsyncStorageHandler";
import Constants from "../../Helpers/Constants";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import CustomCheckbox from "../../AppLevelComponents/UI/CustomCheckbox";
import ScreenTitle from "../../MainFreightUI/ScreenTitle";
import InfoContainer from "./components/InfoContainer";

class Profile extends Component {
  state = {
    isApiCall: undefined
  };

  navigateBack =() => {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <UserInfoConsumer>
        {context => {
          currentContext = context;
          return (
              <Container >
                <View style={{ padding: 15 }}>
                  <SubHeader
                    type={Constants.header_back_middle_right}
                    rightText="Hi, cathy"
                    noUnderline={true}
                  />
                  <View style={{ alignItems: "center", marginTop: 20 }}>
                    <View style={styles.circle} />
                    <CustomText text="Upload photo" style={{ marginTop: 10 }} />
                  </View>

                <ScreenTitle title="My Vouchers" italic={true} />

                <InfoContainer title="MF2012929 120.. $34" italic={true} />
                <CustomButton
                    containerStyle={{ marginTop: 10 }}
                    btnType="white"
                    onPress={this.navigateBack}
                    text="back to home page"
                  />
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

export default withNavigation(Profile);
