import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthProvider } from "shared/hooks/useAuth";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import { Home } from "shared/components/Navigation/Home/Home";
import { Step1Screen, Step2Screen, Step3Screen } from "screens/onboarding";
import BackIcon from "assets/images/back_button.svg";
import { Colors } from "constants/Colors";
import { AuthScreen, LoginScreen } from "screens/auth";

const HAS_LAUNCHED_KEY = "hasLaunched";
const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const [hasLaunched, setHasLaunched] = useState<string | null>();

  useEffect(() => {
    AsyncStorage.getItem(HAS_LAUNCHED_KEY).then((res) => setHasLaunched(res));
    AsyncStorage.setItem(HAS_LAUNCHED_KEY, "true"); // ставит флаг что однажды уже запускалось приложение

    AsyncStorage.removeItem(HAS_LAUNCHED_KEY); // TODO: удалить потом
  }, []);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaProvider>
          <Stack.Navigator>
            {!hasLaunched && (
              <Stack.Group
                screenOptions={{
                  headerBackImage: () => (
                    <View
                      style={{
                        paddingLeft: 8,
                        paddingBottom: 2,
                      }}
                    >
                      <BackIcon width={64} height={40} />
                    </View>
                  ),
                  headerBackTitleVisible: false,
                  headerStyle: {
                    backgroundColor: Colors.Main.White_gray,
                  },
                  headerShadowVisible: false,
                  headerTitleStyle: {
                    fontFamily: "SuisseIntlSemiBold",
                    fontSize: 18,
                    color: Colors.Main.Gray_3,
                  },
                }}
              >
                <Stack.Screen
                  name="OnboardingStep1"
                  component={Step1Screen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="OnboardingStep2"
                  component={Step2Screen}
                  options={{ title: "" }}
                />
                <Stack.Screen
                  name="OnboardingStep3"
                  component={Step3Screen}
                  options={{ title: "" }}
                />
              </Stack.Group>
            )}
            <Stack.Group
              screenOptions={{
                headerBackImage: () => (
                  <View
                    style={{
                      paddingLeft: 8,
                      paddingBottom: 2,
                    }}
                  >
                    <BackIcon width={64} height={40} />
                  </View>
                ),
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: Colors.Main.White_gray,
                },
                headerShadowVisible: false,
                headerTitleStyle: {
                  fontFamily: "SuisseIntlSemiBold",
                  fontSize: 18,
                  color: Colors.Main.Gray_3,
                },
              }}
            >
              <Stack.Screen
                name="Auth"
                component={AuthScreen}
                options={{ title: "" }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: "Вход" }}
              />
            </Stack.Group>
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
            </Stack.Group>
          </Stack.Navigator>
        </SafeAreaProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
