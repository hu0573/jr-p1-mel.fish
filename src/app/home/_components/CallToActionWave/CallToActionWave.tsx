import { useState } from "react";
import wave1x from "./_assets/wave-mask.png";      
import wave2x from "./_assets/wave-mask@2x.png";   
import arrow1x from "./_assets/wave-cta-icon.png";
import arrow2x from "./_assets/wave-cta-icon@2x.png";


const CTA_URL = "#"; // 按需替换
const BG_TOP = "#F7F7F7"; // 整体背景色
const BUTTON_BG = "#2D7597"; // 按钮主色
const BUTTON_HOVER_BG = "#3385AB"; // 按钮 hover 色
const BUTTON_HOVER_SHADOW = "0 16px 32px rgba(0, 0, 0, 0.25)"; // hover 阴影

function CallToActionWave() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    // full-bleed：占满整屏宽度，背景图可贴到最右边
    <section className="relative w-screen left-1/2 -ml-[50vw] right-1/2 -mr-[50vw] overflow-hidden">
      {/* 顶部浅灰背景层 */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundColor: BG_TOP }}
      />

      {/* 底部波浪位图（1x/2x 适配） */}
      <img
        src={wave1x}
        srcSet={`${wave2x} 2x`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        draggable={false}
        className="pointer-events-none select-none absolute inset-x-0 bottom-0 w-full"
      />

    {/* 内容容器*/}
    <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
      <div className="mx-auto max-w-[951px]">
        <h2
          className="
            font-bold                
            text-black              
            text-[42px]              
            leading-[59.22px]        
            tracking-tight
          "
          style={{
            fontFamily:'PingFang SC',
          }}
        >
          We believe building great software should be
          <br className="hidden sm:block" />
          seamless, scalable, and worry-free. Get started
          <br className="hidden sm:block" />
          with Melfish today!
        </h2>

        {/* CTA 按钮 —— 按蓝湖参数对齐 */}
          <a
            href={CTA_URL}
            className="
              mt-8 inline-flex items-center rounded-[28px] 
              w-[264px] h-[56px] 
              text-white 
              transition hover:opacity-90
              mx-auto
            "
            style={{
              backgroundColor: isButtonHovered ? BUTTON_HOVER_BG : BUTTON_BG,
              boxShadow: isButtonHovered ? BUTTON_HOVER_SHADOW : "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            {/* 让文字靠右、图标在最右，复刻 “Right alignment” */}
            <span
              className="
                flex-1 pr-2 text-right
                font-medium
                text-[16px] leading-[32.29px]
              "
              style={{
                fontFamily: '"PingFang SC","Helvetica Neue",Helvetica,Arial,sans-serif',
              }}
            >
              Connect with our experts
            </span>

            {/* 右侧 17×17 箭头图标（1x/2x 适配） */}
            <img
              src={arrow1x}
              srcSet={`${arrow2x} 2x`}
              alt=""
              aria-hidden="true"
              width={17}
              height={17}
              className="mt-0.5 ml-0 mr-5 block"
              draggable={false}
              loading="lazy"
              decoding="async"
            />
          </a>
      </div>
    </div>

    </section>
  );
}

export default CallToActionWave
