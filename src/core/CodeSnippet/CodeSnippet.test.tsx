/**
 * @vitest-environment jsdom
 */

import React from "react";
import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, within, cleanup } from "@testing-library/react";

import CodeSnippet from "../CodeSnippet";

afterEach(cleanup);

// Mock child components to avoid complex rendering dependencies
vi.mock("../Code", () => ({
  default: ({ snippet, language }: { snippet: string; language: string }) => (
    <div data-testid="code-block" data-language={language}>
      {snippet}
    </div>
  ),
}));

vi.mock("../Icon", () => ({
  default: ({ name }: { name: string }) => (
    <span data-testid="icon" data-icon={name} />
  ),
}));

vi.mock("../SegmentedControl", () => ({
  default: ({
    children,
    onClick,
    active,
  }: {
    children: React.ReactNode;
    onClick: () => void;
    active: boolean;
  }) => (
    <button data-testid="sdk-toggle" data-active={active} onClick={onClick}>
      {children}
    </button>
  ),
}));

vi.mock("./LanguageSelector", () => ({
  default: ({
    languages,
    activeLanguage,
    onLanguageChange,
  }: {
    languages: string[];
    activeLanguage: string;
    onLanguageChange: (lang: string) => void;
  }) => (
    <div data-testid="language-selector" data-active={activeLanguage}>
      {languages.map((lang) => (
        <button
          key={lang}
          data-testid={`lang-${lang}`}
          onClick={() => onLanguageChange(lang)}
        >
          {lang}
        </button>
      ))}
    </div>
  ),
}));

vi.mock("./CopyButton", () => ({
  default: () => <button data-testid="copy-button">Copy</button>,
}));

vi.mock("./ApiKeySelector", () => ({
  default: () => <div data-testid="api-key-selector" />,
}));

vi.mock("./PlainCodeView", () => ({
  default: ({ content, language }: { content: string; language: string }) => (
    <div data-testid="plain-code-view" data-language={language}>
      {content}
    </div>
  ),
}));

const makeSnippet = (lang: string, content: string) => (
  <pre>
    <code className={`language-${lang}`}>{content}</code>
  </pre>
);

describe("CodeSnippet", () => {
  describe("basic rendering", () => {
    it("renders a single language snippet", () => {
      render(
        <CodeSnippet lang="javascript">
          {makeSnippet("javascript", "console.log('hello')")}
        </CodeSnippet>,
      );
      expect(screen.getByTestId("code-block").textContent).toBe(
        "console.log('hello')",
      );
    });

    it("renders a language label for a single non-fixed language", () => {
      const { container } = render(
        <CodeSnippet lang="javascript">
          {makeSnippet("javascript", "const x = 1;")}
        </CodeSnippet>,
      );
      const labelSpans = container.querySelectorAll(".ui-text-label4");
      const labels = Array.from(labelSpans).map((el) => el.textContent);
      expect(labels).toContain("JavaScript");
    });

    it("renders the language selector when multiple languages are available", () => {
      render(
        <CodeSnippet lang="javascript">
          {makeSnippet("javascript", "const x = 1;")}
          {makeSnippet("python", "x = 1")}
        </CodeSnippet>,
      );
      expect(screen.getByTestId("language-selector")).toBeTruthy();
    });
  });

  describe("realtime/rest SDK types", () => {
    it("shows SDK selector for realtime/rest prefixed languages", () => {
      render(
        <CodeSnippet lang="javascript" sdk="realtime">
          {makeSnippet("realtime_javascript", "// realtime code")}
          {makeSnippet("rest_javascript", "// rest code")}
        </CodeSnippet>,
      );
      const toggles = screen.getAllByTestId("sdk-toggle");
      expect(toggles).toHaveLength(2);
      expect(toggles[0].textContent).toBe("Realtime");
      expect(toggles[1].textContent).toBe("REST");
    });

    it("shows single SDK label when only one SDK type present", () => {
      render(
        <CodeSnippet lang="javascript" sdk="realtime">
          {makeSnippet("realtime_javascript", "// realtime only")}
        </CodeSnippet>,
      );
      const toggles = screen.getAllByTestId("sdk-toggle");
      expect(toggles[0].textContent).toBe("Realtime");
    });

    it("resolves to the correct SDK when only one type is available", () => {
      render(
        <CodeSnippet lang="javascript" sdk="realtime">
          {makeSnippet("rest_javascript", "// rest only")}
        </CodeSnippet>,
      );
      // Should fall back to rest since that's the only type available
      expect(screen.getByTestId("code-block").textContent).toBe("// rest only");
    });
  });

  describe("client/agent SDK types", () => {
    it("does not show SDK selector for client/agent prefixed languages", () => {
      render(
        <CodeSnippet lang="javascript" sdk="client" fixed>
          {makeSnippet("client_javascript", "// client code")}
          {makeSnippet("agent_python", "// agent code")}
        </CodeSnippet>,
      );
      expect(screen.queryAllByTestId("sdk-toggle")).toHaveLength(0);
    });

    it("renders client_ prefixed snippet with fixed mode and sdk=client", () => {
      render(
        <CodeSnippet lang="javascript" sdk="client" fixed>
          {makeSnippet("client_javascript", "// client JS")}
          {makeSnippet("agent_python", "// agent python")}
        </CodeSnippet>,
      );
      expect(screen.getByTestId("code-block").textContent).toBe("// client JS");
    });

    it("renders agent_ prefixed snippet with fixed mode and sdk=agent", () => {
      render(
        <CodeSnippet lang="python" sdk="agent" fixed>
          {makeSnippet("client_javascript", "// client JS")}
          {makeSnippet("agent_python", "// agent python")}
        </CodeSnippet>,
      );
      expect(screen.getByTestId("code-block").textContent).toBe(
        "// agent python",
      );
    });

    it("falls back to first language with matching prefix when exact match not found", () => {
      render(
        <CodeSnippet lang="ruby" sdk="client" fixed>
          {makeSnippet("client_javascript", "// client JS")}
          {makeSnippet("client_typescript", "// client TS")}
        </CodeSnippet>,
      );
      // Ruby doesn't exist with client_ prefix, should fall back to first client_ language
      expect(screen.getByTestId("code-block").textContent).toBe("// client JS");
    });
  });

  describe("fixed mode", () => {
    it("shows a read-only language label in fixed mode", () => {
      const { container } = render(
        <CodeSnippet lang="javascript" fixed>
          {makeSnippet("javascript", "const x = 1;")}
        </CodeSnippet>,
      );
      const labelSpans = container.querySelectorAll(".ui-text-label4");
      const labels = Array.from(labelSpans).map((el) => el.textContent);
      expect(labels).toContain("JavaScript");
      expect(screen.queryByTestId("language-selector")).toBeNull();
    });

    it("shows correct label for client_ prefixed language in fixed mode", () => {
      const { container } = render(
        <CodeSnippet lang="python" sdk="client" fixed>
          {makeSnippet("client_python", "# client python")}
        </CodeSnippet>,
      );
      const labelSpans = container.querySelectorAll(".ui-text-label4");
      const labels = Array.from(labelSpans).map((el) => el.textContent);
      expect(labels).toContain("Python");
    });

    it("hides language selector in fixed mode even with multiple languages", () => {
      render(
        <CodeSnippet lang="javascript" fixed>
          {makeSnippet("javascript", "const x = 1;")}
          {makeSnippet("python", "x = 1")}
        </CodeSnippet>,
      );
      expect(screen.queryByTestId("language-selector")).toBeNull();
    });
  });

  describe("header row", () => {
    it("renders a header row when headerRow is true", () => {
      render(
        <CodeSnippet lang="javascript" headerRow title="My Code">
          {makeSnippet("javascript", "const x = 1;")}
        </CodeSnippet>,
      );
      expect(screen.getByText("My Code")).toBeTruthy();
    });
  });

  describe("plain command mode", () => {
    it("renders shell commands in plain mode", () => {
      render(
        <CodeSnippet lang="shell">
          {makeSnippet("shell", "npm install")}
        </CodeSnippet>,
      );
      expect(screen.getByTestId("plain-code-view").textContent).toBe(
        "npm install",
      );
    });

    it("renders text commands in plain mode", () => {
      render(
        <CodeSnippet lang="text">
          {makeSnippet("text", "Hello world")}
        </CodeSnippet>,
      );
      expect(screen.getByTestId("plain-code-view").textContent).toBe(
        "Hello world",
      );
    });
  });

  describe("onChange callback", () => {
    it("passes stripped language and sdk type on language change", () => {
      const onChange = vi.fn();
      render(
        <CodeSnippet lang="javascript" sdk="realtime" onChange={onChange}>
          {makeSnippet("realtime_javascript", "// js code")}
          {makeSnippet("realtime_python", "# python code")}
        </CodeSnippet>,
      );
      const pyButton = screen.getByTestId("lang-realtime_python");
      pyButton.click();
      expect(onChange).toHaveBeenCalledWith("python", "realtime");
    });

    it("passes undefined sdk when no SDK type", () => {
      const onChange = vi.fn();
      render(
        <CodeSnippet lang="javascript" onChange={onChange}>
          {makeSnippet("javascript", "// js")}
          {makeSnippet("python", "# py")}
        </CodeSnippet>,
      );
      const pyButton = screen.getByTestId("lang-python");
      pyButton.click();
      expect(onChange).toHaveBeenCalledWith("python", undefined);
    });
  });

  describe("missing language snippet", () => {
    it("shows a message when active language has no snippet", () => {
      render(
        <CodeSnippet lang="ruby">
          {makeSnippet("javascript", "const x = 1;")}
          {makeSnippet("python", "x = 1")}
        </CodeSnippet>,
      );
      expect(screen.getByText(/currently viewing the Ruby docs/)).toBeTruthy();
    });
  });

  describe("JSON-only snippets", () => {
    it("always shows JSON content regardless of selected language", () => {
      render(
        <CodeSnippet lang="ruby">
          {makeSnippet("json", '{"key": "value"}')}
        </CodeSnippet>,
      );
      expect(screen.getByTestId("code-block").textContent).toBe(
        '{"key": "value"}',
      );
    });
  });

  describe("language ordering", () => {
    it("respects custom language ordering", () => {
      render(
        <CodeSnippet
          lang="javascript"
          languageOrdering={["python", "typescript", "javascript"]}
        >
          {makeSnippet("javascript", "// js")}
          {makeSnippet("typescript", "// ts")}
          {makeSnippet("python", "# py")}
        </CodeSnippet>,
      );
      const selector = screen.getByTestId("language-selector");
      const buttons = within(selector).getAllByRole("button");
      expect(buttons[0].textContent).toBe("python");
      expect(buttons[1].textContent).toBe("typescript");
      expect(buttons[2].textContent).toBe("javascript");
    });
  });
});
