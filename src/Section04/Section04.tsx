// src/Section04/Section04.tsx
import React from "react";
import banner1x from "./image_12980.png";
import banner2x from "./image_12980@2x.png";

/**
 * 横幅条状图片（全宽、定高、居中裁切）
 * - 默认高度：lg 301px（你量的值），小屏逐级降低
 * - 使用 srcSet 让高分屏优先加载 @2x
 * - 如果放在有 max-w 容器里想让它“出血到两侧”，见下方 <Section04FullBleed/>
 */
export function Section04() {
  return (
    <section aria-label="banner" className="relative">
      <picture>
        {/* 可按需要添加不同断点的资源；现在用 1x/2x 即可 */}
        <img
          src={banner1x}
          srcSet={`${banner1x} 1x, ${banner2x} 2x`}
          alt="" // 纯装饰图，留空更符合无障碍
          loading="lazy"
          decoding="async"
          className="
          w-full
          h-[100px] sm:h-[140px] md:h-[210px] lg:h-[301px]
          object-cover object-center select-none
          "
        />
      </picture>
    </section>
  );
}

export function Section04FullBleed() {
  return (
    <div
      className="
        relative left-1/2 right-1/2
        -ml-[50vw] -mr-[50vw] w-screen
      "
    >
      <Section04 />
    </div>
  );
}
