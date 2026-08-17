import { useContext } from "react";
import TabContext from "../providers/tab.context";

function NavBar() {
  const { tab, setTab } = useContext(TabContext);
  return (
    <div className="relative z-10 w-full py-3 backdrop-blur-md border-t border-lol-pink/15">
      <div className="grid grid-cols-2 gap-2">
        {(["lighting", "elevator"] as const).map((t) => {
          const active = tab === t;
          const label = t === "lighting" ? "✦ Luces" : "✦ Ascensor";
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`py-3 rounded-2xl transition-all duration-200 active:scale-95 ${active ? "bg-gradient-to-br from-lol-pink to-lol-purple shadow-[0_0_20px_0_rgba(255,62,181,0.4)] " : "bg-white/5  border border-solid border-white/10"}`}
            >
              <p
                className={`font-semibold text-center ${active ? "text-lol-black" : "text-lol-lavender"}`}
              >
                {label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default NavBar;
