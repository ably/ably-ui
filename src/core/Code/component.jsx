import React from "react";
import "./component.css";

export default function Code(props) {
  console.log("React JSX props", props);

  const { language = "plaintext", snippet = null } = props;

  if (!snippet) return null;

  return (
    <div className="" data-id="code">
      <p>{language}</p>
      <pre className="font-mono hljs p-32"
        ><code className={language}
        >{snippet}</code></pre>
    </div>
  );
}
