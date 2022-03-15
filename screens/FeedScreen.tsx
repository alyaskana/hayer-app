import {
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

import { PostsFilters } from "features/feed";
import { PostCard } from "shared/components";
import { PostsMock } from "mocks/posts";
import { Colors } from "constants/Colors";

export const FeedScreen = ({ navigation }) => {
  const [activeFilters, setActiveFilters] = useState([
    "study",
    "work",
    "event",
  ]);
  console.log("===========", activeFilters);

  const renderItem = ({ item }) => (
    <PostCard
      key={item.id}
      title={item.title}
      type={item.type}
      description={item.description}
      user={item.user}
      tags={item.tags}
      format={item.format}
      navigation={navigation}
      deadline={item.deadline}
      responsesCount={item.responses.length}
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
          data={PostsMock}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
