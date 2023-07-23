import { SanityDocument } from "next-sanity";
import StarText from "./StarText";
import { PortableText } from "@portabletext/react";

const Block = ({ value, isInline }: { value: any; isInline: boolean }) => {
  const { style = "normal", children } = value;
  const elements = children.map((child: any) => {
    if (child.marks.includes("strong")) {
      return <StarText key={child._key}>{child.text}</StarText>;
    }
    return child.text;
  });
  if (style === "normal") {
    return (
      <div
        className="text-base md:text-lg lg:text-base xl:text-lg 
    m-0 p-0  text-white opacity-100"
      >
        {elements}
      </div>
    );
  }
  // handle other styles as needed
  return null;
};

const components = {
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => {
      return <StarText>{children}</StarText>;
    },
  },
  types: {
    block: Block,
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className=" list-disc list-inside ml-3">{children}</ul>
    ),
  },
};
const AboutCard = ({
  className,
  body,
}: {
  className?: string;
  body: SanityDocument;
}) => {
  return (
    <div
      className=" overflow-hidden flex flex-col 
      px-4 py-4 justify-center items-start h-full"
    >
      <div className="flex flex-col gap-3">
        {/* @ts-ignore */}
        <PortableText value={body} components={components} />
      </div>
    </div>
  );
};

export default AboutCard;
