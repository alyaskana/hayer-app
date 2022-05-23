import { FC } from "react";
import {
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import { Button } from "shared/components/Button/Button";
import { Colors } from "constants/Colors";
import { Title } from "shared/ui/Typography";

export const Step2Screen: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={s.wrap}>
        <Image
          source={require("assets/images/onboarding/step2.png")}
          style={s.image}
        />
        <View style={s.titleWrap}>
          <Title style={s.title}>
            Специалисты напишут сами, останется только выбрать
          </Title>
        </View>
        <View style={s.buttons}>
          <View style={s.pagination}>
            <View style={s.circle} />
            <View style={s.circleActive} />
            <View style={s.circle} />
          </View>
          <Button
            variant="primary"
            text="Круто!"
            onPress={() => navigation.navigate("OnboardingStep3")}
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
    height: Dimensions.get("window").height - 47 - 34 - 44,
  },
  image: {
    marginTop: 5,
    width: 359,
    height: 340,
    resizeMode: "contain",
  },
  titleWrap: {
    height: 78,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 4,
    paddingHorizontal: 12,
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
