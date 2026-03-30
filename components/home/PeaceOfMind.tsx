import Image from "next/image";

const PeaceOfMind = () => {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden w-full mt-[90px]"
      style={{
        height: "276px",
        backgroundColor: "#E4FDF2",
        opacity: 1,
      }}
    >
      {/* Background Image  */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg_1.jpg"
          alt="background"
          fill
          className="object-cover object-[center_27%]" 
        />
  <div className="absolute inset-0 bg-[#E4FDF2]/80" />

      </div>

      {/* Logo Section */}
      <div
        className="absolute z-10"
        style={{
          width: "250px",
          height: "32px",
          top: "40px",
          left: "595px",
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
        className="absolute z-10 text-[#000000]"
        style={{
          width: "680px",
          height: "42px",
          top: "117px",
          left: "380px",
          fontFamily: "Spartan, sans-serif",
          fontWeight: 400,
          fontSize: "35px",
          lineHeight: "42px",
          textAlign: "center",
        }}
      >
        More than a loan. It’s peace of mind.
      </h2>

      {/* Apply Now Button */}
      <button
        className="absolute z-10 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        style={{
          width: "125px",
          height: "47px",
          top: "199px",
          left: "658px",
          borderRadius: "40px",
          background: "linear-gradient(86.41deg, #15C15D 1.64%, #13EC6D 98.36%)",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            width: "85px",
            height: "23px",
            color: "#ffffff",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "27px",
            textAlign: "center",
          }}
        >
          Apply now
        </span>
      </button>
    </section>
  );
};

export default PeaceOfMind;