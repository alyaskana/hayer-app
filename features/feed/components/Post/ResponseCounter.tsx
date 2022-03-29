import { Colors } from "constants/Colors";
import { Title } from "shared/ui/Typography";
import styled from "styled-components/native";

export const ResponseCounter = ({ count }) => {
  return (
    <Wrap>
      <Count>{count}</Count>
      <Title>отклик(ов)</Title>
      <Icon source={require("assets/images/response_72.png")} />
    </Wrap>
  );
};

const Wrap = styled.View`
  background-color: ${Colors.Main.White};
  border-radius: 20px;
  padding: 12px;
  height: 96px;
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const Count = styled.Text`
  font-family: "SuisseIntlBook";
  font-size: 89px;
  line-height: 89px;
  letter-spacing: -0.015;
  height: 89px;
  margin-right: 4px;
  color: ${Colors.Main.Gray_3};
`;

const Icon = styled.Image`
  margin-left: auto;
  width: 72px;
  height: 72px;
`;
