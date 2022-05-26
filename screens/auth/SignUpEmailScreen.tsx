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
import { authFetcher } from "shared/api";

export const SignUpEmailScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<{ email: string }>({
    mode: "onBlur",
    defaultValues: {
      email: "test@edu.hse.ru",
    },
  });

  const onSubmit: SubmitHandler<{ email: string }> = ({ email }) => {
    authFetcher
      .signup(email)
      .then(({ data }) =>
        navigation.navigate("SignUpCode", { email, id: data.id })
      )
      .catch((err) => {
        setError("email", {
          type: "value",
          message: err.response.data.error, // это текст ошибки с бэка
          // message: "Не тот :( Проверь все символы",
        });
      });
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
              pattern: {
                value: /^[\w-\.]+@edu.hse.ru$/,
                message: "Кажется, это не вышкинская почта",
              },
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                textContentType="emailAddress"
                placeholder="example@edu.hse.ru"
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onBlur={onBlur}
                onChangeText={(e) => onChange(() => onEmailChange(e))}
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
