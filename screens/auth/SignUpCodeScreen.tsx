import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Form, Label, Input } from "shared/components/Form";
import { Button } from "shared/components";
import { useState } from "react";

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

  const [counter, setCounter] = useState("1:00");

  const onSubmit: SubmitHandler<{ code: string }> = () => {
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
                placeholder="••••"
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
          text={`Отправить код повторно (${counter})`}
          variant="secondary"
          onPress={handleSubmit(onSubmit)}
          style={{ marginTop: 20 }}
          // disabled
        />
      </View>
    </SafeAreaView>
  );
};
