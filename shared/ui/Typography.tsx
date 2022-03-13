import { Text as ReactText, StyleSheet } from "react-native";
import { Colors } from "constants/Colors";
import styled from "styled-components/native";
import { FC, ReactChild } from "react";

type TextProps = {
  children: ReactChild;
  style?: Object;
};

export const TextComponent: FC<TextProps> = ({ children, style }) => (
  <ReactText style={style}>{children}</ReactText>
);

export const Title = styled(TextComponent)`
  font-family: "SuisseIntlBook";
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.015;
  color: ${Colors.Main.Gray_3};
`;

export const Headline = styled(TextComponent)`
  font-family: "SuisseIntlBook";
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.015;
  color: ${Colors.Main.Gray_3};
`;

export const Subtitle = styled(TextComponent)`
  font-family: "SuisseIntlSiBold";
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.015;
  color: ${Colors.Main.Gray_3};
`;

export const Text = styled(TextComponent)`
  font-family: "SuisseIntlRegular";
  font-size: 15px;
  line-height: 20px;
  color: ${Colors.Main.Gray_3};
`;

export const Caption_1 = styled(TextComponent)`
  font-family: "SuisseIntlBook";
  font-size: 15px;
  line-height: 16px;
  color: ${Colors.Main.Gray_3};
`;

export const Caption_2 = styled(TextComponent)`
  font-family: "SuisseIntlBook";
  font-size: 12px;
  line-height: 16px;
  color: ${Colors.Main.Gray_2};
`;

export const Caption_3 = styled(TextComponent)`
  font-family: "SuisseIntlBook";
  font-size: 11px;
  line-height: 14px;
  color: ${Colors.Main.Gray_2};
`;
