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
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <>
      <div className="border shadow-lg  bg-accent-4/10  px-3 pb-3 pt-1 rounded-xl my-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            <p className="opacity-70 pr-4">{filename}</p>
            <p>
              lang: <span className="opacity-70">{language}</span>
            </p>
          </div>
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center justify-center rounded-lg text-sm 
          font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 
          focus-visible:ring-offset-2 disabled:opacity-50 
           disabled:pointer-events-none  data-[state=open]:bg-neutral-100 
           bg-transparent border 
           border-accent-4/15 hover:bg-slate-500  h-10 py-2 px-4"
          >
            <svg
              width="30"
              height="30"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="currentColor"
            >
              <path
                d="M19.4 20H9.6a.6.6 0 01-.6-.6V9.6a.6.6 0 01.6-.6h9.8a.6.6 0 01.6.6v9.8a.6.6 0 01-.6.6z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M15 9V4.6a.6.6 0 00-.6-.6H4.6a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6H9"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>

        <Highlight theme={themes.vsDark} code={code} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={"bg-slate-950/30 rounded-xl"}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {/* <span>{i + 1 + " "}</span> */}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </>
  );
}
