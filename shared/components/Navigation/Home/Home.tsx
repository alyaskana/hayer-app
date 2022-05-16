// Learn more about createTabNavigator:
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { CreatePostNavigator } from "./CreatePostNavigator";
import { FeedNavigator } from "./FeedNavigator";
import { ProfileNavigator } from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 120,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Feed"
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
      <Tab.Screen
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
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
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
    </Tab.Navigator>
  );
};
