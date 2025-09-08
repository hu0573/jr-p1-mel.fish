// src/Section07/Section07.tsx
// import React from "react";
import logo1x from "./Group_2085677915.png";
import logo2x from "./Group_2085677915@2x.png";

const BG = "#1F2A33";
const BAR = "#71C6E5"; // 深蓝色 bar
const HOVER_TEXT = "rgba(255,255,255,0.92)"; // hover 时文字略亮

export function Section07() {
  const links = [
    { label: "About Us", href: "#" },
    { label: "Products", href: "#" },
    { label: "Blog", href: "#" },
    { label: "See All Service", href: "#" },
  ];

  return (
    <section
      className="relative w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw] text-white"
      style={{ backgroundColor: BG }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5">
        {/* 顶部：小屏两行，md 及以上同一行 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo 单独一行（小屏） */}
          <a
            href="/"
            className="inline-flex items-center justify-center md:justify-start"
          >
            <img
              src={logo1x}
              srcSet={`${logo1x} 1x, ${logo2x} 2x`}
              alt="melfish"
              className="h-9 w-auto"
              loading="lazy"
              decoding="async"
            />
          </a>

          {/* 导航：四个按钮都有 bar（默认隐藏，hover 渐显） */}
          <nav aria-label="Primary" className="w-full md:w-auto">
            <ul className="flex flex-wrap items-center justify-center md:justify-end gap-8 text-slate-300">
              {links.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    className="group relative inline-flex items-center py-1 transition-colors"
                    style={
                      {
                        ["--bar-color" as any]: BAR,
                        ["--hover-text" as any]: HOVER_TEXT,
                      } as React.CSSProperties
                    }
                  >
                    {/* 文本：hover 时略亮 */}
                    <span className="relative z-10 group-hover:text-[var(--hover-text)]">
                      {it.label}
                    </span>

                    {/* 下划线：默认隐藏，hover 渐入并从中间展开 */}
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute left-1/2 -translate-x-1/2
                        bottom-0 h-[3px] w-10 rounded-full
                        bg-[var(--bar-color)]
                        opacity-0 scale-x-50
                        transition-[opacity,transform] duration-200 ease-out
                        group-hover:opacity-100 group-hover:scale-x-100
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* 细分割线 */}
        <div className="mt-6 h-px bg-white/15" />

        {/* 中部：标题 + 副标题 */}
        <div className="py-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            Technical Excellence You Can Trust
          </h1>
          <p className="mt-3 text-slate-300">
            Trusted development partner for every stage of your product journey,
            from idea to scale
          </p>
        </div>
      </div>
    </section>
  );
}
