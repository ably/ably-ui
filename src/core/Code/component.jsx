import React from "react";
import T from "prop-types";

import "../utils/syntax-highlighter.css";
import { highlightSnippet, registerDefaultLanguages } from "../utils/syntax-highlighter";
import languagesRegistry from "../utils/syntax-highlighter-registry";

registerDefaultLanguages(languagesRegistry);

const Code = ({ language, snippet, textSize = "ui-text-code", padding = "p-32", additionalCSS = "" }) => {
  const HTMLraw = highlightSnippet(language, `${snippet}`.trim());
  const className = `language-${language} ${textSize}`;

  return (
    <div className={`hljs overflow-auto ${padding} ${additionalCSS}`} data-id="code">
      <pre lang={language}>
        <code className={className} dangerouslySetInnerHTML={{ __html: HTMLraw }} />
      </pre>
    </div>
  );
};

Code.propTypes = {
  language: T.string,
  snippet: T.string,
  textSize: T.string,
  padding: T.string,
  additionalCSS: T.string,
};

export default Code;
