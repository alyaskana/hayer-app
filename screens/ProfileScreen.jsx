import {
  Text,
  View,
  ScrollView,
  Image,
  Linking,
  TouchableHighlight,
} from "react-native";
import { profileMock } from "../mocks/profile";
import { Tag, Post } from "../components/feeds";

export const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ paddingHorizontal: 12 }}>
      <Image
        source={require("../assets/images/settings.png")}
        style={{
          borderRadius: 1000,
          position: "absolute",
          top: 12,
          right: 12,
          width: 42,
          height: 42,
        }}
      />
      <View
        style={{
          marginTop: 12,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 172,
          borderTopRightRadius: 172,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          padding: 16,
          paddingTop: 18,
        }}
      >
        <View style={{ position: "relative" }}>
          <Image
            source={profileMock.avatar}
            style={{ borderRadius: 1000, alignSelf: "center" }}
          />
          <View
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: 42,
              height: 42,
              backgroundColor: "#1C63EC",
              borderRadius: 10000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableHighlight
              onPress={() => Linking.openURL(profileMock.social_network)}
            >
              <Image
                source={require("../assets/images/instagram.png")}
                style={{ width: 22, height: 22 }}
                onPress={() => Linking.openURL(profileMock.social_network)}
              />
            </TouchableHighlight>
          </View>
          <View
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 42,
              height: 42,
              backgroundColor: "#1C63EC",
              borderRadius: 10000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "#FFFFFF", textAlign: "center", fontSize: 24 }}
            >
              {profileMock.course}
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: 10,
                marginTop: -8,
              }}
            >
              курс
            </Text>
          </View>
        </View>

        <Text
          style={{
            color: "#2F2F2F",
            fontSize: 32,
            marginTop: 16,
          }}
        >{`${profileMock.first_name} ${profileMock.last_name}`}</Text>
        <Text
          style={{
            color: "#C9CACB",
            fontSize: 14,
          }}
        >
          {profileMock.position}
        </Text>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 16 }}>
          {profileMock.tags.map((tag) => (
            <Tag text={tag.name} key={tag.id} />
          ))}
        </View>
        <Text
          style={{
            color: "#2F2F2F",
            fontSize: 14,
            marginTop: 16,
          }}
        >
          {profileMock.bio}
        </Text>
        <View
          style={{
            borderBottomColor: "rgba(0,0,0,0.06)",
            borderBottomWidth: 1,
            marginVertical: 16,
          }}
        />
        <Text
          style={{
            color: "#1C63EC",
            textTransform: "uppercase",
            fontSize: 14,
          }}
          onPress={() => Linking.openURL(profileMock.site)}
        >
          {profileMock.site}
        </Text>
      </View>
      <View style={{ marginTop: 8 }}>
        {profileMock.posts.map((post) => (
          <Post
            key={post.id}
            onPress={() =>
              navigation.push("Post", {
                id: post.id,
              })
            }
            {...post}
          />
        ))}
      </View>
    </ScrollView>
  );
};
