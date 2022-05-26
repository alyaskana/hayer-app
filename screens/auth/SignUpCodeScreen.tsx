import { useState, useEffect } from "react";
import { View } from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTimer } from "react-timer-hook";
import { Form, Label, Input } from "shared/components/Form";
import { Button } from "shared/components";
import { authFetcher } from "shared/api";

export const SignUpCodeScreen = ({
  route: {
    params: { email, id },
  },
  navigation,
}) => {
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<{ code: string }>({
    mode: "onBlur",
    defaultValues: {
      code: "",
    },
  });

  const [sendCodeActive, setSendCodeActive] = useState(false);
  const TIMER = 60; // seconds

  const onSubmit: SubmitHandler<{ code?: string }> = (data) => {
    authFetcher
      .verifyEmail(id, data.code)
      .then(() => navigation.navigate("SuccessCode", { id }))
      .catch((err) => {
        setError("code", {
          type: "value",
          // message: err.response.data.error, // это текст ошибки с бэка
          message: "Не тот :( Проверь все символы",
        });
      });
  };

  useEffect(() => {
    const subscription = watch((data) => {
      if (data.code.length == 6) {
        handleSubmit(onSubmit(data));
      }
    });
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

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

  /* TODO: удалить потом */

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
