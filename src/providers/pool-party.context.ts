import { createContext } from "react";

const PoolPartyContext = createContext({
  poolParty: false,
  setPoolParty: (value: boolean) => {
    console.log("pool party " + value);
  },
});

export default PoolPartyContext;
