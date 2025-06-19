import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import CodeSnippet from "../CodeSnippet";
import type { CodeSnippetProps, SDKType } from "../CodeSnippet";

// Common code snippets for reuse across stories
const CODE_SNIPPETS = {
  javascript: `var ably = new Ably.Realtime('{{API_KEY}}');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`,
  typescript: `const ably = new Ably.Realtime('{{API_KEY}}');
const channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', (message: Ably.Types.Message) => {
  console.log(message.data);
});`,
  swift: `let ably = ARTRealtime(key: "{{API_KEY}}")
let channel = ably.channels.get("channel-name")

// Subscribe to messages on channel
channel.subscribe("event") { message in
  print("\\(message.data)")
}`,
  python: `ably = Ably.Realtime(key='{{API_KEY}}')
channel = ably.channels.get('channel-name')

# Subscribe to messages on channel
def on_message(message):
    print(message.data)

channel.subscribe('event', on_message)`,
  php: `var ably = new Ably.Rest('{{API_KEY}}');

// Publish a message
ably.channels.get('channel-name').publish('event', { text: 'Hello REST API!' }, function(err) {
  if (err) {
    console.log('Error publishing message:', err);
  } else {
    console.log('Message published successfully');
  }
});`,
  kotlin: `val ably = AblyRest("{{API_KEY}}")

// Publish a message
ably.channels.get("channel-name").publish(
  "event",
  "{"text":"Hello REST API!"}"
) { err ->
  println(
    if (err != null) "Error publishing message: $err"
    else "Message published successfully"
  )
}`,
  shellInstall: `npm install @ably/asset-tracking
# or
yarn add @ably/asset-tracking`,
  shellStartServer: `cd server
npm run start`,
  shellComplex: `curl -X POST https://api.ably.io/keys \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer \${{API_KEY}}" \\
  -d '{
    "name": "My API Key",
    "capabilities": {
      "*": ["publish", "subscribe"]
    }
  }'`,
  json: `{
  "items": [
    {
      "id": "XeETKz24PM:0:0",
      "clientId": "user123",
      "connectionId": "hCD9Jksk28",
      "timestamp": 1654321098765,
      "name": "event",
      "data": {
        "text": "Hello world!",
        "id": 42,
        "metadata": {
          "source": "mobile-app",
          "priority": "high"
        }
      },
      "encoding": "json"
    }
  ],
  "hasNext": true
}`,
};

/**
 * The CodeSnippet component displays code with language selector tabs.
 * It automatically extracts language information from its children and provides
 * UI controls to switch between different language versions.
 *
 * Features:
 * - Language selectors include both a label and an icon pulled from the language
 *   information defined in languages.tsx
 * - Content of each language div should be a string containing the code snippet
 * - Optional macOS-style window header when headerRow is true
 * - Default language can be set with the lang prop
 * - The onChange callback fires when the language changes (after initial render)
 * - API key selector shows when apiKeys are provided
 * - SDK type selector (Realtime/REST) appears when language attributes have
 *   "realtime_" or "rest_" prefixes
 * - Special shell command mode for terminal commands
 * - Copy to clipboard functionality
 */
const meta: Meta<CodeSnippetProps> = {
  title: "Components/Code Snippet",
  component: CodeSnippet,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<CodeSnippetProps>;

/**
 * Default example showing JavaScript and TypeScript code with language selector.
 */
export const Default: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");

    return (
      <CodeSnippet
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * CodeSnippet with a single language shows a simplified language selector
 * with just an icon and language name.
 */
export const SingleLanguage: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");

    return (
      <CodeSnippet
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * CodeSnippet with a macOS-style window header showing title and window controls.
 */
export const WithHeaderRow: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");

    return (
      <CodeSnippet
        headerRow
        title="Subscribe Example"
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
        <pre>
          <code className="language-swift">{CODE_SNIPPETS.swift}</code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * CodeSnippet with a single language and macOS-style window header.
 * A simplified language selector is shown with just the icon and name.
 */
export const SingleLanguageWithHeader: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");

    return (
      <CodeSnippet
        headerRow
        title="JavaScript Example"
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * CodeSnippet with a specified default language, which will be selected when the component mounts.
 */
export const WithDefaultLanguage: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("swift");

    return (
      <CodeSnippet
        headerRow
        title="TypeScript Example"
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
        <pre>
          <code className="language-swift">{CODE_SNIPPETS.swift}</code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * CodeSnippet that shows a message when a requested language is not available.
 * When a language is specified that doesn't exist in the provided snippets,
 * a helpful message is shown prompting the user to switch languages.
 */
export const WithMissingLanguageSnippet: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("ruby");

    return (
      <CodeSnippet
        headerRow
        title="Missing Language Example"
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * CodeSnippet with a language change callback that's fired whenever the user
 * selects a different language. Note: this callback doesn't fire on initial render.
 */
export const WithOnChangeCallback: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>(
      "realtime_javascript",
    );
    const [_currentSdk, setCurrentSdk] = useState<string>("realtime");

    return (
      <div>
        <CodeSnippet
          headerRow
          title="Language Change Example"
          lang={currentLang}
          onChange={(lang, sdk) => {
            setCurrentLang(lang);
            setCurrentSdk(sdk || "realtime");
            alert(`Language changed to: ${lang} and SDK: ${sdk}`);
          }}
        >
          <pre>
            <code className="language-realtime_javascript">
              {CODE_SNIPPETS.javascript}
            </code>
          </pre>
          <pre>
            <code className="language-realtime_typescript">
              {CODE_SNIPPETS.typescript}
            </code>
          </pre>
          <pre>
            <code className="language-rest_swift">{CODE_SNIPPETS.swift}</code>
          </pre>
          <pre>
            <code className="language-rest_php">{CODE_SNIPPETS.php}</code>
          </pre>
        </CodeSnippet>
      </div>
    );
  },
};

/**
 * CodeSnippet with demo API key mode, showing a "DEMO ONLY" badge and information tooltip.
 */
export const WithDemoApiKeys: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");

    return (
      <CodeSnippet
        headerRow
        title="Demo API Keys"
        apiKeys={[{ app: "demo", keys: [{ name: "demo", key: "demokey123" }] }]}
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * CodeSnippet with selectable API keys from a dropdown menu.
 * The selected API key could be used to replace placeholders in the code.
 */
export const WithApiKeys: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");

    return (
      <CodeSnippet
        headerRow
        title="API Key Selection Example"
        apiKeys={[
          {
            app: "ably",
            keys: [
              { name: "Big Key", key: "bigkey123456" },
              { name: "Small Key", key: "smallkey123456" },
            ],
          },
          {
            app: "bably",
            keys: [
              { name: "Big Key", key: "bigkey654321" },
              { name: "Small Key", key: "smallkey654321" },
            ],
          },
        ]}
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * CodeSnippet with SDK type selector (Realtime/REST) that filters language options
 * based on the selected SDK type. Languages must have appropriate prefixes to be filtered.
 */
export const WithSDKTypes: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");
    const [currentSdk, setCurrentSdk] = useState<SDKType>("realtime");

    return (
      <CodeSnippet
        headerRow
        title="SDK Type Example"
        lang={currentLang}
        sdk={currentSdk}
        onChange={(lang, sdk) => {
          setCurrentLang(lang);
          setCurrentSdk(sdk || "realtime");
        }}
      >
        <pre>
          <code className="language-realtime_javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-realtime_typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
        <pre>
          <code className="language-rest_php">{CODE_SNIPPETS.php}</code>
        </pre>
        <pre>
          <code className="language-rest_kotlin">{CODE_SNIPPETS.kotlin}</code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * Plain mode that displays plain code with a relevant icon, if supplied.
 */
export const PlainMode: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("shell");

    return (
      <div className="flex flex-col gap-4">
        <h4 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000">
          Shell
        </h4>
        <CodeSnippet
          lang={currentLang}
          onChange={(lang) => setCurrentLang(lang)}
        >
          <pre>
            <code className="language-shell">{CODE_SNIPPETS.shellInstall}</code>
          </pre>
        </CodeSnippet>
        <h4 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000">
          Text
        </h4>
        <CodeSnippet
          lang={currentLang}
          onChange={(lang) => setCurrentLang(lang)}
        >
          <pre>
            <code className="language-text">
              It was the best of times, it was the blurst of times.
            </code>
          </pre>
        </CodeSnippet>
      </div>
    );
  },
};

/**
 * Multiple shell command examples showing how to use the specialized shell mode
 * with different types of terminal commands.
 */
export const MultipleShellExamples: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("shell");

    return (
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2">
            Installation
          </h3>
          <CodeSnippet
            lang={currentLang}
            onChange={(lang) => setCurrentLang(lang)}
          >
            <pre>
              <code className="language-shell">
                {CODE_SNIPPETS.shellInstall}
              </code>
            </pre>
          </CodeSnippet>
        </div>

        <div>
          <h3 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2">
            Starting the server
          </h3>
          <CodeSnippet
            lang={currentLang}
            onChange={(lang) => setCurrentLang(lang)}
          >
            <pre>
              <code className="language-shell">
                {CODE_SNIPPETS.shellStartServer}
              </code>
            </pre>
          </CodeSnippet>
        </div>

        <div>
          <h3 className="ui-text-h4 text-neutral-1300 dark:text-neutral-000 mb-2">
            Complex command
          </h3>
          <CodeSnippet
            lang={currentLang}
            onChange={(lang) => setCurrentLang(lang)}
          >
            <pre>
              <code className="language-shell">
                {CODE_SNIPPETS.shellComplex}
              </code>
            </pre>
          </CodeSnippet>
        </div>
      </div>
    );
  },
};

/**
 * CodeSnippet with fixed mode enabled, which hides the language selector completely
 * even when languages are provided.
 */
export const FixedMode: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");

    return (
      <CodeSnippet
        fixed
        lang={currentLang}
        onChange={(lang) => setCurrentLang(lang)}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * Demonstrates the special behavior for JSON-only snippets.
 * When only a JSON snippet is provided, it will be shown regardless of which language is selected,
 * instead of showing the NoSnippetMessage.
 */
export const JsonOnlySnippet: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("ruby");

    return (
      <CodeSnippet
        headerRow
        title="JSON-Only Example"
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-json">{CODE_SNIPPETS.json}</code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * CodeSnippet with line numbers disabled via the showCodeLines prop.
 * This demonstrates how to hide line numbers in code snippets when they're not needed.
 */
export const WithoutCodeLines: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("javascript");

    return (
      <CodeSnippet
        showCodeLines={false}
        headerRow
        title="No Line Numbers"
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
      </CodeSnippet>
    );
  },
};

/**
 * CodeSnippet with custom language ordering that controls the display order
 * of languages in the selector tabs.
 */
export const WithCustomLanguageOrder: Story = {
  render: () => {
    const [currentLang, setCurrentLang] = useState<string>("swift");

    return (
      <CodeSnippet
        headerRow
        title="Custom Language Order"
        languageOrdering={["swift", "typescript", "javascript"]}
        lang={currentLang}
        onChange={(lang, _sdk) => {
          setCurrentLang(lang);
        }}
      >
        <pre>
          <code className="language-javascript">
            {CODE_SNIPPETS.javascript}
          </code>
        </pre>
        <pre>
          <code className="language-typescript">
            {CODE_SNIPPETS.typescript}
          </code>
        </pre>
        <pre>
          <code className="language-swift">{CODE_SNIPPETS.swift}</code>
        </pre>
        <pre>
          <code className="language-python">{CODE_SNIPPETS.python}</code>
        </pre>
      </CodeSnippet>
    );
  },
};
