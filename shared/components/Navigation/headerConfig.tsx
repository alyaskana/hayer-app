import { View } from "react-native";
import BackIcon from "assets/images/back_button.svg";
import { Colors } from "constants/Colors";

export const headerConfig = {
  headerBackImage: () => (
    <View
      style={{
        paddingLeft: 8,
        paddingBottom: 2,
      }}
    >
      <BackIcon width={64} height={40} />
    </View>
  ),
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: Colors.Main.White_gray,
  },
  headerShadowVisible: false,
  headerTitleStyle: {
    fontFamily: "SuisseIntlSemiBold",
    fontSize: 18,
    color: Colors.Main.Gray_3,
  },
};
