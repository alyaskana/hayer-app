import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "constants/Colors";
import { Caption_1 } from "shared/ui/Typography";
import CheckIcon from "assets/images/check_icon.svg";

type ItemProps = {
  title: string;
  isSelected: boolean;
};

export const ListItemRadio: FC<ItemProps> = ({ title, isSelected }) => {
  return (
    <View style={s.wrap}>
      <Caption_1 style={s.title}>{title}</Caption_1>
      <View style={s.radioButton}>
        {isSelected && <CheckIcon style={s.checkIcon} />}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  wrap: {
    padding: 12,
    backgroundColor: Colors.Main.White_gray,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: Colors.Main.Gray_3,
    flex: 1,
  },
  radioButton: {
    backgroundColor: Colors.Main.White,
    borderRadius: 100,
    height: 32,
    width: 32,
    padding: 4,
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
});
