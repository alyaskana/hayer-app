import { Colors } from "constants/Colors";
import { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, ImageSourcePropType } from "react-native";
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
      <Button>
        <Icon source={iconPath} />
        <Caption_1 style={{ color: Colors.Main.Gray_2 }}>{text}</Caption_1>
      </Button>
    </TouchableOpacity>
  );
};

const Button = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.Main.White};
  border-radius: 20;
  padding: 4px;
  color: ${Colors.Main.Gray_2};
`;

const Icon = styled.Image`
  margin-right: 8px;
  width: 32px;
  height: 32px;
`;
