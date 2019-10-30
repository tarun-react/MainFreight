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
import ListRenderer from "MainFreightUI/ListRenderer";
import PackagingItem from "./components/PackagingItem";
import ButtonSelector from "../../MainFreightUI/ButtonSelector";
import SubmitBackBtn from "../../MainFreightUI/SubmitBackBtn";

let data = [
    {image:'https://png.pngtree.com/element_pic/17/03/25/cfd28df815bc9e7745b5adc02704a73f.jpg', name: "Envelope",rate:'$5 + 0.30/km',weight:'0.5kg',dimension:'13x23x33cm' },
    {image:'https://png.pngtree.com/element_pic/17/03/25/cfd28df815bc9e7745b5adc02704a73f.jpg', name: "Envelope",rate:'$5 + 0.30/km',weight:'0.5kg',dimension:'13x23x33cm' }
];

let currentContext;
class PackagingType extends Component {
  state = {
    isApiCall: undefined
  };

  renderItems = ({ item, index }) => {
    let bgColor =  index % 2 == 0 ? '#D3DEEF' : '#EAEFF7'

      return (
          <PackagingItem bgColor={bgColor} item={item} />
      );
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
                <ScreenTitle title="Packaging Type" />
                <ButtonSelector text='Document' hideIcon />
                <ListRenderer renderItem={this.renderItems} data={data} />

                    <View style={{marginTop:20}} >

                <ButtonSelector text='Small Goods (LWH)' hideIcon />
                <ListRenderer renderItem={this.renderItems} data={data} />
                    </View>


                    <View style={{marginTop:20}} >

<ButtonSelector text='Large Goods (LWH)' hideIcon />
<ListRenderer renderItem={this.renderItems} data={data} />
    </View>


             <SubmitBackBtn onSubmit={()=>this.props.navigation.goBack()} />
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

export default withNavigation(PackagingType);
