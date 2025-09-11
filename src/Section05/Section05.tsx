import TitleWithCircle from "../TitleWithCircle/TitleWithCircle";
import type { CSSProperties } from "react";

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

const icons = {
  startups: { "1x": startups1x, "2x": startups2x },
  enterprises: { "1x": enterprises1x, "2x": enterprises2x },
  innovators: { "1x": innovators1x, "2x": innovators2x },
} as const;

// ---------- Typography (REM) ----------
const FF = "PingFang SC, PingFang SC";

const styles = {
  // (1) Intro paragraph
  introP: {
    fontFamily: FF,
    fontWeight: 500,
    fontSize: "1.125rem", // 18px
    lineHeight: "2.25rem", // 36px
    color: "#000000b3",
    textAlign: "left" as const,
    fontStyle: "normal" as const,
    textTransform: "none" as const,
  },

  // (2) Block1
  block1Title: {
    fontFamily: FF,
    fontWeight: 700,
    fontSize: "1.75rem", // 28px
    lineHeight: "3.5625rem", // 57px
    color: "#000000",
    textAlign: "left" as const,
    fontStyle: "normal" as const,
    textTransform: "none" as const,
  },
  block1SubTitle: {
    fontFamily: FF,
    // fontWeight: 500,
    fontSize: "1.3125rem", // 21px
    lineHeight: "2.625rem", // 42px
    color: "#000000",
    textAlign: "left" as const,
    fontStyle: "normal" as const,
    textTransform: "none" as const,
  },
  block1Text: {
    fontFamily: FF,
    fontWeight: 500,
    fontSize: "1rem", // 16px
    lineHeight: "2rem", // 32px
    color: "#000000b3", //透明70%
    textAlign: "center" as const,
    fontStyle: "normal" as const,
    textTransform: "none" as const,
  },

  // (3) Block2
  block2Title: {
    fontFamily: FF,
    fontWeight: 500,
    fontSize: "2.6rem", // 42px
    lineHeight: "5.3125rem", // 85px
    color: "#000000",
    textAlign: "left" as const,
    fontStyle: "normal" as const,
    textTransform: "none" as const,
  },
  block2Text: {
    fontFamily: FF,
    fontWeight: 500,
    fontSize: "1.125rem", // 18px
    lineHeight: "2.25rem", // 36px
    color: "#000000b3",
    textAlign: "left" as const,
    fontStyle: "normal" as const,
    textTransform: "none" as const,
  },
} satisfies Record<string, CSSProperties>;

// ---------- Data ----------
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

// ---------- Components ----------
export function Section05() {
  return (
    <section
      className="
        relative overflow-hidden py-14
        lg:w-screen lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] 
      "
    >
      {/* background mask */}
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

      {/* content container */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0">
        <TitleWithCircle text="Your Technical Co-founder in Melbourne for everyone" />

        {/* (1) Intro paragraph with rem-based typography */}
        <p className="mt-4 max-w-3xl" style={styles.introP}>
          At Melfish, we combine rigorous engineering principles with a
          human-centered design philosophy to create digital products that truly
          matter.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
  const barStyle = { "--bar-color": barColor } as CSSProperties;

  return (
    <article
      className="rounded-3xl p-8 flex flex-col items-center"
      style={bg ? { backgroundColor: bg } : undefined}
    >
      {/* icon */}
      <img
        src={set["1x"]}
        srcSet={`${set["1x"]} 1x, ${set["2x"]} 2x`}
        alt=""
        width={64}
        height={64}
        loading="lazy"
        decoding="async"
        className="mb-4 h-16 w-16 select-none"
      />

      {/* title (wrap with a relative container) */}
      <div className="relative inline-block">
        <h3 className="relative z-[2]" style={styles.block1Title}>
          {title}
        </h3>

        {/* underline bar: absolutely positioned under the title, behind it */}
        <span
          aria-hidden
          className="
            absolute left-1/2 -translate-x-1/2
            z-[1]
            h-[0.3125rem] w-[6.125rem]
            bg-[var(--bar-color)]
            -bottom-[-1rem]
            transition-opacity duration-300
          "
          style={barStyle}
        />
      </div>

      {/* subtitle */}
      <p className="mt-2" style={styles.block1SubTitle}>
        {subTitle}
      </p>

      {/* text */}
      <p className="mt-4" style={styles.block1Text}>
        {text}
      </p>
    </article>
  );
}

function Block2() {
  return (
    <div
      className="mt-12 grid items-center rounded-3xl p-0 md:grid-cols-[3fr_1fr]"
      style={{ backgroundColor: block2Color }}
    >
      <div className="flex flex-col items-start p-10">
        {/* (3) Block2 title */}
        {/* <h3 style={styles.block2Title}>
          Dedicated Developers for Your Project
        </h3> */}
        {/* (3) Block2 title with underline bar */}
        <div className="relative inline-block">
          <h3 className="relative z-[2]" style={styles.block2Title}>
            Dedicated Developers for Your Project
          </h3>

          <span
            aria-hidden
            className="
        absolute left-12   /* 如果要居中就改成 left-1/2 -translate-x-1/2 */
        z-[1]
        h-[0.5rem] w-[6.125rem]
        bg-[var(--bar-color)]
        -bottom-[-1.5rem]
        transition-opacity duration-300
      "
            style={{ "--bar-color": barColor } as CSSProperties}
          />
        </div>

        {/* (3) Block2 text */}
        <p className="mt-4" style={styles.block2Text}>
          At Melfish, we provide top-tier developers who integrate seamlessly
          with your team, delivering clean code, scalable architecture, and
          on-time delivery. Get the expertise you need, without the overhead.
        </p>

        <a
          href={urlHireUs}
          className="mt-6 inline-flex items-center justify-center rounded-full text-white transition"
          style={{
            backgroundColor: buttonColor,
            fontFamily: FF,
            width: "7.3125rem", // 117px
            height: "3.5rem", // 56px
          }}
        >
          Hire Us
        </a>
      </div>

      <div className="flex sm:justify-center md:justify-end overflow-hidden rounded-2xl">
        <img
          src={block2Img}
          srcSet={`${block2Img} 1x, ${block2Img2x} 2x`}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-64 md:h-[260px] object-contain"
        />
      </div>
    </div>
  );
}
