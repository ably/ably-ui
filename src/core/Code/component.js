import "./component.css";
import hljs from "highlight.js/lib/core";

import bash from "highlight.js/lib/languages/bash";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import dart from "highlight.js/lib/languages/dart";
import plaintext from "highlight.js/lib/languages/plaintext";
import go from "highlight.js/lib/languages/go";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import objectivec from "highlight.js/lib/languages/objectivec";
import php from "highlight.js/lib/languages/php";
import python from "highlight.js/lib/languages/python";
import ruby from "highlight.js/lib/languages/ruby";
import swift from "highlight.js/lib/languages/swift";
import xml from "highlight.js/lib/languages/xml";

// Supported languages need to be imported here
// https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md
const register = [
  { label: "", key: "plaintext", module: plaintext },
  { label: "JS", key: "javascript", module: javascript },
  { label: "Java", key: "java", module: java },
  { label: "Ruby", key: "ruby", module: ruby },
  { label: "Python", key: "python", module: python },
  { label: "PHP", key: "php", module: php },
  { label: "Shell", key: "bash", module: bash },
  { label: "C#", key: "cs", module: csharp },
  { label: "Go", key: "go", module: go },
  { label: "HTML", key: "xml", module: xml },
  { label: "C++", key: "cpp", module: cpp },
  { label: "Dart", key: "dart", module: dart },
  { label: "Swift", key: "swift", module: swift },
  { label: "Objective C", key: "objectivec", module: objectivec },
  { label: "Node.js", key: "javascript", module: javascript },
  { label: "JSON", key: "json", module: json },
];

// Initialize a sub-set of languages as used
register.forEach(({ key, module }) => hljs.registerLanguage(key, module));

function convertCodeToHTML(el) {
  if (!el) throw "Missing code element";

  const pre = el.querySelector("pre");
  const code = el.querySelector("code");
  const language = pre.getAttribute("lang");

  if (!code || !pre || !language) throw "Malformed code element";

  const { innerHTML } = code;
  const html = hljs.highlight(innerHTML, { language }).value;

  code.innerHTML = html;
}

function highlight(language, snippet) {
  return hljs.highlight(snippet, { language }).value;
}

export { highlight };
export default convertCodeToHTML;
