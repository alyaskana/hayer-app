import {
  Text,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Filters, Post } from "../components/feeds";
import { PostsMock } from "../mocks/posts";

export const FeedScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Post
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      user={item.user}
      tags={item.tags}
      navigation={navigation}
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
        marginTop: 20,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <Filters />
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
    marginTop: StatusBar.currentHeight + 20 || 20,
    width: "100%",
  },
  list: {
    width: "100%",
  },
});
