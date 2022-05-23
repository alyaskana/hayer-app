import { Colors } from "constants/Colors";
import { FC } from "react";
import {
  Pressable,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Button } from "shared/components";
import { Caption_1 } from "shared/ui/Typography";

export const AuthScreen: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={s.wrap}>
        <Image
          source={require("assets/images/auth_image.png")}
          style={s.image}
        />
        <View style={s.buttons}>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Caption_1 style={s.loginText}>
              Уже зарегистрированы?{" "}
              <Caption_1 style={s.loginButton}>Войти</Caption_1>
            </Caption_1>
          </Pressable>
          <Button
            style={s.signUp}
            text="Зарегистрироваться"
            variant="primary"
            onPress={() => navigation.navigate("SignUp")}
          />
          <Button
            variant="secondary"
            text="Пропустить"
            style={s.skipBtn}
            onPress={() => navigation.navigate("Home", { screen: "Feed" })}
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
  buttons: {
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  loginText: {
    color: Colors.Main.Gray_2,
    textAlign: "center",
  },
  loginButton: {
    color: Colors.Main.Primary,
  },
  signUp: {
    marginTop: 24,
    width: "100%",
  },
  skipBtn: {
    marginTop: 8,
  },
});
