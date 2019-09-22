import React from "react";

export const range = (to: number) => {
  let arr = [];
  for (let i = 0; i < to; i++) {
    arr.push(i);
  }
  return arr;
};


type Comp = React.FunctionComponent<any> | React.ComponentClass<any, any>;

export const nest = (...components: Comp[]) => {
  const reversed = [...components].reverse();

  const [first, ...rest] = reversed;

  let elem = React.createElement(first);
  for (const comp of rest) {
    elem = React.createElement(comp, null, elem);
  }

  return elem;
};
