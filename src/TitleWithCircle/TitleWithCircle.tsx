import { useId } from "react";

type Props = {
  text: string;
  className?: string;
  size?: number; // 外径
  thickness?: number; // 边框厚度
  color?: string; // 主色（十六进制）
  fade?: number; // 尾端透明度 0~1
  angle?: number; // 渐变角度
  offsetX?: number; // 相对标题左上角偏移
  offsetY?: number;
};

export default function TitleWithCircle({
  text,
  className = "text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900",
  size = 36,
  thickness = 5,
  color = "#FD933F",
  fade = 0.3,
  angle = 147,
  offsetX = -10,
  offsetY = -15,
}: Props) {
  const gradId = useId(); // 保证多个实例不冲突
  const r = (size - thickness) / 2; // 圆半径

  return (
    <div className="relative inline-block">
      {/* 圆圈：绝对定位到标题左上角 */}
      <svg
        aria-hidden
        className="absolute pointer-events-none"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ left: offsetX, top: offsetY }}
      >
        <defs>
          <linearGradient
            id={gradId}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={size}
            y2="0"
            gradientTransform={`rotate(${angle} ${size / 2} ${size / 2})`}
          >
            <stop offset="0%" stopColor={color} stopOpacity={1} />
            <stop offset="100%" stopColor={color} stopOpacity={fade} />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={thickness}
        />
      </svg>

      {/* 标题 */}
      <h2 className={`relative z-10 leading-tight ${className}`}>{text}</h2>
    </div>
  );
}
