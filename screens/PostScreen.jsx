import { Text, View } from "react-native";
import { Post } from "../components/feeds";
import { PostsMock } from "../mocks/posts";

export const PostScreen = ({
  route: {
    params: { id },
  },
}) => {
  post = PostsMock.find((post) => post.id == id);
  return (
    <View>
      <Post isFullDescription {...post} />
    </View>
  );
};
