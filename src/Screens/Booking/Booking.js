import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import { personaContainer } from "UIProps/Styles";
import EStyleSheet from "react-native-extended-stylesheet";

import CustomText from "AppLevelComponents/UI/CustomText";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import { storeUserInfo } from "DataManagers/UserDataManager";
import { UserInfoConsumer } from "AppLevelComponents/Contexts/CxtUserInfo";
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
import Constants from "Helpers/Constants";
import SubHeader from "AppLevelComponents/UI/SubHeader";
import ScreenTitle from "MainFreightUI/ScreenTitle";
import ListRenderer from "../../MainFreightUI/ListRenderer";
import SubmitBackBtn from "../../MainFreightUI/SubmitBackBtn";

let data = [{ name: "Documents" }, { name: "Small Goods" },
    {name:'Large Goods'},{name:'House Removal'},{name:'Full Container'}
];
let valObj = {
  email: "samyak@yopmail.com",
  password: ""
};

let currentContext;
class Booking extends Component {
  state = {
    isApiCall: undefined
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
                <ScreenTitle bgWhite textCenter title="Booking" />
                <ScreenTitle title="Select transport service type" />
                <ListRenderer data={data} />

                <SubmitBackBtn onSubmit={this.navigate.bind(this,'deliveryInfo')} />
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

export default withNavigation(Booking);
