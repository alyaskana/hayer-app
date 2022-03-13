import { Text, View, TouchableHighlight } from "react-native";
import { FC } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "constants/Colors";

type TagProps = {
  style?: Object;
  onPress?: () => void;
  text: string;
};

export const Tag: FC<TagProps> = ({ onPress, text, style }) => {
  return (
    <TouchableOpacity style={style} activeOpacity={0.6} onPress={onPress}>
      <View
        style={{
          alignItems: "center",
          backgroundColor: Colors.Main.White_gray,
          borderRadius: 20,
          paddingVertical: 8,
          paddingHorizontal: 16,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text style={{ color: Colors.Main.Gray_2 }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
