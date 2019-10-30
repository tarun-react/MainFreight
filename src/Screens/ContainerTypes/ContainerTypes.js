import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import { personaContainer } from "UIProps/Styles";
import Fonts from "UIProps/Fonts";
import EStyleSheet from "react-native-extended-stylesheet";

import CustomText from "AppLevelComponents/UI/CustomText";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import { storeUserInfo } from "DataManagers/UserDataManager";
import { UserInfoConsumer } from "AppLevelComponents/Contexts/CxtUserInfo";
import AsyncStorageHandler from "StorageHelpers/AsyncStorageHandler";
import Constants from "Helpers/Constants";
import SubHeader from "AppLevelComponents/UI/SubHeader";
import ScreenTitle from "MainFreightUI/ScreenTitle";
import ListRenderer from "MainFreightUI/ListRenderer";
import ButtonSelector from "MainFreightUI/ButtonSelector";
import ContainerTypesItem from "./components/ContainerTypesItem";
import NumberStepper from "../../AppLevelComponents/UI/NumberStepper";

let data = [
  {item:'20 Footer GP' },
  {item:'20 Footer GP' },
  {item:'20 Footer GP' },
  {item:'20 Footer GP'  },
  {item:'Others >'  },
];

let currentContext;
class ContainerTypes extends Component {
  state = {
    isApiCall: undefined
  };

  renderItems = ({ item, index }) => {
    return <ContainerTypesItem index={index} item={item} />;
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
                <ScreenTitle title="Container Types" />
                <ListRenderer renderItem={this.renderItems} data={data} />

                <CustomButton
                  containerStyle={{ marginTop: 10 }}
                  onPress={this.login}
                  text="submit"
                />

                <CustomButton
                  containerStyle={{ marginTop: 10 }}
                  btnType="white"
                  onPress={this.login}
                  text="back"
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

export default withNavigation(ContainerTypes);
