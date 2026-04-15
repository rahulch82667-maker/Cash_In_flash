import Image from "next/image";

export default function AuthAnimation() {
  return (
    <div className="hidden lg:flex w-1/2 min-h-screen relative bg-gray-100">
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
