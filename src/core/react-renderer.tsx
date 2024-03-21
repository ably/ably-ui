import React from "react";
import { createRoot } from "react-dom/client";

const renderComponent = (Component, props, node) => {
  const root = createRoot(node);
  root.render(<Component {...props} />);
};

export { renderComponent };

export default function reactRenderer(components) {
  const reactComponents = document.querySelectorAll("[data-react]");

  Array.from(reactComponents).forEach((node) => {
    const className = node.getAttribute("data-react") ?? "";
    const Constructor = components[className];

    if (!Constructor) return;

    const propsJson = node.getAttribute("data-react-props");
    const props = propsJson && JSON.parse(propsJson || "");

    const root = createRoot(node);
    root.render(<Constructor {...props} />);

    node.removeAttribute("data-react");
    node.removeAttribute("data-react-props");
  });
}
