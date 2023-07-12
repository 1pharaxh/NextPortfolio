"use client";

import MarqueeText from "@/components/MarqueeText";

export default function ResumeCard() {
  return (
    <>
      <div
        // open /resume.latest.pdf in a new tab
        onClick={() => {
          window.open("/resume_akarshan_mishra.pdf", "_blank");
        }}
        className="cursor-pointer card group h-full flex flex-col py-2 rounded-3xl overflow-hidden"
      >
        <MarqueeText text="MY RESUME" />
        <MarqueeText text="Tap here!" />
      </div>
    </>
  );
}
