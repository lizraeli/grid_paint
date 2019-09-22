import * as React from "react";
import { Cell } from "styled-css-grid";
import { SquareColors } from "./state/board";
import { Fill } from "./styles.css";

interface BoardSquareProps {
  color: SquareColors;
  onClick: () => void;
  onHover: () => void;
}

const BoardSquare: React.FunctionComponent<BoardSquareProps> = ({
  color,
  onClick,
  onHover
}) => {
  return (
    <Cell onClick={onClick} onMouseOver={onHover}>
      <Fill color={color} />
    </Cell>
  );
};

export default BoardSquare;
