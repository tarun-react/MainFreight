import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import Fonts from "UIProps/Fonts";
import { personaContainer } from "UIProps/Styles";
import EStyleSheet from "react-native-extended-stylesheet";
import ButtonSelector from "MainFreightUI/ButtonSelector";

import CustomText from "AppLevelComponents/UI/CustomText";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import { login } from "ServiceProviders/ApiCaller";
import { storeUserInfo } from "DataManagers/UserDataManager";
import { UserInfoConsumer } from "../../AppLevelComponents/Contexts/CxtUserInfo";
import AsyncStorageHandler from "../../StorageHelpers/AsyncStorageHandler";
import Constants from "../../Helpers/Constants";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import CustomCheckbox from "../../AppLevelComponents/UI/CustomCheckbox";
import ScreenTitle from "MainFreightUI/ScreenTitle";
import InfoContainer from "MainFreightUI/InfoContainer";
import SubmitBackBtn from "../../MainFreightUI/SubmitBackBtn";

class Revieworder extends Component {
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
              <Container >
                <View style={{ padding: 15 }}>
                  <SubHeader
                    rightText="Hi, cathy"
                    noUnderline={true}
                  />

                <ScreenTitle textCenter title="REVIEW MY ORDER"  />

                <InfoContainer title="Order Details:" italic={true} >
                  <CustomText text={'Delivery of 1 Package Type 1 Box'} style={styles.infoText} color='#000' size={15}  />
                  <CustomText text={'From ... To ..'} style={styles.infoText} color='#000' size={15}  />
                  <CustomText text={'Delivery on Wed 03 July 2019'} style={styles.infoText} color='#000' size={15}  />
                  <CustomText text={'1kg – Size Selected:'} style={styles.infoText} color='#000' size={15}  />
                  <CustomText text={'33.7cm × 18.2cm× 10.0cm'} style={styles.infoText} color='#000' size={15}  />
                  <CustomText text={'Amount Payable ... $100.00'} style={styles.infoText} color={Colors.blue} size={15} font={Fonts.heavy} />

                </InfoContainer>

                <ButtonSelector
                  text={"Promo Code ( To Be done) "}
                  hideIcon
                />

<ButtonSelector
onPress={this.navigate.bind(this,'profile')}
bgColor={Colors.buttonSelectorDark}
                  text={"My Voucher List"}
                  
                />

                <SubmitBackBtn onSubmit={()=>alert('Go to payment options')} />
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

  infoText:{
    marginTop:15,
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

export default withNavigation(Revieworder);
