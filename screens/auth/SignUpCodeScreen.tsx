import { useState } from "react";
import { View } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTimer } from "react-timer-hook";
import { Form, Label, Input } from "shared/components/Form";
import { Button } from "shared/components";

export const SignUpCodeScreen = ({
  route: {
    params: { email },
  },
  navigation,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ code: string }>({
    mode: "onBlur",
    defaultValues: {
      code: "",
    },
  });

  const [sendCodeActive, setSendCodeActive] = useState(false);
  const TIMER = 60; // seconds

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + TIMER);

  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => setSendCodeActive(true),
  });

  const SendCodeBtnText = () => {
    const timer = ` (${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")})`;
    if (sendCodeActive) {
      return "Отправить код повторно";
    } else {
      return "Отправить код повторно" + timer;
    }
  };

  const onSendCode = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + TIMER);
    restart(time);
    setSendCodeActive(false);
  };

  const onNextButtonClick = () => {
    navigation.navigate("SuccessCode");
  };

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 8, paddingTop: 5 }}>
        <Form>
          <Label title="Код" />
          <Controller
            control={control}
            name="code"
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                keyboardType="number-pad"
                // placeholder="••••••"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                hint={`Мы отправили код на ${email}, обычно код приходит в течение 1 минуты`}
                error={errors?.code?.message}
              />
            )}
          />
        </Form>
        <Button
          text={SendCodeBtnText()}
          variant="secondary"
          onPress={onSendCode}
          style={{ marginTop: 20 }}
          disabled={!sendCodeActive}
        />

        {/* TODO: удалить потом */}
        <Button
          text={`Next`}
          variant="primary"
          onPress={onNextButtonClick}
          style={{ marginTop: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};
