import { View, FlatList, StatusBar, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import intersection from "lodash/intersection";

import { PostsFilters } from "features/feed";
import { PostCard } from "shared/components";
import { postsFetcher } from "shared/api";
import { Post } from "shared/types/post";
import { Colors } from "constants/Colors";
import { Headline } from "shared/ui/Typography";

export const FeedScreen = ({ navigation }) => {
  const [activeFilters, setActiveFilters] = useState([
    "study",
    "work",
    "event",
  ]);

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    postsFetcher.getAll().then(({ data }) => {
      data = data.filter((post) => {
        const postAdTypes = post.ad_types.map((type) => type.key);
        return intersection(postAdTypes, activeFilters).length > 0;
      });
      setPosts(data);
    });
  }, [activeFilters]);

  const renderItem = ({ item }) => (
    <PostCard
      key={item.id}
      post={item}
      navigation={navigation}
      style={{ marginBottom: 8 }}
      onPress={() =>
        navigation.push("Post", {
          id: item.id,
        })
      }
    />
  );

  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 8,
        }}
      >
        <StatusBar backgroundColor={Colors.Main.White_gray} />
        <PostsFilters
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 250,
              }}
            >
              <Headline>Нет постов.</Headline>
              <Headline>Попробуйте расслабить фильтры.</Headline>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};
