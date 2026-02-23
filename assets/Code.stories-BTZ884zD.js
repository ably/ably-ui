import{C as p}from"./Code-dEKE9R3H.js";import"./jsx-runtime-BX7wYO_o.js";import"./iframe-BhqeG6ro.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-Dw6GJglA.js";const w={title:"Components/Code",component:p,tags:["autodocs"]},e={additionalCSS:"border border-neutral-300"},n={args:{language:"javascript",snippet:`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// Subscribe to messages on channel
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,...e},parameters:{docs:{description:{story:"Basic JavaScript code snippet with syntax highlighting."}}}},a={args:{language:"swift",snippet:`let ably = ARTRealtime(key: "1WChTA.mc0Biw:kNfiYG4KiPgmHHgH")
let channel = ably.channels.get("web-pal")

// Subscribe to messages on channel
channel.subscribe("greeting") { message in
  print("\\(message.data)")
}`,...e},parameters:{docs:{description:{story:"Swift code snippet with syntax highlighting."}}}},s={args:{language:"java",snippet:`AblyRealtime ably = new AblyRealtime("1WChTA.mc0Biw:kNfiYG4KiPgmHHgH");
Channel channel = ably.channels.get("web-pal");

/* Subscribe to messages on channel */

MessageListener listener;
listener = new MessageListener() {
  @Override
  public void onMessage(Message message) {
    System.out.print(message.data);
  };
};
channel.subscribe("greeting", listener);`,...e},parameters:{docs:{description:{story:"Java code snippet with syntax highlighting."}}}},i={args:{language:"kotlin",snippet:`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
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
)`,...e},parameters:{docs:{description:{story:"Kotlin code snippet with syntax highlighting."}}}},t={args:{showLines:!0,language:"javascript",snippet:`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// Subscribe to messages on channel
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,...e},parameters:{docs:{description:{story:"Code snippet with line numbers displayed using the `showLines` prop."}}}},r={args:{wrap:!0,language:"javascript",snippet:`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// This is a very long line that demonstrates the wrap functionality: it will wrap instead of creating a horizontal scrollbar when the content exceeds the container width
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,...e},parameters:{docs:{description:{story:"Code snippet with the `wrap` prop enabled, causing long lines to wrap instead of creating horizontal scrollbars."}}}},c=`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// Subscribe to messages on channel
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,g={1:"addition",2:"addition",3:"highlight",5:"removal",6:"removal",7:"highlight",8:"highlight"},l={args:{language:"javascript",snippet:c,lineHighlights:g,...e},parameters:{docs:{description:{story:"Code snippet with per-line highlighting. Green lines indicate additions (`+`), yellow lines indicate neutral highlights, and red lines indicate removals (`-`)."}}}},o={args:{showLines:!0,language:"javascript",snippet:c,lineHighlights:g,...e},parameters:{docs:{description:{story:"Line highlighting combined with line numbers."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    language: "javascript",
    snippet: \`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// Subscribe to messages on channel
channel.subscribe('greeting', function(message) {
  alert(message.data);
});\`,
    ...defaultArgs
  },
  parameters: {
    docs: {
      description: {
        story: "Basic JavaScript code snippet with syntax highlighting."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    language: "swift",
    snippet: \`let ably = ARTRealtime(key: "1WChTA.mc0Biw:kNfiYG4KiPgmHHgH")
let channel = ably.channels.get("web-pal")

// Subscribe to messages on channel
channel.subscribe("greeting") { message in
  print("\\\\(message.data)")
}\`,
    ...defaultArgs
  },
  parameters: {
    docs: {
      description: {
        story: "Swift code snippet with syntax highlighting."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    language: "java",
    snippet: \`AblyRealtime ably = new AblyRealtime("1WChTA.mc0Biw:kNfiYG4KiPgmHHgH");
Channel channel = ably.channels.get("web-pal");

/* Subscribe to messages on channel */

MessageListener listener;
listener = new MessageListener() {
  @Override
  public void onMessage(Message message) {
    System.out.print(message.data);
  };
};
channel.subscribe("greeting", listener);\`,
    ...defaultArgs
  },
  parameters: {
    docs: {
      description: {
        story: "Java code snippet with syntax highlighting."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    language: "kotlin",
    snippet: \`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
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
)\`,
    ...defaultArgs
  },
  parameters: {
    docs: {
      description: {
        story: "Kotlin code snippet with syntax highlighting."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showLines: true,
    language: "javascript",
    snippet: \`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// Subscribe to messages on channel
channel.subscribe('greeting', function(message) {
  alert(message.data);
});\`,
    ...defaultArgs
  },
  parameters: {
    docs: {
      description: {
        story: "Code snippet with line numbers displayed using the \`showLines\` prop."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    wrap: true,
    language: "javascript",
    snippet: \`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// This is a very long line that demonstrates the wrap functionality: it will wrap instead of creating a horizontal scrollbar when the content exceeds the container width
channel.subscribe('greeting', function(message) {
  alert(message.data);
});\`,
    ...defaultArgs
  },
  parameters: {
    docs: {
      description: {
        story: "Code snippet with the \`wrap\` prop enabled, causing long lines to wrap instead of creating horizontal scrollbars."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    language: "javascript",
    snippet: highlightSnippet,
    lineHighlights,
    ...defaultArgs
  },
  parameters: {
    docs: {
      description: {
        story: "Code snippet with per-line highlighting. Green lines indicate additions (\`+\`), yellow lines indicate neutral highlights, and red lines indicate removals (\`-\`)."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    showLines: true,
    language: "javascript",
    snippet: highlightSnippet,
    lineHighlights,
    ...defaultArgs
  },
  parameters: {
    docs: {
      description: {
        story: "Line highlighting combined with line numbers."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const y=["Javascript","Swift","Java","Kotlin","CodeWithLines","CodeWithWrap","LineHighlighting","LineHighlightingWithLineNumbers"];export{t as CodeWithLines,r as CodeWithWrap,s as Java,n as Javascript,i as Kotlin,l as LineHighlighting,o as LineHighlightingWithLineNumbers,a as Swift,y as __namedExportsOrder,w as default};
