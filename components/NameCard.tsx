import style from "@/styles/NameCard.module.css";

import Image from "next/image";

export default function NameCard({ className }: { className?: string }) {
  const ageInMilliseconds: number =
    new Date().getTime() - new Date("2003-07-16").getTime();
  const ageInYears: number = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  return (
    <div className=" h-auto md:h-48 w-full flex flex-col items-center md:flex-row gap-4 px-4 py-10 md:py-4">
      <Image
        className="h-[180px] md:h-[110px] lg:h-[160px] hover:rotate-3 hover:scale-110 transition-all duration-500 ease-in-out z-10"
        src="/akarshan.jpeg"
        alt="Picture of the author"
        width="0"
        priority
        height="0"
        sizes="100vw"
        style={{ width: "auto", borderRadius: "9999px" }}
      />
      <div className="flex flex-col gap-2 items-center md:items-start">
        <h1 className={style.title + ` text-3xl min-[842px]:text-5xl`}>
          Akarshan Mishra, {ageInYears.toFixed(0)}
          <div className={style.aurora}>
            <div className={style.aurora__item}></div>
            <div className={style.aurora__item}></div>
            <div className={style.aurora__item}></div>

            <div className={style.aurora__item}></div>
          </div>
        </h1>
        <p
          className={`m-0 max-w-[30ch] text-base min-[842px]:text-xl opacity-50`}
        >
          👨🏻‍💻Full stack Developer
        </p>
        <p
          className={`m-0 max-w-[30ch] text-base min-[842px]:text-xl opacity-50`}
        >
          🧠Student at uAlberta'25
        </p>
      </div>
    </div>
  );
}
