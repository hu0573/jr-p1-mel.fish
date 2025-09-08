import { useState } from "react";

type Project = {
  id: string;
  name: string;
  description: string;
  quote: string;
  techs: string[];
};

type Props = {
  title: string;
  projects: Project[];
  quote: string;
  techs: string[];
};

const props: Props = {
  title: "Explore how we turn ideas into reality",
  projects: [
    {
      id: "chuckroo",
      name: "Chuckroo",
      description:
        "A modern, performant, and SEO–friendly blog platform built with Next.js, designed for content creators.",
      quote:
        "As a content creator, Chuckroo helped me build my blog quickly with great SEO results.",
      techs: ["Next.js", "React.js", "TailwindCSS", "Prisma"],
    },
    {
      id: "meta-town",
      name: "Meta Town",
      description:
        "A 2D real-time collaborative virtual world prototype, enabling users to interact and communicate in a shared space.",
      quote:
        "Meta Town made remote collaboration feel natural, almost like being in the same room.",
      techs: ["React.js", "WebSocket", "Pixi.js", "TypeScript"],
    },
    {
      id: "unimate-ai",
      name: "UniMateAI",
      description:
        "A RAG–powered learning assistant that provides intelligent, context-aware answers from a large knowledge base.",
      quote:
        "UniMateAI has transformed the way I study by giving me context-aware answers instantly.",
      techs: ["TypeScript", "LangChain", "OpenAI API", "Vector DB"],
    },
  ],
  quote:
    "Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.",
  techs: ["React.js", "Next.js", "Auth.js", "Tiptap", "Prisma"],
};

export default function Section03() {
  const { title, projects, quote, techs } = props;
  const [active, setActive] = useState(0);
  return (
    <section className="relative overflow-hidden">
      {/* 浅色波浪背景 */}
      <WaveBackground className="absolute inset-x-0 bottom-0 h-[240px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* 标题 */}
        <header className="mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
        </header>

        {/* 三列项目卡 */}
        <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <li key={p.id}>
              <button
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                onClick={() => setActive(idx)}
                className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-2xl"
              >
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-sky-700 transition">
                    {p.name}
                  </h3>
                  <p
                    className={[
                      "mt-3 leading-relaxed",
                      active === idx ? "text-slate-400" : "text-slate-600",
                    ].join(" ")}
                  >
                    {p.description}
                  </p>
                </div>

                {/* 选中指示条 */}
                {/* 手机/小屏显示 */}
                <div className="relative mt-3 h-[6px] md:hidden">
                  {/* 灰色底条 */}
                  <span
                    aria-hidden
                    className={[
                      "block h-[6px] w-full rounded-full transition-all duration-300",
                      active === idx
                        ? "bg-sky-500"
                        : "bg-slate-200 group-hover:bg-slate-300",
                    ].join(" ")}
                  />
                  {/* 顶部居中的蓝色三角 */}
                  <span
                    aria-hidden
                    className={[
                      "transition-all absolute -top-[6px] left-1/2 -translate-x-1/2 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent",
                      active === idx
                        ? "border-b-sky-500"
                        : "border-b-transparent",
                    ].join(" ")}
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* 大屏显示：三列时用 1/3 宽的活动条 */}
        <div className="relative mt-3 h-[6px] hidden md:block">
          {/* 灰色底条 */}
          <span
            aria-hidden
            className="block h-[6px] w-full rounded-full bg-slate-200"
          />
          {/* 活动蓝条（宽 1/3，随 active=0/1/2 平移） */}
          <span
            aria-hidden
            className="absolute top-0 h-[6px] w-1/3 rounded-full bg-sky-500 transition-transform duration-300"
            style={{ transform: `translateX(${active * 100}%)` }}
          >
            {/* 蓝条正中的小三角 */}
            <span
              className="absolute -top-[6px] left-1/2 -translate-x-1/2
                 border-l-[6px] border-r-[6px] border-b-[6px]
                 border-l-transparent border-r-transparent border-b-sky-500"
            />
          </span>
        </div>

        {/* 引述 */}
        {quote && (
          <blockquote className="mt-10 lg:mt-12 text-slate-700 text-base lg:text-lg max-w-4xl">
            “{projects[active].quote}”
          </blockquote>
        )}

        {/* 技术栈标签 */}
        {techs.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {projects[active].techs.map((t) => (
              <li key={t}>
                <span className="inline-flex items-center rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/** 波浪背景：极浅的装饰，不抢前景 */
function WaveBackground({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#F1F5F9" /* slate-100 近似 */
          d="M0,224L48,229.3C96,235,192,245,288,261.3C384,277,480,299,576,298.7C672,299,768,277,864,245.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
}
