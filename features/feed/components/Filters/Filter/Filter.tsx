import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";

export const Filter = ({ onPress, iconPath, text }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={onPress}
    >
      <View style={styles.button}>
        <Image
          style={{ marginRight: 8, width: 32, height: 32 }}
          source={iconPath}
        />
        <Text style={{ color: "#8B8C8D" }}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 16,
    display: "flex",
    marginLeft: 4,
    flexDirection: "row",
    color: "#8B8C8D",
  },
});
