import { createContext } from "react";

const BewitchedContext = createContext({
  bewitched: false,
  setBewitched: (value: boolean) => {
    console.log("bewitched " + value);
  },
});

export default BewitchedContext;
