// import React from "react";
import TitleWidthCircle from "../TitleWidthCircle/TitleWidthCircle";

const block1Color = "#F1FAFD";
const block2Color = "#F7F7F7";
const buttonColor = "#2D7597";
const barColor = "#71C6E5";

const urlHireUs = "#";

import startups1x from "./Group_2085678343.png";
import startups2x from "./Group_2085678343@2x.png";
import enterprises1x from "./Group_2085678344.png";
import enterprises2x from "./Group_2085678344@2x.png";
import innovators1x from "./Group_2085678345.png";
import innovators2x from "./Group_2085678345@2x.png";
import block2Img from "./image_12981.png";
import block2Img2x from "./image_12981@2x.png";
import mask1x from "./Mask_group.png";
import mask2x from "./Mask_group@2x.png";

export const icons = {
  startups: { "1x": startups1x, "2x": startups2x },
  enterprises: { "1x": enterprises1x, "2x": enterprises2x },
  innovators: { "1x": innovators1x, "2x": innovators2x },
} as const;

type Target = {
  id: "startups" | "enterprises" | "innovators";
  icon: keyof typeof icons;
  title: string;
  subTitle: string;
  text: string;
};

const targets: Target[] = [
  {
    id: "startups",
    icon: "startups",
    title: "For Startups",
    subTitle: "Speed & Scalability",
    text: "From MVPs to market-ready platforms, we build fast, reliable, and scalable solutions—helping you launch quickly, iterate efficiently, and attract your first users with confidence.",
  },
  {
    id: "enterprises",
    icon: "enterprises",
    title: "For Enterprises",
    subTitle: "Modernisation & Efficiency",
    text: "We modernise legacy systems, integrate AI and automation, and optimise workflows—empowering your teams to focus on innovation while reducing operational costs.",
  },
  {
    id: "innovators",
    icon: "innovators",
    title: "For Innovators",
    subTitle: "Vision & Impact",
    text: "We partner with forward-thinking leaders to explore emerging technologies, validate bold ideas, and turn ambitious concepts into digital products that shape the future.",
  },
];

export function Section05() {
  return (
    // 👇 关键：让整个区块横向出血，占满视口宽度
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-14">
      {/* 右侧淡橙色背景曲线：贴右侧，放在内容层后面 */}
      <img
        aria-hidden
        src={mask1x}
        srcSet={`${mask1x} 1x, ${mask2x} 2x`}
        alt=""
        className="
          pointer-events-none absolute -z-10
          right-0 inset-y-50
          hidden md:block
          h-full w-auto object-contain
        "
      />

      {/* 内容容器仍然居中对齐 */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <TitleWidthCircle text="Your TechnicalCo-founder in Melkournefor everyone" />
        <p className="mt-4 max-w-3xl text-slate-600">
          At Melfish, we combine rigorous engineering principles with a
          human-centered design philosophy to create digital products that truly
          matter.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {targets.map((t) => (
            <Block1
              key={t.id}
              icon={t.icon}
              title={t.title}
              subTitle={t.subTitle}
              text={t.text}
              bg={block1Color}
            />
          ))}
        </div>

        <Block2 />
      </div>
    </section>
  );
}

type Block1Props = {
  icon: keyof typeof icons;
  title: string;
  subTitle: string;
  text: string;
  bg?: string;
};

function Block1({ icon, title, subTitle, text, bg }: Block1Props) {
  const set = icons[icon];

  return (
    <article
      className="rounded-3xl p-8 text-center shadow-sm"
      style={bg ? { backgroundColor: bg } : undefined}
    >
      {/* 图标 */}
      <img
        src={set["1x"]}
        srcSet={`${set["1x"]} 1x, ${set["2x"]} 2x`}
        alt=""
        width={64}
        height={64}
        loading="lazy"
        decoding="async"
        className="mx-auto mb-4 h-16 w-16 select-none"
      />

      {/* 文案 */}
      <h3 className="relative z-2 text-xl font-semibold text-slate-900">
        {title}
      </h3>
      <span
        aria-hidden
        className="relative -top-[8px] z-1 mx-auto mt-0 block h-[5px] w-[98px] rounded-full bg-[var(--bar-color)] transition-opacity duration-300"
        style={{ ["--bar-color" as any]: barColor }}
      />
      <p className="mt-2 text-lg text-slate-700">{subTitle}</p>
      <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
    </article>
  );
}

function Block2() {
  return (
    <div
      className="mt-12 grid items-center gap-8 rounded-3xl p-6 md:grid-cols-2 md:p-10"
      style={{ backgroundColor: block2Color }}
    >
      <div>
        <h3 className="text-2xl font-semibold text-slate-900">
          Dedicated Developers for Your Project
        </h3>
        <p className="mt-4 text-slate-600 leading-relaxed">
          At Melfish, we provide top-tier developers who integrate seamlessly
          with your team, delivering clean code, scalable architecture, and
          on-time delivery. Get the expertise you need, without the overhead.
        </p>
        <a
          href={urlHireUs}
          className="mt-6 inline-flex items-center rounded-full px-5 py-2.5 text-white transition "
          style={{ backgroundColor: buttonColor }}
        >
          Hire Us
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <img
          src={block2Img}
          srcSet={`${block2Img} 1x, ${block2Img2x} 2x`}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-64 w-full object-contain md:h-[260px]"
        />
      </div>
    </div>
  );
}
