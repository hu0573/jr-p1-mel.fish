// src/Section06/Section06.tsx
// import React from "react";

const CTA_URL = "#"; // 按需替换
const BG_TOP = "#F6F6F6"; // 顶部浅灰
const WAVE_FILL = "#EAF5F8"; // 底部浅蓝（可调）
const BUTTON_BG = "#2D7597"; // 你的按钮主色

export function Section06() {
  return (
    // full-bleed：占满整屏宽度，背景图可贴到最右边
    <section className="relative w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw] overflow-hidden">
      {/* 顶部浅灰背景层 */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: BG_TOP }}
      />

      {/* 底部波浪 */}
      <Wave
        className="absolute inset-x-0 bottom-0 h-[320px]"
        fill={WAVE_FILL}
      />

      {/* 内容容器 */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
          We believe building great software should be
          <br className="hidden sm:block" />
          seamless, scalable, and worry-free. Get started
          <br className="hidden sm:block" />
          with Melfish today!
        </h2>

        <a
          href={CTA_URL}
          className="mt-8 inline-flex items-center rounded-full px-6 py-3 text-white transition hover:opacity-90"
          style={{ backgroundColor: BUTTON_BG }}
        >
          Connect with our experts{" "}
          <span className="ml-2" aria-hidden>
            →
          </span>
        </a>
      </div>
    </section>
  );
}

/** 底部波浪 SVG */
function Wave({
  className = "",
  fill = "#F2FAFE",
}: {
  className?: string;
  fill?: string;
}) {
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
