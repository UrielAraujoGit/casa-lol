export function GradientBackgroundComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 bg-[#07050F]">
      <svg
        className="absolute inset-0 -z-10"
        style={{ height: "100%", width: "100%" }}
      >
        <defs>
          <radialGradient id="purple" cx="30%" cy="0%" rx="70%" ry="60%">
            <stop offset="0%" stopColor="#8B35FF" stopOpacity={0.18} />
            <stop offset="60%" stopColor="#8B35FF" stopOpacity={0} />
          </radialGradient>

          <radialGradient id="pink" cx="70%" cy="100%" rx="70%" ry="60%">
            <stop offset="0%" stopColor="#FF3EB5" stopOpacity={0.15} />
            <stop offset="60%" stopColor="#FF3EB5" stopOpacity={0} />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#purple)" />

        <rect width="100%" height="100%" fill="url(#pink)" />
      </svg>

      <div className="flex-1">{children}</div>
    </div>
  );
}

export default GradientBackgroundComponent;
