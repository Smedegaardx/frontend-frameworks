import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#EEF0EB] h-[78vh] flex flex-col items-center justify-center">
      <div className="flex flex-row items-center">
        <h1 className="text-4xl font-bold text-[#224f98]">Velkommen til</h1>
        <Image src="/simpelshop.png" alt="hero" width={500} height={0} />
      </div>
      <a
        href="/products"
        className="mt-4 px-6 py-3 bg-[#153243] text-white rounded-full hover:bg-[#1a3a4d] font-text"
      >
        Se vores produkter
      </a>
    </div>
  );
}
