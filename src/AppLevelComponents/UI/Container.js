import React, { Component } from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import "Helpers/global";
import HelperMethods from "Helpers/Methods";
import EStyleSheet from "react-native-extended-stylesheet";
import { Colors } from "UIProps/Colors";
import BackHandlerSingleton from "ServiceProviders/BackHandlerSingleton";
import { withNavigation } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";

const headerColorsMain = Colors.headerMain;


export default class Container extends Component {
  renderForIOS() {
    let { padding, style, showGradient, scroll } = this.props;
    return (
      <>
        <SafeAreaView
          style={{ flex: 0, backgroundColor: Colors.accent, color: "#fff" }}
        />
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.contentCard }}>
          <StatusBar translucent={true} barStyle="light-content" />
          <ScrollView
            scrollEnabled={scroll}
            style={[styles.container]}
            contentContainerStyle={{
              alignItems: "center",
              ...style,
              padding: padding == 0 ? 0 : 15 * global.rem,
              flex: 1
            }}
            keyboardShouldPersistTaps="always"
          >
            {this.props.children}
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }

  renderForAndroid() {
    let { hideGradient } = this.props;
    let gradientPropsMain = {
      start: { x: 0.0, y: 0.25 },
      end: { x: 0.0, y: 1.0 },
      locations: [0, 0.9],
      colors: !hideGradient ? headerColorsMain  : ['#fff','#fff'] 
    };
    return (
      <View style={{flex:1}}>
        <LinearGradient {...gradientPropsMain} style={styles.header}>
          <StatusBar
            backgroundColor={Colors.white}
            barStyle="dark-content"
          />
          <ScrollView keyboardShouldPersistTaps="always">
          {this.props.children}
          </ScrollView>
          {/* <ScrollView
      scrollEnabled={scroll}
      style={[styles.container,{padding:padding*global.rem || 0*global.rem,...style, }]}
      contentContainerStyle={{flexGrow:1,alignItems: "center",padding:padding == 0 ? 0 : 15*global.rem, }}
      keyboardShouldPersistTaps="always"
      >
         {this.props.children}
      </ScrollView> */}
        </LinearGradient>
        {/* <LinearGradient {...gradientPropsMain} style={styles.header}>
        
         
        </LinearGradient> */}
      </View>
    );
  }

  render() {
    return (
      <>
        {<BackHandlerSingleton onBackPress={this.props.onBackPress} />}
        {HelperMethods.isPlatformAndroid()
          ? this.renderForAndroid()
          : this.renderForIOS()}
      </>
    );
  }
}

const styles = EStyleSheet.create({
  $columnWidth: "100%",
  $rem: global.rem,

  container: {
    width: "100%"
  },

  contentContainerStyle: {
    alignItems: "center",
    flexGrow: 1,
    paddingBottom: "10rem"
  },

  header: {
    // height: "200rem",
    height: "100%",
    flex: 1,
    backgroundColor: "#000",
    position: "absolute",
    zIndex: 100,
    top: 0,
    width: "100%"
  }
});
