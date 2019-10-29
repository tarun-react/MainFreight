
package com.facebook.react;

import android.app.Application;
import android.content.Context;
import android.content.res.Resources;

import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.ArrayList;

import com.mainfreight.BuildConfig;
import com.mainfreight.R;

// @react-native-community/async-storage
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
// @react-native-community/netinfo
import com.reactnativecommunity.netinfo.NetInfoPackage;
// @terrylinla/react-native-sketch-canvas
import com.terrylinla.rnsketchcanvas.SketchCanvasPackage;
// react-native-bottom-sheet-behavior
import com.bottomsheetbehavior.BottomSheetBehaviorPackage;
// react-native-fetch-blob
import com.RNFetchBlob.RNFetchBlobPackage;
// react-native-firebase
import io.invertase.firebase.RNFirebasePackage;
// react-native-gesture-handler
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
// react-native-i18n
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
// react-native-image-picker
import com.imagepicker.ImagePickerPackage;
// react-native-linear-gradient
import com.BV.LinearGradient.LinearGradientPackage;
// react-native-nested-scroll-view
import com.rnnestedscrollview.RNNestedScrollViewPackage;
// react-native-reanimated
import com.swmansion.reanimated.ReanimatedPackage;
// react-native-snackbar
import com.azendoo.reactnativesnackbar.SnackbarPackage;
// react-native-splash-screen
import org.devio.rn.splashscreen.SplashScreenReactPackage;
// react-native-svg
import com.horcrux.svg.SvgPackage;
// react-native-vector-icons
import com.oblador.vectoricons.VectorIconsPackage;

public class PackageList {
  private Application application;
  private ReactNativeHost reactNativeHost;
  public PackageList(ReactNativeHost reactNativeHost) {
    this.reactNativeHost = reactNativeHost;
  }

  public PackageList(Application application) {
    this.reactNativeHost = null;
    this.application = application;
  }

  private ReactNativeHost getReactNativeHost() {
    return this.reactNativeHost;
  }

  private Resources getResources() {
    return this.getApplication().getResources();
  }

  private Application getApplication() {
    if (this.reactNativeHost == null) return this.application;
    return this.reactNativeHost.getApplication();
  }

  private Context getApplicationContext() {
    return this.getApplication().getApplicationContext();
  }

  public ArrayList<ReactPackage> getPackages() {
    return new ArrayList<>(Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new AsyncStoragePackage(),
      new NetInfoPackage(),
      new SketchCanvasPackage(),
      new BottomSheetBehaviorPackage(),
      new RNFetchBlobPackage(),
      new RNFirebasePackage(),
      new RNGestureHandlerPackage(),
      new RNI18nPackage(),
      new ImagePickerPackage(),
      new LinearGradientPackage(),
      new RNNestedScrollViewPackage(),
      new ReanimatedPackage(),
      new SnackbarPackage(),
      new SplashScreenReactPackage(),
      new SvgPackage(),
      new VectorIconsPackage()
    ));
  }
}
