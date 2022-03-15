import { Text, View, ScrollView, Image } from "react-native";

import { PostCardFull } from "features/feed";
import { PostsMock } from "mocks/posts";
import { useEffect, useState } from "react";
import { ResponseCounter } from "features/feed/components/Post/ResponseCounter";
import { Deadline } from "features/feed/components/Post/Deadline";

export const PostScreen = ({
  route: {
    params: { id },
  },
}) => {
  const [post, setPost] = useState<any>();

  useEffect(() => {
    const mockPost = PostsMock.find((post) => post.id == id);
    setPost(mockPost);
  }, []);

  if (!post) return null;

  return (
    <ScrollView style={{ padding: 8 }}>
      <PostCardFull
        key={post.id}
        title={post.title}
        type={post.type}
        description={post.description}
        user={post.user}
        tags={post.tags}
        format={post.format}
        deadline={post.deadline}
        isFavourite={post.isFavourite}
      />
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
