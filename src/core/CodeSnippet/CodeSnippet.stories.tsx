import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CodeSnippet, { CodeSnippetProps } from "../CodeSnippet";

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
  render: () => (
    <CodeSnippet>
      <pre>
        <code className="language-javascript">
          {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`}
        </code>
      </pre>
      <pre>
        <code className="language-typescript">
          {`const ably = new Ably.Realtime('API_KEY');
const channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', (message: Ably.Types.Message) => {
  console.log(message.data);
});`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * CodeSnippet with a single language shows a simplified language selector
 * with just an icon and language name.
 */
export const SingleLanguage: Story = {
  render: () => (
    <CodeSnippet>
      <pre>
        <code className="language-javascript">
          {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});

// Publish a message to the channel
channel.publish('event', { text: 'Hello world!' });`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * CodeSnippet with a macOS-style window header showing title and window controls.
 */
export const WithHeaderRow: Story = {
  render: () => (
    <CodeSnippet headerRow title="Subscribe Example">
      <pre>
        <code className="language-javascript">
          {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`}
        </code>
      </pre>
      <pre>
        <code className="language-typescript">
          {`const ably = new Ably.Realtime('API_KEY');
const channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', (message: Ably.Types.Message) => {
  console.log(message.data);
});`}
        </code>
      </pre>
      <pre>
        <code className="language-swift">
          {`let ably = ARTRealtime(key: "API_KEY")
let channel = ably.channels.get("channel-name")

// Subscribe to messages on channel
channel.subscribe("event") { message in
  print("\\(message.data)")
}`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * CodeSnippet with a single language and macOS-style window header.
 * A simplified language selector is shown with just the icon and name.
 */
export const SingleLanguageWithHeader: Story = {
  render: () => (
    <CodeSnippet headerRow title="JavaScript Example">
      <pre>
        <code className="language-javascript">
          {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * CodeSnippet with a specified default language, which will be selected when the component mounts.
 */
export const WithDefaultLanguage: Story = {
  render: () => (
    <CodeSnippet headerRow title="TypeScript Example" lang="typescript">
      <pre>
        <code className="language-javascript">
          {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`}
        </code>
      </pre>
      <pre>
        <code className="language-typescript">
          {`const ably = new Ably.Realtime('API_KEY');
const channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', (message: Ably.Types.Message) => {
  console.log(message.data);
});`}
        </code>
      </pre>
      <pre>
        <code className="language-swift">
          {`let ably = ARTRealtime(key: "API_KEY")
let channel = ably.channels.get("channel-name")

// Subscribe to messages on channel
channel.subscribe("event") { message in
  print("\\(message.data)")
}`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * CodeSnippet that shows a message when a requested language is not available.
 * When a language is specified that doesn't exist in the provided snippets,
 * a helpful message is shown prompting the user to switch languages.
 */
export const WithMissingLanguageSnippet: Story = {
  render: () => (
    <CodeSnippet headerRow title="Missing Language Example" lang="ruby">
      <pre>
        <code className="language-javascript">
          {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`}
        </code>
      </pre>
      <pre>
        <code className="language-typescript">
          {`const ably = new Ably.Realtime('API_KEY');
const channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', (message: Ably.Types.Message) => {
  console.log(message.data);
});`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * CodeSnippet with a language change callback that's fired whenever the user
 * selects a different language. Note: this callback doesn't fire on initial render.
 */
export const WithOnChangeCallback: Story = {
  render: () => {
    return (
      <div>
        <CodeSnippet
          headerRow
          title="Language Change Example"
          onChange={(lang, sdk) => {
            alert(`Language changed to: ${lang} and SDK: ${sdk}`);
          }}
        >
          <pre>
            <code className="language-realtime_javascript">
              {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`}
            </code>
          </pre>
          <pre>
            <code className="language-realtime_typescript">
              {`const ably = new Ably.Realtime('API_KEY');
const channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', (message: Ably.Types.Message) => {
  console.log(message.data);
});`}
            </code>
          </pre>
          <pre>
            <code className="language-rest_swift">
              {`let ably = ARTRealtime(key: "API_KEY")
let channel = ably.channels.get("channel-name")

// Subscribe to messages on channel
channel.subscribe("event") { message in
  print("\\(message.data)")
}`}
            </code>
          </pre>
          <pre>
            <code className="language-rest_php">
              {`let ably = ARTRealtime(key: "API_KEY")
let channel = ably.channels.get("channel-name")

// Subscribe to messages on channel
channel.subscribe("event") { message in 
  print("\\(message.data)")
}`}
            </code>
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
  render: () => (
    <CodeSnippet headerRow title="Demo API Keys" apiKeys={["demo"]}>
      <pre>
        <code className="language-javascript">
          {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`}
        </code>
      </pre>
      <pre>
        <code className="language-typescript">
          {`const ably = new Ably.Realtime('API_KEY');
const channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', (message: Ably.Types.Message) => {
  console.log(message.data);
});`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * CodeSnippet with selectable API keys from a dropdown menu.
 * The selected API key could be used to replace placeholders in the code.
 */
export const WithApiKeys: Story = {
  render: () => (
    <CodeSnippet
      headerRow
      title="API Key Selection Example"
      apiKeys={["abcd1234", "efgh5678", "ijkl9012"]}
    >
      <pre>
        <code className="language-javascript">
          {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`}
        </code>
      </pre>
      <pre>
        <code className="language-typescript">
          {`const ably = new Ably.Realtime('API_KEY');
const channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', (message: Ably.Types.Message) => {
  console.log(message.data);
});`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * CodeSnippet with SDK type selector (Realtime/REST) that filters language options
 * based on the selected SDK type. Languages must have appropriate prefixes to be filtered.
 */
export const WithSDKTypes: Story = {
  render: () => (
    <CodeSnippet headerRow title="SDK Type Example">
      <pre>
        <code className="language-realtime_javascript">
          {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});`}
        </code>
      </pre>
      <pre>
        <code className="language-realtime_typescript">
          {`const ably = new Ably.Realtime('API_KEY');
const channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', (message: Ably.Types.Message) => {
  console.log(message.data);
});`}
        </code>
      </pre>
      <pre>
        <code className="language-rest_php">
          {`var ably = new Ably.Rest('API_KEY');

// Publish a message
ably.channels.get('channel-name').publish('event', { text: 'Hello REST API!' }, function(err) {
  if (err) {
    console.log('Error publishing message:', err);
  } else {
    console.log('Message published successfully');
  }
});`}
        </code>
      </pre>
      <pre>
        <code className="language-rest_kotlin">
          {`const ably = new Ably.Rest('API_KEY');

// Publish a message
ably.channels.get('channel-name').publish('event', { text: 'Hello REST API!' })
  .then(() => console.log('Message published successfully'))
  .catch(err => console.log('Error publishing message:', err));`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * Special shell command mode that displays terminal commands with a distinctive UI.
 * Includes a terminal icon and streamlined appearance for better readability.
 */
export const ShellMode: Story = {
  render: () => (
    <CodeSnippet>
      <pre>
        <code className="language-shell">
          {`npm install @ably/asset-tracking
# or
yarn add @ably/asset-tracking`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * Multiple shell command examples showing how to use the specialized shell mode
 * with different types of terminal commands.
 */
export const MultipleShellExamples: Story = {
  render: () => (
    <div className="space-y-16">
      <div>
        <h3 className="ui-text-h3 mb-8">Installation</h3>
        <CodeSnippet>
          <pre>
            <code className="language-shell">
              {`npm install @ably/asset-tracking
# or
yarn add @ably/asset-tracking`}
            </code>
          </pre>
        </CodeSnippet>
      </div>

      <div>
        <h3 className="ui-text-h3 mb-8">Starting the server</h3>
        <CodeSnippet>
          <pre>
            <code className="language-shell">
              {`cd server
npm run start`}
            </code>
          </pre>
        </CodeSnippet>
      </div>

      <div>
        <h3 className="ui-text-h3 mb-8">Complex command</h3>
        <CodeSnippet>
          <pre>
            <code className="language-shell">
              {`curl -X POST https://api.ably.io/keys \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer \${API_KEY}" \\
  -d '{
    "name": "My API Key",
    "capabilities": {
      "*": ["publish", "subscribe"]
    }
  }'`}
            </code>
          </pre>
        </CodeSnippet>
      </div>
    </div>
  ),
};

/**
 * CodeSnippet with fixed mode enabled, which hides the language selector completely
 * even when languages are provided.
 */
export const FixedMode: Story = {
  render: () => (
    <CodeSnippet fixed>
      <pre>
        <code className="language-javascript">
          {`var ably = new Ably.Realtime('API_KEY');
var channel = ably.channels.get('channel-name');
            
// Subscribe to messages on channel
channel.subscribe('event', function(message) {
  console.log(message.data);
});

// Publish a message to the channel
channel.publish('event', { text: 'Hello world!' });`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};

/**
 * Demonstrates the special behavior for JSON-only snippets.
 * When only a JSON snippet is provided, it will be shown regardless of which language is selected,
 * instead of showing the NoSnippetMessage.
 */
export const JsonOnlySnippet: Story = {
  render: () => (
    <CodeSnippet headerRow title="JSON-Only Example" lang="ruby">
      <pre>
        <code className="language-json">
          {`{
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
}`}
        </code>
      </pre>
    </CodeSnippet>
  ),
};
