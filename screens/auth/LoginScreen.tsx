import { FC } from "react";
import { SafeAreaView, View, Text } from "react-native";

import { Button } from "shared/components";
import { FieldSet, Form, Input, Label } from "shared/components/Form";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuth } from "shared/hooks/useAuth";

type FormInputs = {
  email: string;
  password: string;
};

export const LoginScreen: FC<{ navigation: any }> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
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
                  placeholder="Enter your email here"
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
              required: "Пароль должен содержать минимум 6 символов",
              minLength: {
                value: 6,
                message: "Пароль должен содержать минимум 6 символов",
              },
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
