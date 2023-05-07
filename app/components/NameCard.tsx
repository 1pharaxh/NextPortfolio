import style from '../styles/NameCard.module.css'
import Image from 'next/image'
interface NameCardProps {
  // define the props for the NameCard component here
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
        NameCard: NameCardProps;
    }
  }
}
export default function NameCard() {
    
    return (
<div
          className="group rounded-lg border px-5 flex flex-col items-center md:flex-row gap-4 py-4 transition-colors border-neutral-700 bg-neutral-800/30"
        >
            <Image
            src="/akarshan.jpeg"
            alt="Picture of the author"
            width="0"
            priority
            height="0"
            sizes="100vw"
            style={{ width: 'auto', height: '200px', borderRadius: '9999px' }}
            />
            <div className='flex flex-col gap-2  '>
          <h1 className={style.title + ` text-current`}>
         Akarshan Mishra, 19
          <div className={style.aurora }>
            <div className={style.aurora__item}></div>
            <div className={style.aurora__item}></div>
            <div className={style.aurora__item}></div>

            <div className={style.aurora__item}></div>
      </div>
    </h1>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          👨🏽‍💻Full stack Developer
          </p>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          🧠Student at uAlberta'25
          </p>
          </div>
        </div>
    );
}