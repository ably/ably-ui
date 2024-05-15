// Note: importing syntax-highlighter here means the component.js file will include
// all the language dependecies, creating a large a bundle. Prefer using the highlighter serverside.
import {
  highlightSnippet,
  registerDefaultLanguages,
} from "../utils/syntax-highlighter";

import languagesRegistry from "../utils/syntax-highlighter-registry";

registerDefaultLanguages(languagesRegistry);

function highlightEl(el) {
  if (!el) throw "Missing code element";

  const pre = el.querySelector("pre");
  const code = el.querySelector("code");
  const language = pre.getAttribute("lang");

  if (!code || !pre || !language) throw "Malformed code element";

  const { innerHTML } = code;
  const html = highlightSnippet(language, innerHTML);

  code.innerHTML = html;
}

export default highlightEl;
