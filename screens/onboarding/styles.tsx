import { Colors } from "constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const s = StyleSheet.create({
  wrap: {
    paddingHorizontal: 8,
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: Dimensions.get("window").height - 47 - 34,
  },
  image: {
    marginTop: 55,
    width: 359,
    height: 340,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    marginTop: 4,
    paddingHorizontal: 12,
  },
  buttons: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  pagination: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  circle: {
    marginHorizontal: 3,
    borderRadius: 8,
    width: 8,
    height: 8,
    backgroundColor: Colors.Main.Gray_1,
  },
  circleActive: {
    marginHorizontal: 3,
    borderRadius: 8,
    width: 8,
    height: 8,
    backgroundColor: Colors.Main.Gray_2,
  },
  skipBtn: {
    marginTop: 8,
  },
});
