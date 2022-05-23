import { FC } from "react";
import {
  View,
  SafeAreaView,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import { Title } from "shared/ui/Typography";
import { Button } from "shared/components/Button/Button";
import { Colors } from "constants/Colors";

export const Step1Screen: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={s.wrap}>
        <Image
          source={require("assets/images/onboarding/step1.png")}
          style={s.image}
        />
        <Title style={s.title}>
          Находи людей для выполнения учебных задач, работы или встреч
        </Title>
        <View style={s.buttons}>
          <View style={s.pagination}>
            <View style={s.circleActive} />
            <View style={s.circle} />
            <View style={s.circle} />
          </View>
          <Button
            variant="primary"
            text="Понятно! А что еще?"
            onPress={() => navigation.navigate("OnboardingStep2")}
          />
          <Button
            variant="secondary"
            text="Пропустить"
            style={s.skipBtn}
            onPress={() => navigation.navigate("Auth")}
          />
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
    marginTop: 55,
    width: 359,
    height: 340,
    resizeMode: "contain",
  },
  title: {
    textAlign: "center",
    marginTop: 4,
    paddingHorizontal: 12,
    height: 78,
  },
  buttons: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  pagination: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  circle: {
    marginHorizontal: 3,
    borderRadius: 8,
    width: 8,
    height: 8,
    backgroundColor: Colors.Main.Gray_1,
  },
  circleActive: {
    marginHorizontal: 3,
    borderRadius: 8,
    width: 8,
    height: 8,
    backgroundColor: Colors.Main.Gray_2,
  },
  skipBtn: {
    marginTop: 8,
  },
});
