import * as React from "react";
import { render } from "react-dom";
import { GridContainer } from "./styles.css";
import Board from "./Board";
import { nest } from "./utils";
import { BoardProvider } from "./state/board";

function App() {
  return (
    <GridContainer>
      <Board />
    </GridContainer>
  );
}

const rootElement = document.getElementById("root");
render(nest(BoardProvider, App), rootElement);
