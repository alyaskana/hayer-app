import { SafeAreaView, View } from "react-native";

import { Button } from "shared/components";
import { FieldSet, Form, Input, Label } from "shared/components/Form";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuth } from "shared/hooks/useAuth";

type FormInputs = {
  email: string;
  password: string;
};

export const LoginScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: "onBlur",
    defaultValues: {
      email: "aabychkova_4@edu.hse.ru",
      password: "123456",
    },
  });
  const { token, login } = useAuth();
  console.log(token);

  const onSubmit: SubmitHandler<FormInputs> = ({ email, password }) => {
    login(email, password).then(() => {
      navigation.navigate("Home", { screen: "Feed" });
    });
  };

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 8, paddingTop: 5 }}>
        <Form>
          <FieldSet>
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
                  onChangeText={onChange}
                  error={errors?.email?.message}
                />
              )}
            />
          </FieldSet>
          <Label title="Пароль" />
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Это обязательное поле",
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                placeholder="••••••"
                secureTextEntry
                textContentType="password"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={errors?.password?.message}
              />
            )}
          />
        </Form>
        <Button
          text="Войти"
          variant="primary"
          onPress={handleSubmit(onSubmit)}
          style={{ marginTop: 20 }}
          // disabled={!isValid}
        />
        <Button
          style={{ marginTop: 8 }}
          variant="secondary"
          text="Восстановить пароль"
        />
      </View>
    </SafeAreaView>
  );
};
