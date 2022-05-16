import { createStackNavigator } from "@react-navigation/stack";
import { FeedScreen, PostScreen } from "screens";

export const FeedStack = createStackNavigator();

export const FeedNavigator = () => {
  return (
    <FeedStack.Navigator screenOptions={{ headerShown: true }}>
      <FeedStack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ title: "Лента", headerShown: false }}
      />
      <FeedStack.Screen
        name="Post"
        component={PostScreen}
        options={{ title: "Объявление" }}
      />
    </FeedStack.Navigator>
  );
};
