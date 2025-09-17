import banner1x from "./_assets/banner-1x.png";
import banner2x from "./_assets/banner-2x.png";

/**
 * 横幅条状图片（全宽、定高、居中裁切）。默认高度在大屏为 301px，
 * 小屏按需递减。使用 srcSet 以便高分屏加载 2x 资源。
 */
function CaseStudiesBanner() {
  return (
    <section aria-label="case studies banner" className="relative">
      <picture>
        <img
          src={banner1x}
          srcSet={`${banner1x} 1x, ${banner2x} 2x`}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-[100px] sm:h-[140px] md:h-[210px] lg:h-[301px] object-cover object-center select-none"
        />
      </picture>
    </section>
  );
}

// function CaseStudiesBannerFullBleed() {
//   return (
//     <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
//       <CaseStudiesBanner />
//     </div>
//   );
// }

export default CaseStudiesBanner;
