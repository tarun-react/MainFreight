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
import HouseRemovalItem from "./components/HouseRemovalItem";
import NumberStepper from "../../AppLevelComponents/UI/NumberStepper";
import SubmitBackBtn from "../../MainFreightUI/SubmitBackBtn";

let data = [
  { time: "60 minutes", price: "$233.0" },
  { time: "60 minutes", price: "$233.0" },
  { time: "60 minutes", price: "$233.0" },
  { time: "60 minutes", price: "$233.0" }
];

let currentContext;
class HouseRemoval extends Component {
  state = {
    isApiCall: undefined
  };

  renderItems = ({ item, index }) => {
    return <HouseRemovalItem index={index} item={item} />;
  };

  submit = () => {
    this.props.navigation.navigate('fullContainerLoad')
  }
  render() {
    return (
            <Container>
              <View style={{ padding: 15 }}>
                <SubHeader
                  rightText="Hi, cathy"
                  noUnderline={true}
                />
                <ScreenTitle textCenter title="Packaging Type" />
                <ButtonSelector
                  text={"Fees includes 1 mover excludes parking fees"}
                  hideIcon
                />
                <ListRenderer renderItem={this.renderItems} data={data} />
                <ButtonSelector hideIcon>
                  <View
                    style={{
                      alignItems: "center",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-around"
                    }}
                  >
                    <CustomText
                      text={"Labour"}
                      font={Fonts.heavy}
                      size={17}
                      color="#000"
                    />

                    <NumberStepper valGetter={val => {}} />
                  </View>
                </ButtonSelector>

                <View style={{ alignItems: "center" }}>
                  <CustomText
                    text={"Enjoy 5% off on optional labour"}
                    font={Fonts.heavy}
                    size={17}
                    fontStyle='italic'
                    style={{ marginTop: 20,fontWeight:'600' }}
                    color="#000"
                  />
                  <CustomText
                    text={"Terms and conditions apply."}
                    fontStyle={"italic"}
                    font={Fonts.heavy}
                    size={15}
                    style={{ marginTop: 0 }}
                    color="#000"
                  />
                </View>

               <SubmitBackBtn onSubmit={this.submit}  />
              </View>
            </Container>
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

export default withNavigation(HouseRemoval);
