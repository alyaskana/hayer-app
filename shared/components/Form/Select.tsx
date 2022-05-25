import { FC } from "react";
import {
  TouchableOpacity,
  View,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import { Input, InputProps } from "./Input";
import DropdownIcon from "assets/images/dropdown_icon.svg";

type SelectProps = {
  onPress: (event: GestureResponderEvent) => void;
} & InputProps;

export const Select: FC<SelectProps> = ({ onPress, ...inputProps }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Input {...inputProps} />
      <View style={s.cover}>
        <DropdownIcon style={s.dropdownIcon} />
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  cover: {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  dropdownIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
});
