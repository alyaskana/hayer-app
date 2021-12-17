import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from "react-native";

import { Tag } from "../Tag/Tag";

const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const Post = ({
  title,
  description,
  user,
  tags,
  onPress,
  isFullDescription = false,
}) => {
  const formattedDescription = isFullDescription
    ? description
    : truncateString(description, 100);
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onPress}
    >
      <View style={styles.post}>
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
              source={require("../../../assets/images/dollar.png")}
            />
            <Image
              style={{ marginRight: 8, width: 32, height: 32 }}
              source={require("../../../assets/images/study.png")}
            />
            <Image
              style={{ marginRight: 8, width: 32, height: 32 }}
              source={require("../../../assets/images/pin.png")}
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
        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 24 }}
        >
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
            {formattedDescription}
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
            source={require("../../../assets/images/user.png")}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginBottom: 8,
    width: "100%",
    borderRadius: 12,
  },
});
