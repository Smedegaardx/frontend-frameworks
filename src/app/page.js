import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-hero text-5xl"> Jeg er stack Sans notch hej</h1>
      <h1 className="font-text text-2xl">Jeg er Inter hej</h1>
      <Link href={`/single`}>single</Link>
    </div>
  );
}
