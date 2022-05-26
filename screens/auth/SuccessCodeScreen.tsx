import { Colors } from "constants/Colors";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Button } from "shared/components";
import { Caption_1, Title } from "shared/ui/Typography";

export const SuccessCodeScreen = ({
  navigation,
  route: {
    params: { id },
  },
}) => {
  return (
    <SafeAreaView>
      <View style={s.wrap}>
        <Image
          source={require("assets/images/success_sasha.png")}
          style={s.image}
        />
        <Title style={s.title}>Почта подтверждена!</Title>
        <Caption_1 style={s.caption}>
          Осталось добавить немного информации о себе
        </Caption_1>
        <View style={s.buttons}>
          <Button
            text="Продолжить"
            variant="primary"
            onPress={() => navigation.navigate("SignUpForm", { id })}
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
    width: 179,
    height: 211,
    marginTop: 60,
  },
  title: {
    marginTop: 40,
    textAlign: "center",
  },
  caption: {
    marginTop: 8,
    textAlign: "center",
    color: Colors.Main.Gray_2,
    width: 310,
  },
  buttons: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
});
