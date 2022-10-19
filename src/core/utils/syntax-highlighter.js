import hljs from "highlight.js/lib/core";

// Map certain frameworks, protocols etc to available langauage packs
const languageToHighlightKey = (lang) => {
  let id;

  if (!lang) {
    lang = "text";
  }

  switch (lang.toLowerCase()) {
    case "android":
      id = "java";
      break;

    case ".net":
    case "net":
    case "dotnet":
    case "csharp":
    case "c#":
      id = "cs";
      break;

    case "objc":
    case "objective c":
      id = "objectivec";
      break;

    case "laravel":
      id = "php";
      break;

    case "flutter":
      id = "dart";
      break;

    case "node.js":
    case "js":
      id = "javascript";
      break;

    case "ts":
      id = "typescript";
      break;

    case "shell":
    case "fh":
    case "sh":
      id = "bash";
      break;

    case "https":
    case "http":
    case "txt":
    case "plaintext":
      id = "text";
      break;

    case "cmd":
    case "bat":
      id = "dos";
      break;

    case "yml":
      id = "yaml";
      break;

    case "erl":
      id = "erlang";
      break;

    case "patch":
      id = "diff";
      break;

    case "svg":
      id = "xml";
      break;

    default:
      break;
  }

  return id || lang;
};

const registerDefaultLanguages = (register) => {
  register.forEach(({ key, module }) => hljs.registerLanguage(key, module));
};

const highlightSnippet = (languageKeyword, snippet) => {
  const language = languageToHighlightKey(languageKeyword);
  if (typeof snippet !== "string" || !snippet || !language) return;

  return hljs.highlight(snippet, { language }).value;
};

export { highlightSnippet, languageToHighlightKey, registerDefaultLanguages };
