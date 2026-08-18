import { useContext, useState } from "react";
import GlamToggleComponent from "../glam-toggle";
import RoomComponent, { type RoomType } from "./room";
import { HOUSE_ROOMS } from "../constants/house-rooms";
import { setApiRgb, setApiRoom } from "../../api/api.service";
import PoolPartyContext from "../../providers/pool-party.context";

function LightingView() {
  const [rooms, setRooms] = useState<RoomType[]>(HOUSE_ROOMS);
  const [disabledPoolParty, setDisabledPoolParty] = useState(false);
  const { poolParty: poolParty, setPoolParty: setPoolParty } =
    useContext(PoolPartyContext);

  const handleChangeRoom = async (key: string, room: RoomType) => {
    try {
      const response = await setApiRoom(room.floor, room.id, room.on);
      if (response.status === 200) {
        setRooms((prev) =>
          prev.map((r) => (r.id + r.floor === key ? { ...r, ...room } : r)),
        );
      } else {
        throw new Error("status is not 200!");
      }
    } catch (e) {
      alert("Error al setear habitación " + e);
    }
  };

  const togglePoolParty = async () => {
    setDisabledPoolParty(true);
    try {
      const response = await setApiRgb(!poolParty);
      if (response.status === 200) {
        setPoolParty(!poolParty);
        setDisabledPoolParty(false);
      } else {
        throw new Error("status is not 200!");
      }
    } catch (e) {
      setDisabledPoolParty(false);
      alert("Error al cambiar el modo pool party " + e);
    }
  };

  return (
    <div className="flex flex-col gap-4 px-4 pb-6 ">
      {/* Master */}
      <div
        className="rounded-3xl p-4 flex flex-row items-center justify-between relative overflow-hidden bg-gradient-to-br from-lol-blue to-lol-darkblue border border-solid border-lol-pink/20"
        style={{
          boxShadow: poolParty ? "0 0 28px 0 rgba(255,62,181,0.2)" : "none",
        }}
      >
        {poolParty && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[radial-gradient(circle,#8B5CF633_0%,transparent_70%)] translate-x-[20%] translate-y-[-40%]" />
          </div>
        )}
        <div>
          <p
            className="text-[10px] uppercase tracking-widest mb-0.5"
            style={{ fontFamily: "'DM Mono', monospace", color: "#9B85C0" }}
          >
            Modo Pool Party ✦
          </p>
          <p
            className={`text-base font-semibold ${poolParty ? "bg-gradient-to-r from-lol-pink to-lol-purple bg-clip-text text-transparent" : "text-white/30"}`}
            style={{
              fontFamily: "'Fredoka', sans-serif",
            }}
          >
            {poolParty ? "Brillando ✦" : "Apagado"}
          </p>
        </div>
        <GlamToggleComponent
          on={poolParty}
          color="#FF3EB5"
          onToggle={() => togglePoolParty()}
          disabled={disabledPoolParty}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {rooms.map((room) => (
          <RoomComponent
            key={room.id + room.floor}
            room={room}
            onChange={(key, room) => handleChangeRoom(key, room)}
          />
        ))}
      </div>
    </div>
  );
}

export default LightingView;
