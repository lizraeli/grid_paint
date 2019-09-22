import styled from "styled-components";
import { SquareColors } from "./state/board";

export const Fill = styled.div`
  width: 100%;
  height: 100%;
  ${({ color }: { color: SquareColors }) =>
    color === SquareColors.NONE &&
    `
  background: gray
`}

  ${({ color }: { color: SquareColors }) =>
    color !== SquareColors.NONE &&
    `
  background: ${color}
`}
`;

export const GridContainer = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
`;
