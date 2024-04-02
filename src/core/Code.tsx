import React from "react";

import "./utils/syntax-highlighter.css";
import {
  highlightSnippet,
  registerDefaultLanguages,
} from "./utils/syntax-highlighter";
import languagesRegistry from "./utils/syntax-highlighter-registry";

registerDefaultLanguages(languagesRegistry);

type CodeProps = {
  language: string;
  snippet: string;
  textSize?: string;
  padding?: string;
  additionalCSS?: string;
};

const Code = ({
  language,
  snippet,
  textSize = "ui-text-code",
  padding = "p-32",
  additionalCSS = "",
}: CodeProps) => {
  const HTMLraw = highlightSnippet(language, `${snippet}`.trim()) ?? "";
  const className = `language-${language} ${textSize}`;

  return (
    <div
      className={`hljs overflow-auto ${padding} ${additionalCSS}`}
      data-id="code"
    >
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
