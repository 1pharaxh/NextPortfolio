import MarqueeText from "@/components/MarqueeText";
import Link from "next/link";

export default function ResumeCard({ file }: { file: string }) {
  return (
    <Link
      href={file}
      passHref
      className="cursor-pointer card group h-full flex flex-col py-2 rounded-3xl overflow-hidden"
    >
      <MarqueeText text="MY RESUME" />
      <MarqueeText text="Tap here!" />
    </Link>
  );
}
