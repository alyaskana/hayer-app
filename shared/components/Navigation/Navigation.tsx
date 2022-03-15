// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { NotFoundScreen } from "screens/NotFoundScreen";
import { BottomTabNavigator } from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration as any}
      theme={DefaultTheme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
