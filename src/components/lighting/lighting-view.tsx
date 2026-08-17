import { useState } from "react";
import GlamToggleComponent from "../glam-toggle";
import RoomComponent, { type RoomType } from "./room";
import { HOUSE_ROOMS } from "../constants/house-rooms";
import { setApiRoom } from "../../api/api.service";

function LightingView() {
  const [rooms, setRooms] = useState<RoomType[]>(HOUSE_ROOMS);
  const [bewitched, setBewitched] = useState(Boolean);
  const handleChange = async (id: string, room: RoomType) => {
    try {
      const response_status = await setApiRoom(room.floor, room.id, room.on);
      if (response_status === 200) {
        setRooms((prev) =>
          prev.map((r) => (r.id === id ? { ...r, ...room } : r)),
        );
      } else {
        throw new Error("status is not 200!");
      }
    } catch (e) {
      console.error("Error al setear habitación", e);
    }
  };

  return (
    <div className="flex flex-col gap-4 px-4 pb-6 ">
      {/* Master */}
      <div
        className="rounded-3xl p-4 flex flex-row items-center justify-between relative overflow-hidden bg-gradient-to-br from-lol-blue to-lol-darkblue border border-solid border-lol-pink/20"
        style={{
          boxShadow: bewitched ? "0 0 28px 0 rgba(255,62,181,0.2)" : "none",
        }}
      >
        {bewitched && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[radial-gradient(circle,#8B5CF633_0%,transparent_70%)] translate-x-[20%] translate-y-[-40%]" />
          </div>
        )}
        <div>
          <p
            className="text-[10px] uppercase tracking-widest mb-0.5"
            style={{ fontFamily: "'DM Mono', monospace", color: "#9B85C0" }}
          >
            Modo Embrujado
          </p>
          <p
            className={`text-base font-semibold ${bewitched ? "bg-gradient-to-r from-lol-pink to-lol-purple bg-clip-text text-transparent" : "text-white/30"}`}
            style={{
              fontFamily: "'Fredoka', sans-serif",
            }}
          >
            {bewitched ? "Brillando ✦" : "Apagado"}
          </p>
        </div>
        <GlamToggleComponent
          on={bewitched}
          color="#FF3EB5"
          onToggle={() => setBewitched(!bewitched)}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {rooms.map((room) => (
          <RoomComponent
            key={room.id + room.floor}
            room={room}
            onChange={(id, room) => handleChange(id, room)}
          />
        ))}
      </div>
    </div>
  );
}

export default LightingView;
