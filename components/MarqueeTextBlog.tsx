import { cn } from "@/lib/utils";
import style from "@/styles/MarqueeTextBlog.module.css";
interface MarqueeTextProps {
  // define the props for the NameCard component here
  textLeading?: string;
  textEnd?: string;
  className?: string;
  firstClassName?: string;
  secondClassName?: string;
}

export default function MarqueeTextBlog({
  textLeading = "",
  className,
  firstClassName,
  secondClassName,
  textEnd = "",
}: MarqueeTextProps) {
  const numMarquee = 15;
  return (
    <div className={cn(style["container"], className)}>
      <div className={style["marquee"]}>
        <div
          className={`${style["marquee__inner"]} ${style["first"]} ${firstClassName}`}
        >
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
        <div
          className={`${style["marquee__inner"]} ${style["second"]} ${secondClassName}`}
        >
          {Array(numMarquee)
            .fill(textEnd)
            .map((textEnd, index) => {
              return (
                <span
                  key={index}
                  className="bg-gradient-to-br from-blue-600 to-violet-300 font-extrabold leading-tight bg-clip-text italic text-transparent animate-fade-up font-serif tracking-tight  sm:tracking-wide"
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
