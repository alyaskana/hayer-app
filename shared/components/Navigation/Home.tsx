// Learn more about createTabNavigator:
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import FeedIcon from "assets/images/feed.svg";
import FavoritesIcon from "assets/images/favorites.svg";
import AddIcon from "assets/images/add.svg";
import UserIcon from "assets/images/user.svg";
import ResponseIcon from "assets/images/response.svg";
import { Colors } from "constants/Colors";
import {
  CreatePostScreen,
  FeedScreen,
  ProfileScreen,
  ResponsesScreen,
} from "screens";
import { FavoritesScreen } from "screens";

const Tab = createBottomTabNavigator();

export const Home = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "space-between",
        },
        tabBarActiveTintColor: Colors.Main.Primary,
        tabBarInactiveTintColor: Colors.Main.Gray_1,
        tabBarLabel: "",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FeedIcon style={{ color }} />,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FavoritesIcon style={{ color }} />,
        }}
      />
      <Tab.Screen
        name="add"
        component={CreatePostScreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => navigation.navigate("AddPost")}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddIcon style={{ color: Colors.Main.Gray_1 }} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Responses"
        component={ResponsesScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <ResponseIcon style={{ color }} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <UserIcon style={{ color }} />,
        }}
      />
    </Tab.Navigator>
  );
};
