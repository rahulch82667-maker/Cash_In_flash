// components/home/MediaLogos.tsx
import Image from "next/image";

const MediaLogos = () => {
  return (
    <section
      className="relative flex flex-wrap items-center justify-between mx-auto mb-20 mt-[54px] px-4"
      style={{
        maxWidth: "1200px",
        width: "100%",
        minHeight: "54px",
        opacity: 1,
      }}
    >
      {/* Forbes */}
      <div className="relative my-4 lg:my-0" style={{ width: "155px", height: "38px" }}>
        <Image src="/forbes_img.png" alt="Forbes" fill className="object-contain" />
      </div>

      {/* Business Insider */}
      <div className="relative my-4 lg:my-0" style={{ width: "123px", height: "40px" }}>
        <Image src="/buisness_img.png" alt="Business Insider" fill className="object-contain" />
      </div>

      {/* USA Today */}
      <div className="relative my-4 lg:my-0" style={{ width: "165px", height: "30px" }}>
        <Image src="/USA_img.png" alt="USA Today" fill className="object-contain" />
      </div>

      {/* AOL */}
      <div className="relative my-4 lg:my-0" style={{ width: "80px", height: "32px" }}>
        <Image src="/AoI_img.png" alt="AOL" fill className="object-contain" />
      </div>

      {/* Yahoo Finance */}
      <div className="relative my-4 lg:my-0" style={{ width: "149px", height: "54px" }}>
        <Image src="/Yahoo_img.png" alt="Yahoo Finance" fill className="object-contain" />
      </div>
    </section>
  );
};

export default MediaLogos;