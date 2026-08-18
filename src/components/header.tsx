import { useContext } from "react";
import TabContext from "../providers/tab.context";
import SvgStarComponent from "./svg-star";

function HeaderComponent() {
  const { tab } = useContext(TabContext);
  return (
    <div className="px-5 pt-3 pb-4 relative z-10">
      <div className="flex justify-center">
        <div>
          <div className="flex flex-row align-middle items-center  justify-center gap-1.5 mb-1">
            <SvgStarComponent size={10} color="#FF3EB5" />
            <p className="text-lol-pink">Casa de muñecas de Isis</p>
            <SvgStarComponent size={10} color="#8B35FF" />
          </div>
          <p className="font-fredoka text-center font-semibold leading-tight text-3xl bg-gradient-to-r from-lol-pink to-lol-purple bg-clip-text text-transparent">
            {tab === "lighting" ? "Luces ✦" : "Ascensor ⋮"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
