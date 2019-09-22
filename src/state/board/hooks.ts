import { useReducer } from "react";
import { boardReducer, defaultBoard } from "./reducer";
import { BoardActions, SquareColors } from "./constants";
import { Dispatch, Action } from "./reducer";
import { all } from "q";

type Parameters<T> = T extends (...args: infer T) => any ? T : never;

type ActionDict = ({
  [key: string]: (
    ...args: any
  ) => {
    [key: string]: any;
    type: string;
  };
});


type IAction =  (
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

type ProduceConditionsMapper<T> = {
  [K in keyof T]: ((input: T[K]) => void) | Promise<T[K]>;
};

const makeDispatchableActions = <ActionNames extends string>(
  dispatch: React.Dispatch<any>,
  actions: {[K in ActionNames]: IAction}
) => {
    const dispatchAbleActions:  = {...actions}

    for (const key in actions){
      const func = actions[key]
      const newFunc = (...args: Parameters<typeof func>) => dispatch(func(...args))
      dispatchAbleActions[key] = newFunc
    }
  
  return dispatchAbleActions
}

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
  const actions2 = makeDispatchableActions<"markBlue">(dispatch, actionsDict);
  console.log(actions2);
  return { board, ...actions };
};
// type Keys = "name"
const exclamationAdder = <Keys extends string>(obj: {[k in Keys]: string}) => {
    // type K1 = keyof v
    const exclObj = {...obj}
    for (const key in obj){
      exclObj[key] = obj[key] + "!"
    }

  // const exclObj = Object.entries(obj).reduce(
  //   (newObj, [key, value]) => ({
  //     ...newObj,
  //     [key]: value + "!"
  //   }),
  //   {}
  // );
  return exclObj;
};

type Keys = 'name'

const obj = {
  name: "Lev"
}
const withExc = exclamationAdder<Keys>(obj);
console.log(withExc)
