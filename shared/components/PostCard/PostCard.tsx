import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { FC } from "react";

import { Tag } from "shared/components/Tag/Tag";

const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

type PostCardProps = {
  title: string;
  description: string;
  user: any;
  tags: any;
  onPress: () => void;
  isFullDescription?: boolean;
  id?: number;
  navigation?: any;
};

export const PostCard: FC<PostCardProps> = ({
  title,
  description,
  user,
  tags,
  onPress,
  isFullDescription = false,
}) => {
  const formattedDescription = isFullDescription
    ? description
    : truncateString(description, 155);
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
            marginBottom: 16,
          }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              style={{ marginRight: 8, width: 32, height: 32 }}
              source={require("~/assets/images/work_active_icon.png")}
            />
            <Image
              style={{ marginRight: 8, width: 32, height: 32 }}
              source={require("assets/images/study_active_icon.png")}
            />
            <Image
              style={{ marginRight: 8, width: 32, height: 32 }}
              source={require("assets/images/event_active_icon.png")}
            />
          </View>
          <View
            style={{
              height: 32,
              paddingLeft: 11,
              paddingRight: 11,
              backgroundColor: "#F0F1F2",
              borderRadius: 100,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ marginRight: 4, width: 20, height: 20 }}
              source={require("../../../assets/images/response.png")}
            />
            <Text style={{ fontSize: 18 }}>13</Text>
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
          style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
        >
          {tags.map((tag) => (
            <Tag text={tag.name} onPress={() => alert("Pressed!")} />
          ))}
        </View>
        <View
          style={{
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#2f2f2f",
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 32, height: 32, marginRight: 8 }}
              source={require("../../../assets/images/avatar.jpg")}
            />
            <Text>{user.name}</Text>
          </View>
          <View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ color: "#C9CACB" }}>4 часа назад</Text>
            </View>
          </View>
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
