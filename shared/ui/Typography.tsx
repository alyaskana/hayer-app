import { Text as ReactText, StyleSheet } from "react-native";
import { Colors } from "constants/Colors";

export const Title = ({ children, style }) => (
  <ReactText style={{ ...styles.title, ...style }}>{children}</ReactText>
);

export const Headline = ({ children, style }) => (
  <ReactText style={{ ...styles.headline, ...style }}>{children}</ReactText>
);

export const Subtitle = ({ children, style }) => (
  <ReactText style={{ ...styles.subtitle, ...style }}>{children}</ReactText>
);

export const Text = ({ children, style }) => (
  <ReactText style={{ ...styles.text, ...style }}>{children}</ReactText>
);

export const Caption_1 = ({ children, style }) => (
  <ReactText style={{ ...styles.caption_1, ...style }}>{children}</ReactText>
);

export const Caption_2 = ({ children, style }) => (
  <ReactText style={{ ...styles.caption_2, ...style }}>{children}</ReactText>
);

export const Caption_3 = ({ children, style }) => (
  <ReactText style={{ ...styles.caption_3, ...style }}>{children}</ReactText>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "SuisseIntlBook",
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: -1.5,
    color: Colors.Main.Gray_3,
  },
  headline: {
    fontFamily: "SuisseIntlBook",
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: -1.5,
    color: Colors.Main.Gray_3,
  },
  subtitle: {
    fontFamily: "SuisseIntlSemiBold",
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: -1.5,
    color: Colors.Main.Gray_3,
  },
  text: {
    fontFamily: "SuisseIntlBook",
    fontSize: 15,
    lineHeight: 20,
    color: Colors.Main.Gray_3,
  },
  caption_1: {
    fontFamily: "SuisseIntlBook",
    fontSize: 15,
    lineHeight: 16,
    color: Colors.Main.Gray_3,
  },
  caption_2: {
    fontFamily: "SuisseIntlBook",
    fontSize: 12,
    lineHeight: 16,
    color: Colors.Main.Gray_2,
  },
  caption_3: {
    fontFamily: "SuisseIntlBook",
    fontSize: 11,
    lineHeight: 14,
    color: Colors.Main.Gray_2,
  },
});
