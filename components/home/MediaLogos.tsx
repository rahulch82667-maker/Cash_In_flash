// components/home/MediaLogos.tsx
import Image from "next/image";

const MediaLogos = () => {
  return (
    <section
      className="relative flex items-center mx-auto mb-20 mt-[54px]" // Centered and added bottom margin
      style={{
        width: "1200px",
        height: "54px",
        opacity: 1,
      }}
    >
      {/* Forbes */}
      <div className="absolute" style={{ width: "155px", height: "38px", top: "8px", left: "30px" }}>
        <Image src="/forbes_img.png" alt="Forbes" fill className="object-contain" />
      </div>

      {/* Business Insider */}
      <div className="absolute" style={{ width: "123px", height: "40px", top: "7px", left: "302px" }}>
        <Image src="/buisness_img.png" alt="Business Insider" fill className="object-contain" />
      </div>

      {/* USA Today */}
      <div className="absolute" style={{ width: "165px", height: "30px", top: "12px", left: "542px" }}>
        <Image src="/USA_img.png" alt="USA Today" fill className="object-contain" />
      </div>

      {/* AOL */}
      <div className="absolute" style={{ width: "80px", height: "32px", top: "11px", left: "824px" }}>
        <Image src="/AoI_img.png" alt="AOL" fill className="object-contain" />
      </div>

      {/* Yahoo Finance */}
      <div className="absolute" style={{ width: "149px", height: "54px", top: "0px", left: "1021px" }}>
        <Image src="/Yahoo_img.png" alt="Yahoo Finance" fill className="object-contain" />
      </div>
    </section>
  );
};

export default MediaLogos;