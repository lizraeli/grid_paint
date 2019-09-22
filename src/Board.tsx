import React  from "react";
import { Grid } from "styled-css-grid";
import useMouseIsDown from "./useMouseIsDown";
import BoardSquare from "./BoardSquare";
import { useBoardContext, BOARD_SIZE } from "./state/board";

const Board: React.FunctionComponent = () => {
  const { mouseIsDown } = useMouseIsDown();
  const { board, markBlue } = useBoardContext();

  return (
    <Grid columns={BOARD_SIZE} gap="2px">
      {board.map((row, y) =>
        row.map((squareColor, x) => (
          <BoardSquare
            key={`${x}-${y}`}
            color={squareColor}
            onClick={() => markBlue(x, y)}
            onHover={() => {
              if (mouseIsDown) {
                markBlue(x, y);
              }
            }}
          />
        ))
      )}
    </Grid>
  );
};

export default Board;
