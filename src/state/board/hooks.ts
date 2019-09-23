import { useReducer, useCallback } from "react";
import { boardReducer, defaultBoard } from "./reducer";
import { BoardActions, SquareColors } from "./constants";
import { Action } from "./reducer";

type Parameters<T> = T extends (...args: infer T) => any ? T : never;

type IAction = (
  ...args: any
) => {
  [key: string]: any;
  type: string;
};

const actionsDict = {
  markBlue: (x: number, y: number) => ({
    type: BoardActions.MARK_COLOR,
    coordinates: { x, y },
    color: SquareColors.BLUE
  })
};

const makeDispatchableActions = (
  dispatch: React.Dispatch<any>,
  actions: { [key: string]: IAction }
) => {
  const dispatchAbleActions: { [key: string]: any } = {};

  for (const key in actions) {
    const func = actions[key];
    const newFunc = (...args: Parameters<typeof func>) =>
      dispatch(func(...args));
    dispatchAbleActions[key] = newFunc;
  }

  return dispatchAbleActions;
};

const makeActions = (dispatch: React.Dispatch<Action>) => ({
  markBlue: (x: number, y: number) =>
    dispatch({
      type: BoardActions.MARK_COLOR,
      coordinates: { x, y },
      color: SquareColors.BLUE
    })
});

export const useBoard = () => {
  const [board, dispatch] = useReducer(boardReducer, defaultBoard);
  const actions = makeActions(dispatch);
  const actions2 = makeDispatchableActions(dispatch, actionsDict);
  console.log(actions2)
  return { board, ...actions };
};
