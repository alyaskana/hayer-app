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
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <PostsFilters
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={PostsMock}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 8 || 8,
    width: "100%",
  },
  list: {
    width: "100%",
  },
});
