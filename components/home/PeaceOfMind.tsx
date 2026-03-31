import Image from "next/image";

const PeaceOfMind = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden w-full mt-[60px] lg:mt-[90px] px-4"
      style={{
        minHeight: "276px",
        backgroundColor: "#E4FDF2",
        opacity: 1,
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg_1.jpg"
          alt="background"
          fill
          className="object-cover object-[center_27%]"
        />
        <div className="absolute inset-0 bg-[#E4FDF2]/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[680px] gap-6 lg:gap-8">
        
        {/* Logo Section */}
        <div
          className="relative"
          style={{
            width: "clamp(180px, 50vw, 250px)",
            height: "32px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Cash in Flash Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Main Heading Text */}
        <h2
          className="text-[#000000] w-full"
          style={{
            fontFamily: "Spartan, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(24px, 6vw, 35px)",
            lineHeight: "1.2",
            textAlign: "center",
          }}
        >
          More than a loan. It’s peace of mind.
        </h2>

        {/* Apply Now Button */}
        <button
          className="flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          style={{
            width: "125px",
            height: "47px",
            borderRadius: "40px",
            background: "linear-gradient(86.41deg, #15C15D 1.64%, #13EC6D 98.36%)",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            Apply now
          </span>
        </button>
      </div>
    </section>
  );
};

export default PeaceOfMind;