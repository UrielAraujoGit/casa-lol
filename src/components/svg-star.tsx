const SvgStarComponent = ({
  size = 12,
  color = "#FF3EB5",
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    style={style}
  >
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
  </svg>
);
export default SvgStarComponent;
