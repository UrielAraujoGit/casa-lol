import { useState } from "react";
import "./App.css";
import FloorsView from "./components/floors/floors-view";
import GlitterBg from "./components/glitter-bag";
import GradientBackgroundComponent from "./components/gradient";
import HeaderComponent from "./components/header";
import LightingView from "./components/lighting/lighting-view";
import NavBar from "./components/nav-bar";
import TabContext, { type TabOptionType } from "./providers/tab.context";

function App() {
  const [tab, setTab] = useState<TabOptionType>("lighting");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      <GradientBackgroundComponent>
        <div className="min-h-screen flex-1 -center  p-4 min-w-full">
          <div>
            <HeaderComponent />
          </div>
          {/* switch view ligting / floors */}
          <div className="w-full items-center">
            {tab === "lighting" ? <LightingView /> : <FloorsView />}
          </div>
          <NavBar />
          <GlitterBg />
        </div>
      </GradientBackgroundComponent>
    </TabContext.Provider>
  );
}

export default App;
