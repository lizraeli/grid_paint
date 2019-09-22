import { range } from "../../utils";
import {BOARD_SIZE, BoardActions, SquareColors} from "./constants"

export interface Action {
  type: BoardActions;
  [key: string]: any;
}

export type Dispatch = React.Dispatch<Action>

export const defaultBoard = range(BOARD_SIZE).map(_ =>
  range(BOARD_SIZE).map(_ => SquareColors.NONE)
);

export const boardReducer = (
  state: SquareColors[][],
  action: Action
): SquareColors[][] => {
  switch (action.type) {
    case BoardActions.MARK_COLOR: {
      const { x, y } = action.coordinates;
      const newState = [...state];
      newState[y][x] = action.color;
      return newState;
    }

    default: {
      return state;
    }
  }
};
