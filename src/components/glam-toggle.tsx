function GlamToggleComponent({
  on,
  color,
  onToggle,
}: {
  on: boolean;
  color: string;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label={on ? "Turn off" : "Turn on"}
      className={`relative w-11 h-6 rounded-full shrink-0 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${on ? "bg-gradient-to-br from-lol-pink to-lol-purple" : "border border-solid border-white/10 bg-white/10 "}`}
      style={{
        boxShadow: on ? `0 0 14px 3px ${color}55` : "none",
      }}
    >
      <p
        className={`flex text-xs items-center justify-center rounded-full w-4 h-4 transition-[left] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] top-0.75 absolute  ${on ? "left-6" : "left-1 ring-1 ring-white/10"}`}
      >
        {on ? "✦" : ""}
      </p>
    </button>
  );
}
export default GlamToggleComponent;
