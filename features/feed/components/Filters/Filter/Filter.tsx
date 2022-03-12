import { Colors } from "constants/Colors";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Caption_1 } from "shared/ui/Typography";

export const Filter = ({ onPress, iconPath, text }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.button}>
        <Image style={styles.icon} source={iconPath} />
        <Caption_1 style={{ color: Colors.Main.Gray_2 }}>{text}</Caption_1>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Main.White,
    borderRadius: 20,
    padding: 4,
    color: Colors.Main.Gray_2,
  },
  icon: {
    marginRight: 8,
    width: 32,
    height: 32,
  },
});
