import { FC } from "react";
import { TextInputProps } from "react-native";
import { Colors } from "constants/Colors";
import styled from "styled-components";
import { Caption_3 } from "shared/ui/Typography";

export type TextareaProps = {
  hint?: string;
  error?: string;
} & TextInputProps;

export const Textarea: FC<TextareaProps> = ({ hint, error, ...inputProps }) => {
  return (
    <>
      <TextareaField multiline={true} {...inputProps} />
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        hint && <HintMessage>{hint}</HintMessage>
      )}
    </>
  );
};

const TextareaField = styled.TextInput`
  border-radius: 12px;
  background-color: ${Colors.Main.White};
  padding: 16px 12px;
  font-family: "SuisseIntlRegular";
  font-size: 15px;
  color: ${Colors.Main.Gray_3};
  width: 100%;
  height: 136px;
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

const HintMessage = styled(Caption_3)`
  margin-top: 8px;
  color: ${Colors.Main.Gray_2};
`;

const ErrorMessage = styled(Caption_3)`
  margin-top: 4px;
  color: ${Colors.Accent.Red};
`;
