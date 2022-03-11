import { View, Image } from "react-native";

import { Filter } from "./Filter/Filter";

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
          source={require("~/assets/images/user.png")}
        ></Image>
      </View>
      <Filter
        onPress={() => alert("Pressed!")}
        iconPath={require("~/assets/images/dollar.png")}
        text="Работа"
      />
      <Filter
        onPress={() => alert("Pressed!")}
        iconPath={require("~/assets/images/study.png")}
        text="Учеба"
      />
      <Filter
        onPress={() => alert("Pressed!")}
        iconPath={require("~/assets/images/pin.png")}
        text="Ивенты"
      />
    </View>
  );
};
