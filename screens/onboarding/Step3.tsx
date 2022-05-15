import { FC } from "react";
import { View, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import { Button } from "shared/components/Button/Button";
import { Title } from "shared/ui/Typography";

export const Step3Screen: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={s.wrap}>
        <Title style={s.title}>Откликайся на объявления!</Title>
        <View style={s.buttons}>
          <Button
            variant="primary"
            text="Хочу продолжить"
            onPress={() => navigation.navigate("Auth")}
          />
          <View style={s.skipBtn} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const s = StyleSheet.create({
  wrap: {
    paddingHorizontal: 8,
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: Dimensions.get("window").height - 47 - 34 - 44,
  },
  title: {
    marginTop: 400,
  },
  image: {
    marginTop: 7,
  },
  buttons: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  skipBtn: {
    marginTop: 8,
    height: 48,
  },
});
