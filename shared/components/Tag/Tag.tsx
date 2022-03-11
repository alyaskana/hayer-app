import { Text, View, TouchableHighlight } from "react-native";

export const Tag = ({ onPress, text }) => {
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
        }}
      >
        <Text style={{ color: "#8B8C8D" }}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};
