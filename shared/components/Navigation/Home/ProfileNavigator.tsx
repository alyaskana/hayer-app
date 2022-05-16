import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen, PostScreen } from "screens";
import { FeedStack } from "./FeedNavigator";

export const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: true }}>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: "Профиль", headerShown: false }}
      />
      <FeedStack.Screen
        name="Post"
        component={PostScreen}
        options={{ title: "Объявление" }}
      />
    </ProfileStack.Navigator>
  );
};
