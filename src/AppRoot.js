import React, { Component, Fragment } from "react";
import { View, StatusBar, Animated,Easing } from "react-native";
import { Colors } from "UIProps/Colors";
import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import Icons from 'AppLevelComponents/UI/Icons'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import "Helpers/global";
import {
  createFluidNavigator,
  Transition as fluidTransition,
  FluidNavigator
} from "react-navigation-fluid-transitions";
import EStyleSheet from "react-native-extended-stylesheet";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";
import {
  zoomIn,
  fromBottom,
  fromLeft,
  fromRight
} from "react-navigation-transitions";
import Login from "Screens/Login/Login";
import Profile from "Screens/Profile/Profile";
import Settings from "Screens/Settings/Settings";
import ForgotPassword from "Screens/ForgotPassword/ForgotPassword";
import ResetPassword from "Screens/ResetPassword/ResetPassword";
import Dashboard from "Screens/Dashboard/Dashboard";
import AppLaunch from "./Screens/AppLaunch/AppLaunch";
import Register from "./Screens/Register/Register";
import Booking from "./Screens/Booking/Booking";
import DeliveryInfo from "./Screens/DeliveryInfo/DeliveryInfo";
import PackagingType from "./Screens/PackagingType/PackagingType";
import HouseRemoval from "./Screens/HouseRemoval/HouseRemoval";
import FullContainerLoad from "./Screens/FullContainerLoad/FullContainerLoad";
import ContainerTypes from "./Screens/ContainerTypes/ContainerTypes";
import Revieworder from "./Screens/Revieworder/Revieworder";

let transitionSpeed = 650;
let tabIconSize = 18;

const transitionConfig = {
  duration: 500,
};


const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions here..
  if (
    prevScene &&
    prevScene.route.routeName === "Noticeboard" &&
    nextScene.route.routeName === "iCard"
  ) {
    return zoomIn(transitionSpeed);
  } else if (
    prevScene &&
    prevScene.route.routeName === "Noticeboard" &&
    nextScene.route.routeName === "Profile"
  ) {
    return null;
  }
  return fromRight(transitionSpeed);
};

const LoginStack = createStackNavigator({

  appLaunch:AppLaunch,

  register:Register,
  login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },

  forgotPassword: {
    screen: ForgotPassword,
  },

  resetPassword: {
    screen: ResetPassword,
  }

},{
  initialRouteName:'appLaunch',
  headerMode:'none',
  transitionConfig: nav => handleCustomTransition(nav)

});


const DashboardStack = createStackNavigator(
  {
    dashboard:Dashboard,
    profile:Profile,
    booking:Booking,
    deliveryInfo:DeliveryInfo,
    packagingType:PackagingType,
    houseRemoval:HouseRemoval,
    fullContainerLoad:FullContainerLoad,
    containerTypes:ContainerTypes,
    reviewOrder:Revieworder
  },
  {
    initialRouteName: "dashboard",
  headerMode:'none',
    transitionConfig: nav => handleCustomTransition(nav)
  }
);

const TopLevelNavigator = createAnimatedSwitchNavigator(
  {
    LoginStack,
    DashboardStack,
  },
  {
    //The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-top"
          durationMs={500}
          interpolation="easeIn"
        />
        <Transition.In type="slide-top" durationMs={transitionSpeed} />
      </Transition.Together>
    )
  }
);
const AppContainer = createAppContainer(TopLevelNavigator);

export default class AppRoot extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <AppContainer />
        </View>
      </>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  container: {
    flex: 1
  }
});
