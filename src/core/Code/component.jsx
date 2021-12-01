import React from "react";
import T from "prop-types";

import "./component.css";
import { highlight } from "./component.js";

const Code = ({ language, snippet, textSize = "ui-text-code1" }) => {
  const HTMLraw = highlight(language, `${snippet}`.trim());
  const className = `language-${language} ${textSize}`;
  return (
    <div className="hljs p-32 overflow-auto" data-id="code">
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
};

export default Code;
