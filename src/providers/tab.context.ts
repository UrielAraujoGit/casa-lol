import { createContext } from "react";

export type TabOptionType = "lighting" | "elevator";

const TabContext = createContext({ tab: "lighting", setTab: (value: TabOptionType) => { } });

export default TabContext