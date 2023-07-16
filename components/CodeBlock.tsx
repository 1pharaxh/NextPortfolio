"use client";
import { Highlight, Prism, themes } from "prism-react-renderer";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-python");
export default function CodeBlock(data: {
  code: string;
  filename: string;
  language: string;
}) {
  const code = data.code;
  const filename = data.filename;
  const language = data.language;

  return (
    <div>
      <div className="flex justify-between ">
        <p className="opacity-70">{filename}</p>
        <p>
          language: <span className="opacity-70">{language}</span>
        </p>
      </div>
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span>{i + 1 + " "}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
