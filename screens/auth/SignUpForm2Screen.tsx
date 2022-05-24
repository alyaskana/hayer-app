import { SafeAreaView, View, ScrollView, TouchableOpacity } from "react-native";

import { Button } from "shared/components";
import { FieldSet, Form, Input, Label } from "shared/components/Form";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuth } from "shared/hooks/useAuth";
import { Text } from "shared/ui/Typography";
import { Colors } from "constants/Colors";
import { Modalize } from "react-native-modalize";
import { useRef } from "react";
import { Modal } from "shared/components/Modal/Modal";

type FormInputs = {
  avatar?: string;
  eduProgram?: string;
  course?: string;
  instagram?: string;
  link?: string;
  about?: string;
};

export const SignUpForm2Screen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormInputs> = ({}) => {
    navigation.navigate("SignUpForm2");
  };

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <SafeAreaView>
      <Modal
        modalRef={modalizeRef}
        headerTitle="Выбери курс"
        headerSubtitle="Отсчитывая от 1 курса бакалавриата"
      />
      <ScrollView>
        <View style={{ paddingHorizontal: 8, paddingTop: 5 }}>
          <Form>
            <Text style={{ color: Colors.Main.Gray_2, marginBottom: 32 }}>
              Заполнение этих данных необязательно. Если их добавишь — заказчик
              с большей вероятностью выберет именно тебя
            </Text>
            <FieldSet>
              <Label title="Аватарка" />
              <TouchableOpacity onPress={onOpen}>
                <Text>Open the modal</Text>
              </TouchableOpacity>

              {/* <Controller
                control={control}
                name="avatar"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                  autoCorrect={false}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={errors?.firstName?.message}
                  />
                  )}
                /> */}
            </FieldSet>
            <FieldSet>
              <Label title="Образовательная программа" />
              <Controller
                control={control}
                name="eduProgram"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                )}
              />
            </FieldSet>
            <FieldSet>
              <Label title="Курс" />
              <Controller
                control={control}
                name="course"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                )}
              />
            </FieldSet>
            <FieldSet>
              <Label title="Instagram" />
              <Controller
                control={control}
                name="instagram"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    placeholder="@username"
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                )}
              />
            </FieldSet>
            <FieldSet>
              <Label title="Ссылка на твое портфолио, тг-канал или что-то еще" />
              <Controller
                control={control}
                name="link"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                )}
              />
            </FieldSet>
            <Label title="Личное описание" />
            <Controller
              control={control}
              name="about"
              render={({ field: { onChange, value, onBlur } }) => (
                <Input value={value} onBlur={onBlur} onChangeText={onChange} />
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
      </ScrollView>
    </SafeAreaView>
  );
};
