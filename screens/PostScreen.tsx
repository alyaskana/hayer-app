import { Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import { PostCardFull } from "features/feed";
import { ResponseCounter } from "features/feed/components/Post/ResponseCounter";
import { Deadline } from "features/feed/components/Post/Deadline";
import { postsFetcher } from "shared/api";
import { Post } from "shared/types";

export const PostScreen = ({
  route: {
    params: { id },
  },
}) => {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    postsFetcher.getById(id).then(({ data }) => setPost(data));
  }, []);

  if (!post) return null;

  return (
    <ScrollView style={{ padding: 8 }}>
      <PostCardFull key={post.id} post={post} />
      <ResponseCounter count={post.responses.length} />
      <Deadline date={post.deadline} />
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
    </ScrollView>
  );
};
