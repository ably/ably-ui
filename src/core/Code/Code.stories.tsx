import Code from "../Code";

export default {
  title: "Components/Code",
  component: Code,
  tags: ["autodocs"],
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
    additionalCSS: "bg-neutral-1200 p-16",
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
  },
};
