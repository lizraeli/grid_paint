import React, { FunctionComponent, useContext, createContext } from "react";
import { useBoard } from "./hooks";

type BoardValues = ReturnType<typeof useBoard>;

const BoardContext = createContext<BoardValues>({
  board: [],
  markBlue: () => {
    throw new Error("markBlue called before it was initialized");
  }
});

export const BoardProvider: FunctionComponent = ({ children }) => {
  return (
    <BoardContext.Provider value={useBoard()}>{children}</BoardContext.Provider>
  );
};

export const useBoardContext = () => useContext(BoardContext);
