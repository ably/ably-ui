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
};

const Code = ({
  language,
  snippet,
  textSize = "ui-text-code",
  padding = "p-32",
  additionalCSS = "",
  showLines,
  lineCSS,
}: CodeProps) => {
  const HTMLraw = highlightSnippet(language, `${snippet}`.trim()) ?? "";
  const className = `language-${language} ${textSize}`;
  const lineCount = snippet.split(/\r\n|\r|\n/).length;

  return (
    <div
      className={cn("hljs overflow-auto flex", padding, additionalCSS)}
      data-id="code"
    >
      {showLines ? (
        <div>
          {[...Array(lineCount)].map((_, i) => (
            <p
              className={cn(
                "mr-24 font-mono text-right text-neutral-800",
                lineCSS,
              )}
              key={i}
            >
              {i + 1}
            </p>
          ))}
        </div>
      ) : null}
      <pre lang={language}>
        <code
          className={className}
          dangerouslySetInnerHTML={{ __html: HTMLraw }}
        />
      </pre>
    </div>
  );
};

export default Code;
