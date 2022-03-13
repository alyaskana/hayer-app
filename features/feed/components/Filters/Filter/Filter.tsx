import { Colors } from "constants/Colors";
import { Dispatch, FC, SetStateAction } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Caption_1 } from "shared/ui/Typography";

type FilterProps = {
  onPress: Dispatch<SetStateAction<string[]>>;
  iconPath: ImageSourcePropType;
  text: string;
  type: "work" | "study" | "event";
  isActive: boolean;
};

export const Filter: FC<FilterProps> = ({
  onPress,
  iconPath,
  text,
  type,
  isActive,
}) => {
  const handleFilterPress = () => {
    onPress((prevState) =>
      isActive
        ? prevState.filter((stateType: string) => stateType != type)
        : prevState.concat(type)
    );
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={handleFilterPress}>
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
