import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.skicontrol.TatrySuperSki',
  appName: 'TatrySuperSki',
  webDir: 'www',
  bundledWebRuntime: false,

  server: {
    
    allowNavigation: ["https://tss.1pk0.sk", "*.tss.1pk0.sk"]
  }

}

export default config;
