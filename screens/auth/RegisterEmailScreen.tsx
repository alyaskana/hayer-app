import {
  useForm,
  Controller,
  SubmitHandler,
  ChangeHandler,
} from "react-hook-form";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Form, Label, Input } from "shared/components/Form";
import { Button } from "shared/components";

export const RegisterEmailScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{ email: string }>({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<{ email: string }> = ({ email }) => {
    navigation.navigate("SignUpCode", { email });
  };

  const onEmailChange = (value) => {
    setValue("email", value);
  };

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 8, paddingTop: 5 }}>
        <Form>
          <Label title="Почта" />
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Это обязательное поле",
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                textContentType="emailAddress"
                placeholder="example@edu.hse.ru"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onBlur={onBlur}
                onChangeText={(e) => onEmailChange(e)}
                hint="Отправим код для подтверждения почты. Присылать рекламу не будем"
                error={errors?.email?.message}
              />
            )}
          />
        </Form>
        <Button
          text="Получить код"
          variant="primary"
          onPress={handleSubmit(onSubmit)}
          style={{ marginTop: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};
