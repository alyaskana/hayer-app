import { createStackNavigator } from "@react-navigation/stack";
import { CreatePostScreen } from "screens";

export const CreatePostStack = createStackNavigator();

export const CreatePostNavigator = () => {
  return (
    <CreatePostStack.Navigator screenOptions={{ headerShown: true }}>
      <CreatePostStack.Screen
        name="CreatePostScreen"
        component={CreatePostScreen}
        options={{ headerTitle: "Создать объявление" }}
      />
    </CreatePostStack.Navigator>
  );
};
