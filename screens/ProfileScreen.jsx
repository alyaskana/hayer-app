import { Text, View, ScrollView, Image, Linking } from "react-native";
import { profileMock } from "../mocks/profile";
import { Tag, Post } from "../components/feeds";

export const ProfileScreen = () => {
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
        <Image
          source={profileMock.avatar}
          style={{ borderRadius: 1000, alignSelf: "center" }}
        />

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
            <Tag text={tag.name} />
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
          <Post {...post} />
        ))}
      </View>
    </ScrollView>
  );
};
