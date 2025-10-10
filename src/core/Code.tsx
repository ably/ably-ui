import React from "react";
import {
  highlightSnippet,
  registerDefaultLanguages,
} from "./utils/syntax-highlighter";
import languagesRegistry from "./utils/syntax-highlighter-registry";
import cn from "./utils/cn";

registerDefaultLanguages(languagesRegistry);

type CodeProps = {
  language: string;
  snippet: string;
  textSize?: string;
  padding?: string;
  additionalCSS?: string;
  showLines?: boolean;
  lineCSS?: string;
  wrap?: boolean;
};

const Code = ({
  language,
  snippet,
  textSize = "ui-text-code",
  padding = "p-8",
  additionalCSS = "",
  showLines,
  lineCSS,
  wrap = false,
}: CodeProps) => {
  // Trim the snippet and remove trailing empty lines
  const trimmedSnippet = snippet.trimEnd();
  const HTMLraw = highlightSnippet(language, trimmedSnippet) ?? "";
  const className = `language-${language} ${textSize}`;

  // Calculate line count after removing trailing empty lines
  const lines = trimmedSnippet.split(/\r\n|\r|\n/);
  const lineCount = lines.length;

  return (
    <div
      className={cn("hljs overflow-y-auto flex", padding, additionalCSS)}
      data-id="code"
    >
      {showLines ? (
        <div className="text-p4 leading-normal pt-px">
          {[...Array(lineCount)].map((_, i) => (
            <p
              className={cn(
                "mr-4 font-mono text-right text-neutral-800",
                lineCSS,
              )}
              key={i}
            >
              {i + 1}
            </p>
          ))}
        </div>
      ) : null}
      <pre
        lang={language}
        className={cn(
          "h-full flex-1 text-p4 leading-normal",
          wrap ? "whitespace-pre-wrap break-words" : "overflow-x-auto",
        )}
      >
        <code
          className={className}
          dangerouslySetInnerHTML={{ __html: HTMLraw }}
        />
      </pre>
    </div>
  );
};

export default Code;
