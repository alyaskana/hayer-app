import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Linking,
} from "react-native";

import { profileMock } from "mocks/profile";
import { Tag, PostCard } from "shared/components";

export const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={{ paddingHorizontal: 8 }}>
        <Image
          source={require("../assets/images/settings.png")}
          style={{
            borderRadius: 1000,
            position: "absolute",
            top: 12,
            right: 0,
            width: 59,
            height: 40,
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
          </View>

          <Text
            style={{
              color: "#2F2F2F",
              fontSize: 32,
              marginTop: 24,
            }}
          >{`${profileMock.first_name} ${profileMock.last_name}`}</Text>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 4,
            }}
          >
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 100,
                backgroundColor: "#C9CACB",
                marginRight: 4,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: 13,
                  lineHeight: 19,
                }}
              >
                {profileMock.course}
              </Text>
            </View>
            <Text
              style={{
                color: "#C9CACB",
                fontSize: 14,
              }}
            >
              {profileMock.position}
            </Text>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 16 }}
          >
            {profileMock.tags.map((tag) => (
              <Tag
                text={tag.name}
                key={tag.id}
                onPress={() => alert("press")}
              />
            ))}
          </View>
          <Text
            style={{
              color: "#2F2F2F",
              fontSize: 15,
              marginTop: 12,
            }}
          >
            {profileMock.bio}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 24,
            }}
          >
            <Image
              style={{ width: 32, height: 32, marginRight: 8 }}
              source={require("../assets/images/link.png")}
            />
            <Text
              style={{
                color: "#1C63EC",
                fontSize: 14,
              }}
              onPress={() => Linking.openURL(profileMock.site)}
            >
              {profileMock.site}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 8 }}>
          {profileMock.posts.map((post) => (
            <PostCard
              key={post.id}
              style={{ marginBottom: 8 }}
              responsesCount={post.responses.length}
              navigation={navigation}
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
    </SafeAreaView>
  );
};
