function RoomComponent({
  room,
  onChange,
}: {
  room: RoomType;
  onChange: (id: string, patch: Partial<RoomType>) => void;
}) {
  return (
    <button
      onClick={() => onChange(room.id, { ...room, on: !room.on })}
      className={`relative rounded-3xl p-4 overflow-hidden transition-all duration-300 ${room.on ? `bg-gradient-to-br from-lol-pink/ to-lol-darkblue` : "bg-lol-darkblue border  border-white/10"}`}
      style={{
        borderColor: room.on ? `${room.color}/40` : undefined,
        boxShadow: room.on
          ? `0 0 24px 0px ${room.color}30, inset 0 1px 0 rgba(255,255,255,0.06)`
          : "none",
      }}
    >
      {room.on && (
        <div
          className="absolute top-0 right-0 w-20 h-20 rounded-full pointer-events-none translate-x-[30%] -translate-y-[30%]"
          style={{
            backgroundColor: `radial-gradient(circle, ${room.color}25 0%, transparent 70%)`,
          }}
        />
      )}

      <div className="flex items-start justify-between mb-3 relative">
        <p
          className={`w-9 h-9 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${room.on ? "bg-current/20" : "bg-white/5"}`}
          style={{
            backgroundColor: room.on ? `${room.color}20` : "",
            boxShadow: room.on ? `0 0 10px 0 ${room.color}40` : "none",
          }}
        >
          {room.emoji}
        </p>
      </div>

      <p
        className={`text-sm text-left font-semibold mb-0.5 leading-tight font-fredoka ${room.on ? "text-lol-white" : "text-lol-lavender"}`}
      >
        {room.name}
      </p>
      <p
        className="text-sm text-left mb-3 font-dm-mono"
        style={{
          color: room.on ? room.color : "#4A3860",
        }}
      >
        {room.on ? "Brillando ✦" : "Apagado"}
      </p>
    </button>
  );
}

export type RoomType = {
  id: string;
  name: string;
  emoji: string;
  on: boolean;
  brightness: number;
  color: string;
};

export default RoomComponent;
