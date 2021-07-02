import React from "react";
import T from "prop-types";

import "./component.css";
import { highlight } from "./component.js";

const Code = ({ language, snippet }) => {
  const HTMLraw = highlight(language, `${snippet}`.trim());
  const className = `font-mono language-${language}`;
  return (
    <div className="hljs" data-id="code">
      <pre lang={language}>
        <code className={className} dangerouslySetInnerHTML={{ __html: HTMLraw }} />
      </pre>
    </div>
  );
};

Code.propTypes = {
  language: T.string,
  snippet: T.string,
};

export default Code;
