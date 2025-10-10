import Code from "../Code";

export default {
  title: "Components/Code",
  component: Code,
  tags: ["autodocs"],
};

const defaultArgs = {
  additionalCSS: "border border-neutral-300",
};

export const Javascript = {
  args: {
    language: "javascript",
    snippet: `var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// Subscribe to messages on channel
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,
    ...defaultArgs,
  },
  parameters: {
    docs: {
      description: {
        story: "Basic JavaScript code snippet with syntax highlighting.",
      },
    },
  },
};

export const Swift = {
  args: {
    language: "swift",
    snippet: `let ably = ARTRealtime(key: "1WChTA.mc0Biw:kNfiYG4KiPgmHHgH")
let channel = ably.channels.get("web-pal")

// Subscribe to messages on channel
channel.subscribe("greeting") { message in
  print("\\(message.data)")
}`,
    ...defaultArgs,
  },
  parameters: {
    docs: {
      description: {
        story: "Swift code snippet with syntax highlighting.",
      },
    },
  },
};

export const Java = {
  args: {
    language: "java",
    snippet: `AblyRealtime ably = new AblyRealtime("1WChTA.mc0Biw:kNfiYG4KiPgmHHgH");
Channel channel = ably.channels.get("web-pal");

/* Subscribe to messages on channel */

MessageListener listener;
listener = new MessageListener() {
  @Override
  public void onMessage(Message message) {
    System.out.print(message.data);
  };
};
channel.subscribe("greeting", listener);`,
    ...defaultArgs,
  },
  parameters: {
    docs: {
      description: {
        story: "Java code snippet with syntax highlighting.",
      },
    },
  },
};

export const Kotlin = {
  args: {
    language: "kotlin",
    snippet: `var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
val exampleConstraints = DefaultResolutionConstraints(
  DefaultResolutionSet( // this constructor provides one Resolution for all states
      Resolution(
          accuracy = Accuracy.BALANCED,
          desiredInterval = 1000L,
          minimumDisplacement = 1.0
      )
  ),
  proximityThreshold = DefaultProximity(spatial = 1.0),
  batteryLevelThreshold = 10.0f,
  lowBatteryMultiplier = 2.0f
)`,
    ...defaultArgs,
  },
  parameters: {
    docs: {
      description: {
        story: "Kotlin code snippet with syntax highlighting.",
      },
    },
  },
};

export const CodeWithLines = {
  args: {
    showLines: true,
    language: "javascript",
    snippet: `var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// Subscribe to messages on channel
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,
    ...defaultArgs,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Code snippet with line numbers displayed using the `showLines` prop.",
      },
    },
  },
};

export const CodeWithWrap = {
  args: {
    wrap: true,
    language: "javascript",
    snippet: `var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// This is a very long line that demonstrates the wrap functionality: it will wrap instead of creating a horizontal scrollbar when the content exceeds the container width
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,
    ...defaultArgs,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Code snippet with the `wrap` prop enabled, causing long lines to wrap instead of creating horizontal scrollbars.",
      },
    },
  },
};
