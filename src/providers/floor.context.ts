import { createContext } from "react";


const FloorContext = createContext({
  floor: 0,
  setFloor: (value: number) => {
    console.log("floor " + value);
  },
});

export default FloorContext;
