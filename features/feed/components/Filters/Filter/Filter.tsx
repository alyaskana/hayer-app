import { Colors } from "constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export const Filter = ({ onPress, iconPath, text }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.button}>
        <Image style={styles.icon} source={iconPath} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // width: 117,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Main.White,
    borderRadius: 20,
    padding: 4,
    color: Colors.Main.Gray_2,
  },
  text: {
    color: Colors.Main.Gray_2,
  },
  icon: {
    marginRight: 8,
    width: 32,
    height: 32,
  },
});
