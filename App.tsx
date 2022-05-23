import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthProvider } from "shared/hooks/useAuth";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import { Home, headerConfig } from "shared/components/Navigation";
import { Step1Screen, Step2Screen, Step3Screen } from "screens/onboarding";
import {
  AuthScreen,
  LoginScreen,
  RegisterCodeScreen,
  RegisterEmailScreen,
} from "screens/auth";
import { CreatePostScreen, PostScreen } from "screens";

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
          <Stack.Navigator screenOptions={headerConfig}>
            {!hasLaunched && (
              <Stack.Group>
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
            <Stack.Group>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddPost"
                component={CreatePostScreen}
                options={{ title: "Создать объявление" }}
              />
              <Stack.Screen
                name="Post"
                component={PostScreen}
                options={{ title: "Объявление" }}
              />
              {/* </Stack.Group>
            <Stack.Group> */}
              <Stack.Screen
                name="Auth"
                component={AuthScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: "Вход" }}
              />
              <Stack.Screen
                name="SignUp"
                component={RegisterEmailScreen}
                options={{ title: "Регистрация" }}
              />
              <Stack.Screen
                name="SignUpCode"
                component={RegisterCodeScreen}
                options={{ title: "Регистрация" }}
              />
            </Stack.Group>
          </Stack.Navigator>
        </SafeAreaProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
