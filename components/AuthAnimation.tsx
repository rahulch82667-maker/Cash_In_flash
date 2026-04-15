import Image from "next/image";

export default function AuthAnimation() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative bg-gray-100 min-h-[500px]">
      <Image
        src="/auth_animate_page.png"
        alt="Cash in Flash platform"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
