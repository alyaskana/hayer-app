import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";

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
const Filter = ({ onPress, iconPath, text }) => {
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

export const Filters = () => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 100,
        }}
      >
        <Image
          style={{ height: 32, width: 32 }}
          source={require("../../../assets/images/user.png")}
        ></Image>
      </View>
      <Filter
        onPress={() => alert("Pressed!")}
        iconPath={require("../../../assets/images/dollar.png")}
        text="Работа"
      />
      <Filter
        onPress={() => alert("Pressed!")}
        iconPath={require("../../../assets/images/study.png")}
        text="Учеба"
      />
      <Filter
        onPress={() => alert("Pressed!")}
        iconPath={require("../../../assets/images/pin.png")}
        text="Ивенты"
      />
    </View>
  );
};
