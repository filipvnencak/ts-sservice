import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {

		SplashScreen: {

		launchShowDuration: 1000,

		launchAutoHide: true,
    backgroundColor: "#ffffffff",
    androidSplashResourceName: "splash",
    androidScaleType: "CENTER_CROP",
    showSpinner: true,
    androidSpinnerStyle: "large",
    iosSpinnerStyle: "small",
    spinnerColor: "#999999",
    splashFullScreen: true,
    splashImmersive: true,
    layoutName: "launch_screen",
    useDialog: true, }
    }, 
  appId: 'com.skicontrol.TatrySuperSki',
  appName: 'TatrySuperSki',
  webDir: 'www',
  bundledWebRuntime: false,

 
  // server: {
    
  //   allowNavigation: ["https://tss.1pk0.sk", "*.tss.1pk0.sk"]
  // }

}

export default config;
