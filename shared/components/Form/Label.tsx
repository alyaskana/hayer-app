import { Colors } from "constants/Colors";
import { FC } from "react";
import { Caption_2 } from "shared/ui/Typography";
import styled from "styled-components";

type LabelProps = {
  title: string;
  hint?: string;
};

export const Label: FC<LabelProps> = ({ title, hint }) => {
  return (
    <Wrap>
      <Caption_2>{title}</Caption_2>
      {hint && (
        <Caption_2 style={{ color: Colors.Main.Gray_1 }}> {hint}</Caption_2>
      )}
    </Wrap>
  );
};

const Wrap = styled.Text`
  margin-bottom: 8px;
`;
