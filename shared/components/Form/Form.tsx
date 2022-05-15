import { Colors } from "constants/Colors";
import styled from "styled-components";

export const FieldSet = styled.View`
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Form = styled.View`
  border-radius: 20px;
  background-color: ${Colors.Main.White};
  padding: 28px 12px;
`;
