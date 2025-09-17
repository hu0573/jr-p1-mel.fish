import { useState } from "react";
import logo from "./_assets/hero-logo.png";
import cofoundeer from "./_assets/hero-illustration.png";
import background1 from "./_assets/hero-bg-right.png";
import background2 from "./_assets/hero-bg-left.png";
import buttonImage from "./_assets/hero-cta-icon.png";

const FF = "PingFang SC, PingFang SC";
// 颜色
const button_color = "#2D7597";
const button_hover_color = "#3385AB";
const button_hover_shadow = "0 16px 32px rgba(0, 0, 0, 0.25)";

// 字体大小常量
const title = "3.75rem";
const paragraph = "1.125rem";
function HeroHeader() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <>
      <section
        className="bg-no-repeat h-[90vh]"
        style={{
          backgroundImage: `url(${background1}), url(${background2})`,
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'right top, left bottom',
          // 右侧大图：高度跟 section 一样（= 90vh），等比缩放
          // 左侧窄图：同样以高度为基准；宽度=高度×(203/713) ≈ 0.2847，保证比例不变
          backgroundSize: 'auto 90vh, calc(90vh * 0.2847) 90vh',
        }}
      >
        <header className="flex bg-transparent py-2 box-border">
          <div className="w-full justify-between flex py-2 px-8 items-center">
            <img src={logo} alt="Melfish logo" className="w-40 h-auto"></img>
            <nav>
              <ul className="group/menus flex text-white space-x-6 items-center">
                {/* About Us */}
                <li className="group">
                  <a
                    href="#"
                    className="relative px-4 py-3 block transition-colors duration-300"
                    style={{ fontFamily: FF, fontSize: paragraph }}
                  >
                    About Us
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute left-1/2 -translate-x-1/2
                        bottom-0 h-[3px] w-0 rounded-full bg-white
                        opacity-0 transition-[opacity,width] duration-300 ease-out
                        group-hover:opacity-100 group-hover:w-[50px]
                      "
                    />
                  </a>
                </li>

                {/* Products */}
                <li className="group">
                  <a
                    href="#"
                    className="relative px-4 py-3 block transition-colors duration-300"
                    style={{ fontFamily: FF, fontSize: paragraph }}
                  >
                    Products
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute left-1/2 -translate-x-1/2
                        bottom-0 h-[3px] w-0 rounded-full bg-white
                        opacity-0 transition-[opacity,width] duration-300 ease-out
                        group-hover:opacity-100 group-hover:w-[50px]
                      "
                    />
                  </a>
                </li>

                {/* Blog */}
                <li className="group">
                  <a
                    href="#"
                    className="relative px-4 py-3 block transition-colors duration-300"
                    style={{ fontFamily: FF, fontSize: paragraph }}
                  >
                    Blog
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute left-1/2 -translate-x-1/2
                        bottom-0 h-[3px] w-0 rounded-full bg-white
                        opacity-0 transition-[opacity,width] duration-300 ease-out
                        group-hover:opacity-100 group-hover:w-[50px]
                      "
                    />
                  </a>
                </li>

                {/* See All Service —— 默认显示；当鼠标移到其它项时自动隐藏 */}
                <li className="group">
                  <a
                    href="#"
                    className="relative px-4 py-3 block transition-colors duration-300"
                    style={{ fontFamily: FF, fontSize: paragraph }}
                  >
                    See All Service
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute left-1/2 -translate-x-1/2
                        bottom-0 h-[3px] rounded-full bg-white
                        transition-[opacity,width] duration-300 ease-out
                        w-[50px] opacity-100
                        group-hover/menus:w-0 group-hover/menus:opacity-0   /* 鼠标在任何菜单项上时先收起 */
                        hover:!w-[50px] hover:!opacity-100                  /* 如果正好悬停在本项，再展开 */
                      "
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="h-[75vh] flex justify-center">
          <div className="flex w-full max-w-6xl ml-10 place-items-center">
            <div className="w-[58%] flex flex-col text-left">
              <h1
                className="font-bold text-black text-left w-[692px] leading-[95px]"
                style={{ fontFamily: FF, fontSize: title }}
              >
                <span className="block">Your Technical Co–</span>
                <span className="block">
                  founder <span className="whitespace-nowrap">in&nbsp;Melbourne</span>
                </span>
              </h1>

              <p
                className="mt-[16px] text-left text-black font-medium"
                style={{
                  width: "506px",        // 蓝湖宽度
                  height: "72px",        // 两行总高
                  fontFamily: FF,
                  fontSize: "18px",
                  lineHeight: "36.33px",
                }}
              >
                {/* 第一行：稍微收紧 0.3px，保证装进 506px */}
                <span
                  className="block"
                  style={{ letterSpacing: "-0.3px" }}
                >
                  We build, accelerate, and scale exceptional&nbsp;digital&nbsp;products
                </span>

                {/* 第二行：hands–on incubation 不拆开 */}
                <span className="block">
                  through expert consulting and&nbsp;
                  <span className="whitespace-nowrap">hands–on incubation.</span>
                </span>
              </p>

              <button
                className="mt-8 flex items-center justify-center gap-3 text-white transition-all duration-200"
                style={{
                  backgroundColor: isButtonHovered ? button_hover_color : button_color,
                  width: "191px",
                  height: "56px",
                  borderRadius: "28px",
                  boxShadow: isButtonHovered ? button_hover_shadow : "none",
                  transform: "translate(-16px, -16px)",
                }}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <span
                  className="font-medium"
                  style={{
                    color: "#FFFFFF",
                    fontFamily: FF,
                    fontSize: "16px",
                    lineHeight: "32.29px",
                  }}
                >
                  See All Service
                </span>
                <img
                  src={buttonImage}
                  alt="See All Service"
                  className="h-4 w-4"
                />
              </button>
            </div>
            <div className="w-[52%]">
              <img
                src={cofoundeer}
                alt="Technical Co-founder"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroHeader;
