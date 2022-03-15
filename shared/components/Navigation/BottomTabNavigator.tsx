// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { FeedScreen, ProfileScreen, PostScreen } from "screens";

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
        component={ProfileNavigator}
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

const FeedStack = createStackNavigator();

function FeedNavigator() {
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
}

const ProfileStack = createStackNavigator();

function ProfileNavigator() {
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
}
