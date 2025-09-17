export type WaveGraphicProps = {
  className?: string;
  fill?: string;
};

export default function WaveGraphic({
  className = "",
  fill = "#F2FAFE",
}: WaveGraphicProps) {
  return (
    <svg
      className={`w-full ${className}`}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        fill={fill}
        d="M0,224L48,229.3C96,235,192,245,288,261.3C384,277,480,299,576,298.7C672,299,768,277,864,245.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  );
}
