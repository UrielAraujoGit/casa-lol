import { useContext, useState } from "react";
import { HOUSE_FLOORS } from "../constants/house-floors";
import {
  ChevronUp,
  ChevronDown,
  DoorOpen,
  DoorClosed,
  Diamond,
  ArrowUpDown,
} from "lucide-react";
import { setApiFloor } from "../../api/api.service";
import FloorContext from "../../providers/floor.context";

function FloorsView() {
  const { floor, setFloor } = useContext(FloorContext);
  const [target, setTarget] = useState<number | null>(null);
  const [moving, setMoving] = useState(false);

  const callFloor = async (floorId: number) => {
    if (moving || floorId === floor) return;
    setTarget(floorId);
    setMoving(true);

    try {
      const response_status = await setApiFloor(floorId);
      if (response_status === 200) {
        setFloor(floorId);
        setTarget(null);
        setMoving(false);
      } else {
        throw new Error("status is not 200!");
      }
    } catch (e) {
      console.error("Error al mover el ascensor", e);
      setTarget(null);
      setMoving(false);
    }
  };

  const elevatorPct = (floor / (HOUSE_FLOORS.length - 1)) * 100;
  const currentFloor = HOUSE_FLOORS.find((f) => f.id === floor)!;

  return (
    <div className="flex flex-col gap-4 px-4 pb-6">
      {/* Status */}
      <div className="rounded-3xl p-5 relative overflow-hidden bg-gradient-to-br from-lol-blue to-lol-darkblue border border-solid border-lol-purple/25 shadow-[0_0_32px_0_theme(colors.lol-purple/15%)]">
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full pointer-events-none grad bg-[radial-gradient(circle,rgba(255,62,181,0.12)_0%,transparent_70%)] -translate-x-1/3 -translate-y-2/5" />
        <div className="flex flex-row items-end justify-between relative">
          <div>
            <p
              className="text-sm uppercase tracking-widest mb-1 text-lol-lavender"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Piso actual
            </p>
            <div className="flex flex-row items-center gap-3">
              <p className="font-fredoka font-bold text-5xl leading-none bg-gradient-to-br from-lol-pink to-lol-purple bg-clip-text text-transparent">
                {currentFloor.short}
              </p>
              {moving && (
                <div className="flex flex-col gap-1">
                  {target !== null && target > floor ? (
                    <ChevronUp
                      className="w-5 h-5"
                      style={{
                        color: "#FF3EB5",
                        filter: "drop-shadow(0 0 6px #FF3EB5)",
                      }}
                    />
                  ) : (
                    <ChevronDown
                      className="w-5 h-5"
                      style={{
                        color: "#FF3EB5",
                        filter: "drop-shadow(0 0 6px #FF3EB5)",
                      }}
                    />
                  )}
                </div>
              )}
            </div>
            <p
              className={`text-sm mt-1 font-nunito ${moving ? "text-lol-pink" : "text-lol-lavender"}`}
            >
              {moving
                ? `✦ Ir a ${HOUSE_FLOORS.find((f) => f.id === target)?.label}…`
                : currentFloor.label}
            </p>
          </div>

          {/* Door button */}
          <button
            disabled={moving}
            className="flex flex-col items-center gap-1.5 transition-all duration-150 active:scale-95 disabled:opacity-30"
            aria-label={moving ? "Puerta cerrada" : "Puerta abierta"}
          >
            <div
              className={
                "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border border-solid" +
                moving
                  ? "bg-white/10 text-lol-lavender border-white/10"
                  : "bg-lol-lightblue opacity-15 text-lol-lightblue border-lol-lightblue/40"
              }
              style={{
                boxShadow: moving ? "none" : "0 0 16px 0 rgba(0,220,255,0.4)",
              }}
            >
              {moving ? (
                <DoorClosed className="w-5 h-5" />
              ) : (
                <DoorOpen className="w-5 h-5" />
              )}
            </div>
            <p
              className={
                "text-xs uppercase tracking-widest " + moving
                  ? "text-lol-lavender"
                  : "text-lol-lightblue"
              }
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {moving ? "Moviendo" : "Disponible"}
            </p>
          </button>
        </div>
      </div>

      {/* Shaft + Floor Buttons */}
      <div className="flex flex-row gap-3">
        {/* Shaft visualizer */}
        <div className="flex flex-col items-center justify-between py-1 w-12 shrink-0">
          <Diamond size={8} color="#8B35FF" />
          <div className="relative flex-1 my-1 w-4 rounded-full bg-white/5">
            <p
              className={`absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full transition-all duration-700 ease-in-out flex items-center justify-center  bg-gradient-to-br from-lol-pink to-lol-purple shadow-[0_0_18px_4px] shadow-lol-pink/60`}
              style={{
                bottom: `calc(${elevatorPct}% - ${elevatorPct * 0.28}px`,
              }}
            >
              ✦
            </p>
            {HOUSE_FLOORS.map((f) => (
              <div
                key={f.id}
                className="absolute left-1/2 -translate-x-1/2 w-2 h-px bg-white/15"
                style={{
                  bottom: `${(f.id / (HOUSE_FLOORS.length - 1)) * 100}%`,
                }}
              />
            ))}
          </div>
          <Diamond size={8} color="#FF3EB5" />
        </div>

        {/* Floor buttons */}
        <div className="flex flex-col gap-2 flex-1">
          {HOUSE_FLOORS.map((item) => {
            const isHere = floor === item.id;
            const isTarget = target === item.id;
            return (
              <button
                key={item.id}
                onClick={() => callFloor(item.id)}
                disabled={moving && !isTarget}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left transition-all duration-200 active:scale-[0.98] disabled:opacity-40 border border-solid ${isHere ? "border-lol-pink/40" : isTarget ? "border-lol-pink/25" : "border-white/10"}`}
                style={{
                  boxShadow: isHere
                    ? "0 0 18px 0 rgba(255,62,181,0.2)"
                    : "none",
                  animation: isTarget && moving ? "pulse 1s infinite" : "none",
                }}
              >
                <p
                  className={`font-fredoka font-bold text-lg leading-none text-lol-pink ${isHere ? "bg-gradient-to-br from-lol-pink to-lol-purple text-transparent bg-clip-text" : "text-lol-lavender"}`}
                >
                  {item.short}
                </p>
                <p
                  className="text-xs"
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    color: isHere ? "#FAF0FF" : "#4A3860",
                  }}
                >
                  {item.label}
                </p>
                {isHere && (
                  <p className="text-sm drop-shadow-[0_0_4px_#FF3EB5] text-lol-purple">
                    ✦
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Motion tag */}
      <div className="flex-row rounded-2xl px-4 py-3 flex items-center gap-3 bg-white/5 border border-solid border-white/5">
        <ArrowUpDown
          className="w-4 h-4 shrink-0"
          style={{
            color: moving ? "#FF3EB5" : "#4A3860",
            filter: moving ? "drop-shadow(0 0 4px #FF3EB5)" : "none",
          }}
        />
        <p
          className="text-xs"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: moving ? "#FAF0FF" : "#4A3860",
          }}
        >
          {moving
            ? `Moviendose a ${HOUSE_FLOORS.find((f) => f.id === target)?.label}…`
            : "Ascensor listo ✦"}
        </p>
        {moving && (
          <div className="ml-auto flex flex-row gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-lol-pink"
                style={{
                  boxShadow: "0 0 4px #FF3EB5",
                }}
              />
              /* animation: `dotBounce 0.8s ${i * 0.15}s infinite`, */
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FloorsView;
