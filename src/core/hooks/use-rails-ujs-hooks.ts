import { useEffect, useRef, RefObject } from "react";

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

interface RailsUjsLink extends HTMLAnchorElement {
  dataset: {
    method?: string;
    confirm?: string;
    remote?: string;
  };
}

interface CsrfMetaTag extends HTMLMetaElement {
  content: string;
}

const useRailsUjsLinks = (): RefObject<HTMLDivElement> => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      const link = target.closest<RailsUjsLink>("a[data-method]");
      if (!link) return;

      // Check if the clicked link is within this component's container
      if (!container.contains(link)) return;

      event.preventDefault();

      const method = (link.dataset.method?.toLowerCase() ??
        "get") as HttpMethod;
      const href = link.getAttribute("href");

      if (!href) {
        console.warn("Rails UJS link has no href attribute");
        return;
      }

      // Only handle POST requests for now, expand for other methods if needed
      if (method !== "post" && method !== "delete") return;

      const csrfParam = document.querySelector<CsrfMetaTag>(
        'meta[name="csrf-param"]',
      )?.content;

      const csrfToken = document.querySelector<CsrfMetaTag>(
        'meta[name="csrf-token"]',
      )?.content;

      // Create and submit a hidden form
      const form = document.createElement("form");
      form.method = "POST";
      form.action = href;
      form.style.display = "none";

      // Add CSRF token if present
      if (csrfParam && csrfToken) {
        const csrfInput = document.createElement("input");
        csrfInput.type = "hidden";
        csrfInput.name = csrfParam;
        csrfInput.value = csrfToken;
        form.appendChild(csrfInput);
      } else {
        console.warn("No CSRF token found in document");
      }

      // Add method override for non-POST methods
      if (method !== "post") {
        const methodInput = document.createElement("input");
        methodInput.type = "hidden";
        methodInput.name = "_method";
        methodInput.value = method;
        form.appendChild(methodInput);
      }

      document.body.appendChild(form);
      form.submit();
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, []);

  return containerRef;
};

export default useRailsUjsLinks;
