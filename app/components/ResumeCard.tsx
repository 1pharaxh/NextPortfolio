interface ResumeCardProps {
  // define the props for the ResumeCard component here
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ResumeCard: ResumeCardProps;
    }
  }
}

export default function ResumeCard() {
  const doodleCSS = `
  :doodle {
    flex: none;
    @grid: 25x1;
    @size: 100% 100%;
    overflow: hidden;
  }

  --colors: (#75b9be,#696d7d,#d72638,#f49d37,#140f2d);
  --color-1: @p(--colors);
  --color-2: @P;
  --transform: translateY(@r(2, 90)%);
  --size: 30px;
  transform: var(--transform) rotate(0deg);
  transform-origin: 50% 100%;

  @random(0.5) {
    animation: swing @r(3, 5)s ease infinite alternate both;
  }
  @random(0.5) {
    animation: swingLeft @r(3, 5)s ease infinite alternate both;
  }

  @keyframes swing {
    0% {
      transform: var(--transform) rotate(0deg);
    }
    100% {
      transform: var(--transform) rotate(1deg);
    }
  }

  @keyframes swingLeft {
    0% {
      transform: var(--transform) rotate(0deg);
    }
    100% {
      transform: var(--transform) rotate(-1deg);
    }
  }

  ::after {
    content: "";
    position: absolute;
    top: -15px;
    left: calc(50% - var(--size) / 2);
    width: var(--size);
    height: var(--size);
    background: @p(
      radial-gradient(@stripe(@m4(var(--color-@pn(1, 2))), transparent 29.7%)),
      @doodle(
        @grid: 1 / 100%;
        ::after {
          content: "@p(✿,❁,❀,❃,❊)";
          position: absolute;
          top: -4px;
          left: 50%;
          transform: translate3d(-50%, 0, 0);
          font-size: 40px;
          color: transparent;
          background-image: radial-gradient(var(--color-1) 20%, var(--color-2) calc(20% + 0.5px));
          -webkit-background-clip: text;
        }
      ),
      @doodle(
        @grid: 1 / 100%;
        ::after {
          content: "@p(🌸,🌼)";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate3d(-50%, 0, 0);
          font-size: 28px;
          color: transparent;
          background-image: radial-gradient(var(--color-1) 20%, var(--color-2) calc(20% + 0.5px));
          -webkit-background-clip: text;
        }
      )
    );
  }

  background: @doodle(
    @grid: 1x40;
    background: linear-gradient(90deg, @stripe(transparent, @p(--colors) 2px, transparent));

    @nth(1, 2) {
      ::before { display: none; }
    }

    @random(.5) {
      ::before {
        content: "";
        @place: 10px center;
        @size: 50% 100%;
        border-radius: 0 100% 0 100%;
        background: @p(--colors);
        -webkit-box-reflect: @p(right, initial);
      }
    }
  );
  `;

  return (
    <div className="card group h-full rounded-3xl overflow-hidden border transition-colors border-neutral-700 bg-neutral-800/30">
      <h2
        className={`mb-3 z-20 text-6xl font-extrabold text-center absolute inset-0 flex items-center justify-center`}
      >
        Check out my resume!
      </h2>
      {/* @ts-ignore */}
      {/* <css-doodle dangerouslySetInnerHTML={{ __html: doodleCSS }} /> */}
    </div>
  );
}
