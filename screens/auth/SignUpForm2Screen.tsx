import { SafeAreaView, View, ScrollView, TouchableOpacity } from "react-native";

import { Button } from "shared/components";
import {
  FieldSet,
  Form,
  Input,
  Label,
  ListItemRadio,
  Select,
  Textarea,
} from "shared/components/Form";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useAuth } from "shared/hooks/useAuth";
import { Text } from "shared/ui/Typography";
import { Colors } from "constants/Colors";
import { Modalize } from "react-native-modalize";
import { useRef } from "react";
import { Modal } from "shared/components/Modal/Modal";
import { eduPrograms } from "mocks/eduPrograms";

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
    setValue,
    getValues,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    mode: "onBlur",
  });
  const modalizeRefCourse = useRef<Modalize>(null);
  const modalizeRefEdu = useRef<Modalize>(null);

  const onSubmit: SubmitHandler<FormInputs> = ({}) => {
    navigation.navigate("SignUpForm2");
  };

  const onOpen = (ref) => {
    ref.current?.open();
  };

  const listItem = ({ item, field, ref, key }) => (
    <TouchableOpacity
      key={key}
      onPress={() => {
        setValue(field, item);
        ref.current?.close();
      }}
    >
      <ListItemRadio title={item} isSelected={getValues(field) == item} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Modal
        modalRef={modalizeRefCourse}
        headerTitle="Выбери курс"
        headerSubtitle="Отсчитывая от 1 курса бакалавриата"
        flatListProps={{
          showsVerticalScrollIndicator: false,
          data: ["1", "2", "3", "4", "5", "6", "7", "8"],
          renderItem: ({ item, index }) =>
            listItem({
              item,
              field: "course",
              ref: modalizeRefCourse,
              key: index,
            }),
          ItemSeparatorComponent: () => <View style={{ height: 8 }} />,
          ListFooterComponent: <View style={{ height: 24 }} />,
        }}
      ></Modal>
      <Modal
        modalRef={modalizeRefEdu}
        headerTitle="Выбери образовательную программу"
        flatListProps={{
          showsVerticalScrollIndicator: false,
          data: eduPrograms.sort(),
          renderItem: ({ item, index }) =>
            listItem({
              item,
              field: "eduProgram",
              ref: modalizeRefEdu,
              key: index,
            }),
          ItemSeparatorComponent: () => <View style={{ height: 8 }} />,
          ListFooterComponent: <View style={{ height: 24 }} />,
        }}
      ></Modal>

      <ScrollView>
        <View style={{ paddingHorizontal: 8, paddingTop: 5 }}>
          <Form>
            <Text style={{ color: Colors.Main.Gray_2, marginBottom: 32 }}>
              Заполнение этих данных необязательно. Если их добавишь — заказчик
              с большей вероятностью выберет именно тебя
            </Text>
            <FieldSet>
              <Label title="Аватарка" />
            </FieldSet>
            <FieldSet>
              <Label title="Образовательная программа" />
              <Controller
                control={control}
                name="eduProgram"
                render={({ field: { value } }) => (
                  <Select
                    onPress={() => onOpen(modalizeRefEdu)}
                    value={value}
                    placeholder="Выбери ОП"
                  />
                )}
              />
            </FieldSet>
            <FieldSet>
              <Label title="Курс" />
              <Controller
                control={control}
                name="course"
                render={({ field: { value } }) => (
                  <Select
                    onPress={() => onOpen(modalizeRefCourse)}
                    value={value}
                    placeholder="Выбери курс"
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
                <Textarea
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder="Расскажи пару слов о себе. Что умеешь, чем увлекаешься, что любишь?"
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
      </ScrollView>
    </SafeAreaView>
  );
};
