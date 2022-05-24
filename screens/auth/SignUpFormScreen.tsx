import { SafeAreaView, View } from "react-native";
import { Button } from "shared/components";
import { FieldSet, Form, Input, Label } from "shared/components/Form";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuth } from "shared/hooks/useAuth";

type FormInputs = {
  firstName: string;
  lastName: string;
  telegram: string;
  password: string;
};

export const SignUpFormScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: "onBlur",
    defaultValues: {
      firstName: "Test",
      lastName: "User",
      telegram: "test",
      password: "123456",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = ({}) => {
    navigation.navigate("SignUpForm2");
  };

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 8, paddingTop: 5 }}>
        <Form>
          <FieldSet>
            <Label title="Имя" />
            <Controller
              control={control}
              name="firstName"
              rules={{
                required: "Это обязательное поле",
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  autoCorrect={false}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.firstName?.message}
                />
              )}
            />
          </FieldSet>
          <FieldSet>
            <Label title="Фамилия" />
            <Controller
              control={control}
              name="lastName"
              rules={{
                required: "Это обязательное поле",
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  autoCorrect={false}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.firstName?.message}
                />
              )}
            />
          </FieldSet>
          <FieldSet>
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
          </FieldSet>
          <Label title="Telegram" />
          <Controller
            control={control}
            name="telegram"
            rules={{
              required: "Это обязательное поле",
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <Input
                placeholder="@username"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                error={errors?.password?.message}
                hint="Заказчики с исполнителями связываются через телеграм"
              />
            )}
          />
        </Form>
        <Button
          text="Дальше"
          variant="primary"
          onPress={handleSubmit(onSubmit)}
          style={{ marginTop: 20 }}
          // disabled={!isValid}
        />
      </View>
    </SafeAreaView>
  );
};
