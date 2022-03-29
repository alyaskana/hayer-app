// Learn more about createBottomTabNavigator:
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { CreatePostNavigator } from "./CreatePostNavigator";
import { FeedNavigator } from "./FeedNavigator";
import { ProfileNavigator } from "./ProfileNavigator";

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 120,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        },
      }}
    >
      <BottomTab.Screen
        name="Лента"
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 16,
            marginBottom: 12,
            fontWeight: "500",
          },
          tabBarIcon: () => false,
          tabBarIconStyle: { display: "none" },
        }}
      />
      <BottomTab.Screen
        name="add"
        component={CreatePostNavigator}
        options={{
          tabBarButton: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: 48,
                paddingLeft: 36,
                paddingRight: 36,
                borderRadius: 100,
                backgroundColor: "#1C63EC",
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  lineHeight: 32,
                  fontSize: 28,
                }}
              >
                +
              </Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Профиль"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          // tabBarShowLabel: false,
          tabBarLabelStyle: {
            fontSize: 16,
            marginBottom: 12,
            fontWeight: "500",
          },
          tabBarIcon: () => false,
          tabBarIconStyle: { display: "none" },
        }}
      />
    </BottomTab.Navigator>
  );
};
