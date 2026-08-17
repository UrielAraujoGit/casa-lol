import SvgStarComponent from "./svg-star";

function GlitterBg() {
  const glitters = [
    { x: "8%", y: "12%", size: 6, color: "#FF3EB5", delay: 0 },
    { x: "85%", y: "8%", size: 8, color: "#8B35FF", delay: 0.4 },
    { x: "92%", y: "55%", size: 5, color: "#00DCFF", delay: 0.8 },
    { x: "5%", y: "72%", size: 7, color: "#FFB800", delay: 1.2 },
    { x: "75%", y: "88%", size: 5, color: "#FF3EB5", delay: 0.6 },
    { x: "50%", y: "5%", size: 4, color: "#00DCFF", delay: 1.0 },
    { x: "20%", y: "45%", size: 5, color: "#8B35FF", delay: 1.5 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {glitters.map((g, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: g.x,
            top: g.y,
            animation: `twinkle 2.5s ${g.delay}s ease-in-out infinite`,
          }}
        >
          <SvgStarComponent size={g.size} color={g.color} />
        </div>
      ))}
    </div>
  );
}
export default GlitterBg;
