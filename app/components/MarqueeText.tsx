import style from "../styles/MarqueeText.module.css";
interface MarqueeTextProps {
  // define the props for the NameCard component here
  text?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MarqueeText: MarqueeTextProps;
    }
  }
}
export default function MarqueeText({ text = "" }: MarqueeTextProps) {
  return (
    <div className={style["container"]}>
      <div className={style["marquee"]}>
        <div className={style["marquee__inner"] + " " + style["first"]}>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
        <div className={style["marquee__inner"] + " " + style["second"]}>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}
