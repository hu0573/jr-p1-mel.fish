import WaveGraphic from "./_components/WaveGraphic";

const CTA_URL = "#"; // 按需替换
const BG_TOP = "#F6F6F6"; // 顶部浅灰
const WAVE_FILL = "#EAF5F8"; // 底部浅蓝（可调）
const BUTTON_BG = "#2D7597"; // 按钮主色

export default function CallToActionWave() {
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
      <WaveGraphic
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
          Connect with our experts
          <span className="ml-2" aria-hidden>
            →
          </span>
        </a>
      </div>
    </section>
  );
}
