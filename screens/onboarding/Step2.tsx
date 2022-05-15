import { FC } from "react";
import { View, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import { Button } from "shared/components/Button/Button";
import Image from "assets/images/onboarding/step2.svg";

export const Step2Screen: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={s.wrap}>
        <Image style={s.image} />
        <View style={s.buttons}>
          <Button
            variant="primary"
            text="Круто!"
            onPress={() => navigation.navigate("OnboardingStep3")}
          />
          <Button variant="secondary" text="Пропустить" style={s.skipBtn} />
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
  },
});
