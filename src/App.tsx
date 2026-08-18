import { useState } from "react";
import "./App.css";
import FloorsView from "./components/floors/floors-view";
import GlitterBg from "./components/glitter-bg";
import GradientBackgroundComponent from "./components/gradient";
import HeaderComponent from "./components/header";
import LightingView from "./components/lighting/lighting-view";
import NavBar from "./components/nav-bar";
import TabContext, { type TabOptionType } from "./providers/tab.context";
import FloorContext from "./providers/floor.context";
import PoolPartyContext from "./providers/pool-party.context";

function App() {
  const [tab, setTab] = useState<TabOptionType>("lighting");
  const [floor, setFloor] = useState(0);
  const [bewitched, setBewitched] = useState(Boolean);

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      <FloorContext.Provider value={{ floor, setFloor }}>
        <PoolPartyContext.Provider value={{ poolParty: bewitched, setPoolParty: setBewitched }}>
          <GradientBackgroundComponent>
            <div className="h-screen flex flex-col shrink-0 p-4 min-w-full font-fredoka">
              <div className="relative top-0 left-0">
                <HeaderComponent />
              </div>
              {/* switch view ligting / floors */}
              <div className="w-full items-center flex-1 min-h-0 overflow-y-auto ">
                {tab === "lighting" ? <LightingView /> : <FloorsView />}
              </div>
              <div className="shrink-0">
                <NavBar />
              </div>
              <GlitterBg />
            </div>
          </GradientBackgroundComponent>
        </PoolPartyContext.Provider>
      </FloorContext.Provider>
    </TabContext.Provider>
  );
}

export default App;
