import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export const useLoadedAssets = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync(Ionicons.font);
        await Font.loadAsync({
          SuisseIntlSemiBold: require("~/assets/fonts/SuisseIntl-SemiBold.otf"),
          SuisseIntlBook: require("~/assets/fonts/SuisseIntl-Book.otf"),
          SuisseIntlRegular: require("~/assets/fonts/SuisseIntl-Regular.otf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};
