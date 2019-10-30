import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Fonts from "UIProps/Fonts";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import { personaContainer } from "UIProps/Styles";
import EStyleSheet from "react-native-extended-stylesheet";
import InputDatePicker from "AppLevelComponents/UI/FormInputs/InputDatePicker";
import PlainText from "AppLevelComponents/UI/FormInputs/PlainText";
import FirstName from "AppLevelComponents/UI/FormInputs/FirstName";

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

let requirements = [
  {item:'5 days notice is required.'},
  {item:'A Custom permit is required for PSA acceptance of container.'},
  {item:'Our customer service representative will contact you within 1 business day after order received.'},
]
let valObj = {
  email: "samyak@yopmail.com",
  password: ""
};

let currentContext;
class FullContainerLoad extends Component {
  state = {
    isApiCall: undefined
  };


  renderList(){
    let view = []
    requirements.map((item,index) =>{
      view.push(
        <CustomText
                  text={`  \u2022 ${item.item}   `}
                  color={Colors.black}
                  size={13}
                  font={Fonts.medium}
                  style={{ marginTop: 0, }}
                />
      )
    })
    return view
  }

  submit = () =>{
    this.props.navigation.navigate('containerTypes')
  }

  navigate = () => {
    this.props.navigation.navigate('containerTypes')

  }
  render() {
    return (
      <UserInfoConsumer>
        {context => {
          currentContext = context;
          return (
            <Container hideGradient >
              <View style={{ padding: 15,paddingBottom:0 }}>
                <SubHeader
                  rightText="Hi, cathy"
                  noUnderline={true}
                />
                <ScreenTitle textCenter title="Full Container Load" />
                <ScreenTitle bgWhite title="Delivery" />
                
                <InputDatePicker bgColor={Colors.buttonSelectorDark} inputValueGetter={val => {}} />
                    <InputIDNumber bgColor={Colors.buttonSelectorLight} inputValueGetter={val => {}} textLabel='From Postal Code' />
                    <InputIDNumber bgColor={Colors.buttonSelectorDark} inputValueGetter={val => {}} textLabel='To Postal Code' />
                    
                    <ScreenTitle bgWhite title="Container Type" />

                    <ButtonSelector onPress={this.navigate} bgColor={Colors.buttonSelectorLight} text="Select Container type" />

                    <FirstName inputValueGetter={val => {}} bgColor={Colors.buttonSelectorLight} textLabel="OTHERS" />
                    <FirstName inputValueGetter={val => {}} bgColor={Colors.buttonSelectorDark} textLabel="DETAILS" />
                    

                    <View style={{ backgroundColor: Colors.bottomBlueFooter,}}>
              <CustomText
                  text="Requirement for booking of this service:"
                  color={Colors.black}
                  size={13}
                  font={Fonts.heavy}
                  fontStyle='italic'
                  style={{ marginTop: 10, marginBottom: 20 }}
                />

                {this.renderList()}

                <SubmitBackBtn onSubmit={this.submit} />
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

export default withNavigation(FullContainerLoad);
