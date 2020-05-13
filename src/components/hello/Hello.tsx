import React, { ReactNode, SFC } from "react";
import styled from "styled-components/native";

const StyledHello = styled.Text<{ size: number; isBold: boolean }>`
  ${({ theme, size, isBold }) => {
    // const {colorSet:{text}} = theme;
    return `
    font-size:${size}px;
    ${isBold && "font-weight: bold;"}
`;
  }}
`;

interface Props {
  size?: number;
  isBold?: boolean;
  children?: ReactNode;
}
const Hello: SFC<Props> = ({ size = 16, isBold = false, children }) => {
  return (
    <StyledHello {...{ size, isBold }}>
      {"Hello!! "}
      {children}
    </StyledHello>
  );
};

export default Hello;
