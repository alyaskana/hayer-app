import {
  Text,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableHighlight,
} from "react-native";
import { Filters } from "../components/feeds";

const DATA = [
  {
    id: "1",
    title: "Разработчик мобильных приложений IOS",
    user: { name: "Козырев Антон" },
    tags: [
      { id: 1, name: "разработка" },
      { id: 2, name: "ios" },
      { id: 3, name: "react" },
    ],
    description:
      "Нужно запилить небольшую фичу для учебного проекта, хотим запустить в ближайшие дни. Есть пару багов — надо их убрать и затем дописать пои....",
  },
  {
    id: "2",
    title: "Верстка сайта",
    tags: [{ id: 1, name: "разработка" }],
    user: { name: "Козырев Антон" },
    description:
      "Скоро запускаем учебный проект — бот в тг, нужно подготовить и релизнуть для него платформу. После релиза будет привлекать инвестиции поэт...",
  },
  {
    id: "3",
    title: "Решить задачу по Питону",
    tags: [
      { id: 1, name: "разработка" },
      { id: 2, name: "python" },
    ],
    user: { name: "Козырев Антон" },
    description:
      "Есть дз срочно до 15 декабря нужно запилить небольшую фичу для учебного проекта, готовы оплатить. Работы немного — три задачи на функц...",
  },
  {
    id: "4",
    title: "Разработчик мобильных приложений IOS",
    tags: [
      { id: 1, name: "разработка" },
      { id: 2, name: "ios" },
      { id: 3, name: "react" },
    ],
    user: { name: "Козырев Антон" },
    description:
      "Есть дз срочно до 15 декабря нужно запилить небольшую фичу для учебного проекта, готовы оплатить. Работы немного — три задачи на функц...",
  },
  {
    id: "5",
    title: "Решить задачу по Питону",
    tags: [
      { id: 1, name: "разработка" },
      { id: 2, name: "ios" },
      { id: 3, name: "react" },
    ],
    user: { name: "Козырев Антон" },
    description:
      "Есть дз срочно до 15 декабря нужно запилить небольшую фичу для учебного проекта, готовы оплатить. Работы немного — три задачи на функц...",
  },
  {
    id: "6",
    title: "Верстка сайта",
    tags: [
      { id: 1, name: "разработка" },
      { id: 2, name: "ios" },
      { id: 3, name: "react" },
    ],
    user: { name: "Козырев Антон" },
    description:
      "Есть дз срочно до 15 декабря нужно запилить небольшую фичу для учебного проекта, готовы оплатить. Работы немного — три задачи на функц...",
  },
];

const Tag = ({ onPress, text }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onPress}
    >
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#F2F2F2",
          borderRadius: 20,
          paddingVertical: 8,
          paddingHorizontal: 16,
          marginRight: 8,
          display: "flex",
          flexDirection: "row",
          color: "#8B8C8D",
        }}
      >
        <Text style={{ color: "#8B8C8D" }}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const Item = ({ title, description, user, tags }) => (
  <View style={styles.item}>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 12,
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 1,
        marginBottom: 12,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          style={{ marginRight: 8, width: 32, height: 32 }}
          source={require("../assets/images/dollar.png")}
        />
        <Image
          style={{ marginRight: 8, width: 32, height: 32 }}
          source={require("../assets/images/study.png")}
        />
        <Image
          style={{ marginRight: 8, width: 32, height: 32 }}
          source={require("../assets/images/pin.png")}
        />
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{ color: "#C9CACB" }}>4 часа назад</Text>
      </View>
    </View>
    <Text
      style={{
        fontSize: 24,
        marginBottom: 12,
      }}
    >
      {title}
    </Text>
    <View style={{ display: "flex", flexDirection: "row", marginBottom: 24 }}>
      {tags.map((tag) => (
        <Tag text={tag.name} onPress={() => alert("Pressed!")} />
      ))}
    </View>
    <View
      style={{
        paddingBottom: 12,
        borderBottomColor: "#F5F5F5",
        borderBottomWidth: 1,
        marginBottom: 12,
      }}
    >
      <Text
        style={{
          fontSize: 13,
          color: "#8B8C8D",
        }}
      >
        {description}
      </Text>
    </View>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>{user.name}</Text>
      <Image
        style={{ width: 32, height: 32 }}
        source={require("../assets/images/user.png")}
      />
    </View>
  </View>
);

export const FeedScreen = () => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      description={item.description}
      user={item.user}
      tags={item.tags}
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
          data={DATA}
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
  item: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginVertical: 8,
    width: "100%",
    borderRadius: 12,
  },
  list: {
    width: "100%",
  },
});
