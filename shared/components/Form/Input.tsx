import { FC } from "react";
import { TextInputProps } from "react-native";
import { Colors } from "constants/Colors";
import styled from "styled-components";
import { Caption_3 } from "shared/ui/Typography";

type InputProps = {
  error?: string;
} & TextInputProps;

export const Input: FC<InputProps> = ({ error, ...inputProps }) => {
  return (
    <>
      <InputField {...inputProps} />
      <SCaption_3>{error}</SCaption_3>
    </>
  );
};

const InputField = styled.TextInput`
  border-radius: 12px;
  background-color: ${Colors.Main.White};
  padding: 16px 12px;
  font-family: "SuisseIntlRegular";
  font-size: 15px;
  color: ${Colors.Main.Gray_3};
  width: 100%;
  align-self: stretch;
  background-color: ${Colors.Main.White_gray};
  border: ${(props) =>
    props.error
      ? `1px solid ${Colors.Accent.Red}`
      : `1px solid ${Colors.Main.White_gray}`};

  ::placeholder {
    color: ${Colors.Main.Gray_1};
  }
`;

const SCaption_3 = styled(Caption_3)`
  margin-top: 4px;
  color: ${Colors.Accent.Red};
`;
