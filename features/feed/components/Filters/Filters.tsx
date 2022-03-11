import { View, Image } from "react-native";
import { Box } from "shared/components";

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
      <View style={{ marginRight: 4, flex: 1 }}>
        <Filter
          onPress={() => alert("Pressed!")}
          iconPath={require("~/assets/images/work_active_icon.png")}
          text="Работа"
        />
      </View>
      <View style={{ marginRight: 4, flex: 1 }}>
        <Filter
          onPress={() => alert("Pressed!")}
          iconPath={require("~/assets/images/study_active_icon.png")}
          text="Учеба"
        />
      </View>
      <View style={{ flex: 1 }}>
        <Filter
          onPress={() => alert("Pressed!")}
          iconPath={require("~/assets/images/event_active_icon.png")}
          text="Ивенты"
        />
      </View>
    </View>
  );
};
