import style from "@/styles/MarqueeTextBlog.module.css";
interface MarqueeTextProps {
  // define the props for the NameCard component here
  textLeading?: string;
  textEnd?: string;
}

export default function MarqueeTextBlog({
  textLeading = "",
  textEnd = "",
}: MarqueeTextProps) {
  const numMarquee = 10;
  return (
    <div className={style["container"]}>
      <div className={style["marquee"]}>
        <div className={style["marquee__inner"] + " " + style["first"]}>
          {Array(numMarquee)
            .fill(textLeading)
            .map((textLeading, index) => {
              return (
                <span
                  key={index}
                  className="bg-gradient-to-br from-violet-600 to-violet-300 font-extrabold leading-tight bg-clip-text italic text-transparent"
                >
                  {textLeading}
                </span>
              );
            })}
        </div>
        <div className={style["marquee__inner"] + " " + style["second"]}>
          {Array(numMarquee)
            .fill(textEnd)
            .map((textEnd, index) => {
              return (
                <span
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-violet-300 font-extrabold leading-tight bg-clip-text italic text-transparent"
                >
                  {textEnd}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
}
