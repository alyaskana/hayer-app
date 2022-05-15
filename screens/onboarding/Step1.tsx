import { FC } from "react";
import { View, SafeAreaView, Dimensions } from "react-native";
import { Title } from "shared/ui/Typography";
import { Button } from "shared/components/Button/Button";
import Image from "assets/images/onboarding/step1.svg";
import { StyleSheet } from "react-native";

export const Step1Screen: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={s.wrap}>
        <Image style={s.image} />
        <Title style={s.title}>
          Находи людей для выполнения учебных задач, работы или встреч
        </Title>
        <View style={s.buttons}>
          <Button
            variant="primary"
            text="Понятно! А что еще?"
            onPress={() => navigation.navigate("OnboardingStep2")}
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
    height: Dimensions.get("window").height - 47 - 34,
  },
  image: {
    marginTop: 45,
  },
  title: {
    textAlign: "center",
    marginTop: 30,
    paddingHorizontal: 12,
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
