import StarText from "./StarText";

const AboutCard = ({ className }: { className?: string }) => {
  return (
    <>
      <div
        className=" overflow-hidden flex flex-col 
      px-4 py-4 justify-center items-start h-full    "
      >
        <div className="flex flex-col gap-3">
          <div
            className={`m-0  text-base md:text-lg lg:text-base xl:text-lg opacity-100`}
          >
            Hi, I'm Akarshan Mishra, a
            <StarText>Frontend, Backend and Flutter Developer</StarText>
            based in Edmonton, 🍁 CA. I am deeply passionate about creating
            applications that people enjoy using every day, and I strive to
            deliver high-quality products that meet the needs of users.
          </div>

          <div
            className={`m-0  text-base md:text-lg lg:text-base xl:text-xl opacity-100`}
          >
            As a programmer, I have a strong command over a range of programming
            languages, including
            <StarText>JavaScript, Python, C++, Java, and Dart.</StarText>
            When I'm not coding, I'm always looking to expand my knowledge and
            explore new ideas and concepts related to computing, economics, or
            mathematics.
          </div>

          <div
            className={`m-0  text-base md:text-lg lg:text-base xl:text-xl opacity-100`}
          >
            you're interested in working with me or learning moreIf about my
            skills and experience, please don't hesitate
            <StarText> to get in touch! </StarText>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
