import MarqueeText from "@/components/MarqueeText";
import Link from "next/link";

export default function ResumeCard() {
  return (
    <Link
      href="/resume_akarshan_mishra.pdf"
      passHref
      className="cursor-pointer card group h-full flex flex-col py-2 rounded-3xl overflow-hidden"
    >
      <MarqueeText text="MY RESUME" />
      <MarqueeText text="Tap here!" />
    </Link>
  );
}
