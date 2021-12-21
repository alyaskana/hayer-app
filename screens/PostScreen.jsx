import { Text, View, Image } from "react-native";
import { Post } from "../components/feeds";
import { PostsMock } from "../mocks/posts";

export const PostScreen = ({
  route: {
    params: { id },
  },
}) => {
  post = PostsMock.find((post) => post.id == id);
  return (
    <View style={{ padding: 8 }}>
      <Post isFullDescription {...post} />
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: 12,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          height: 102,
        }}
      >
        <Text
          style={{
            fontSize: 93,
            lineHeight: 93,
          }}
        >
          13
        </Text>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 24,
            fontWeight: "500",
          }}
        >
          Откликов
        </Text>
        <Image
          source={require("../assets/images/response.png")}
          style={{ marginLeft: "auto" }}
        />
      </View>
      <View
        style={{
          height: 80,
          borderRadius: 90,
          backgroundColor: "#1C63EC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 24,
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 18 }}>Откликнуться</Text>
      </View>
    </View>
  );
};
