import styled from "styled-components/native";
import { View } from "react-native";
import { Colors } from "constants/Colors";
import { Headline, Title } from "shared/ui/Typography";

export const Deadline = ({ date }) => {
  if (new Date(date) > new Date()) {
    return (
      <Wrap>
        <Icon source={require("assets/images/time_72.png")} />
        <View>
          <Headline style={{ color: Colors.Main.Gray_1, marginBottom: 4 }}>
            Дедлайн
          </Headline>
          <Title>12 дней</Title>
        </View>
      </Wrap>
    );
  } else {
    return (
      <Wrap>
        <Icon source={require("assets/images/closed_72.png")} />
        <Title style={{ color: Colors.Accent.Red }}>Объявление закрыто</Title>
      </Wrap>
    );
  }
};

const Wrap = styled.View`
  background-color: ${Colors.Main.White};
  border-radius: 20px;
  padding: 12px;
  height: 96px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.Image`
  width: 72px;
  height: 72px;
  margin-right: 12px;
`;
