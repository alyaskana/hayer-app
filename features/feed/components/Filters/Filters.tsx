import { View } from "react-native";
import { Dispatch, FC, SetStateAction } from "react";
import { Filter } from "./Filter/Filter";

type FitersProps = {
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
};

export const Filters: FC<FitersProps> = ({
  activeFilters,
  setActiveFilters,
}) => {
  const isActive = (type) => {
    return activeFilters.includes(type);
  };

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
          onPress={setActiveFilters}
          iconPath={
            isActive("work")
              ? require("~/assets/images/work_active_icon.png")
              : require("~/assets/images/work_unactive_icon.png")
          }
          text="Работа"
          type="work"
          isActive={isActive("work")}
        />
      </View>
      <View style={{ marginRight: 4, flex: 1 }}>
        <Filter
          onPress={setActiveFilters}
          iconPath={
            isActive("study")
              ? require("~/assets/images/study_active_icon.png")
              : require("~/assets/images/study_unactive_icon.png")
          }
          text="Учеба"
          type="study"
          isActive={isActive("study")}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Filter
          onPress={setActiveFilters}
          iconPath={
            isActive("events")
              ? require("~/assets/images/event_active_icon.png")
              : require("~/assets/images/event_unactive_icon.png")
          }
          text="Ивенты"
          type="events"
          isActive={isActive("events")}
        />
      </View>
    </View>
  );
};
