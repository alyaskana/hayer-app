import { FC } from "react";
import styled from "styled-components/native";
import { Pressable, PressableProps } from "react-native";
import { Colors } from "constants/Colors";
import { Caption_1, Headline } from "shared/ui/Typography";

type ButtonProps = {
  text: string;
  variant: "primary" | "secondary";
} & PressableProps;

export const Button: FC<ButtonProps> = ({ text, variant, ...buttonProps }) => {
  return (
    <Pressable style={{ alignSelf: "stretch" }} {...buttonProps}>
      {({ pressed }) => {
        return (
          <>
            {variant == "primary" && (
              <PrimaryButton pressed={pressed} disabled={buttonProps.disabled}>
                <SHeadline>{text}</SHeadline>
              </PrimaryButton>
            )}
            {variant == "secondary" && (
              <SecondaryButton
                pressed={pressed}
                disabled={buttonProps.disabled}
              >
                <SCaption_1>{text}</SCaption_1>
              </SecondaryButton>
            )}
          </>
        );
      }}
    </Pressable>
  );
};

const PrimaryButton = styled.View`
  border-radius: 90px;
  padding: 30px;
  background-color: ${(props) =>
    props.disabled
      ? Colors.Main.Gray_1
      : props.pressed
      ? Colors.Main.PrimaryHover
      : Colors.Main.Primary};
`;

const SecondaryButton = styled.View`
  border-radius: 90px;
  padding: 16px;
  background-color: ${Colors.Main.White_gray};
`;

const SHeadline = styled(Headline)`
  color: ${Colors.Main.White};
  text-align: center;
`;

const SCaption_1 = styled(Caption_1)`
  color: ${(props) => (props.danger ? Colors.Accent.Red : Colors.Main.Primary)};
  text-align: center;
`;
