import { FC } from "react";
import styled from "styled-components/native";
import { Pressable, PressableProps } from "react-native";
import { Colors } from "constants/Colors";
import { Caption_1, Headline } from "shared/ui/Typography";

type ButtonProps = {
  text: string;
  variant: "primary" | "secondary";
  danger?: boolean;
} & PressableProps;

export const Button: FC<ButtonProps> = ({
  text,
  variant,
  danger,
  ...buttonProps
}) => {
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
                <SCaption_1 disabled={buttonProps.disabled} danger={danger}>
                  {text}
                </SCaption_1>
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
  color: ${(props) =>
    props.disabled
      ? Colors.Main.Gray_2
      : props.danger
      ? Colors.Accent.Red
      : Colors.Main.Primary};
  text-align: center;
`;
