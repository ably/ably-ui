import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./Code-Dnt5ybOH.js";var r,i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{t(),r={title:`Components/Code`,component:n,tags:[`autodocs`]},i={additionalCSS:`border border-neutral-300`},a={args:{language:`javascript`,snippet:`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// Subscribe to messages on channel
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,...i},parameters:{docs:{description:{story:`Basic JavaScript code snippet with syntax highlighting.`}}}},o={args:{language:`swift`,snippet:`let ably = ARTRealtime(key: "1WChTA.mc0Biw:kNfiYG4KiPgmHHgH")
let channel = ably.channels.get("web-pal")

// Subscribe to messages on channel
channel.subscribe("greeting") { message in
  print("\\(message.data)")
}`,...i},parameters:{docs:{description:{story:`Swift code snippet with syntax highlighting.`}}}},s={args:{language:`java`,snippet:`AblyRealtime ably = new AblyRealtime("1WChTA.mc0Biw:kNfiYG4KiPgmHHgH");
Channel channel = ably.channels.get("web-pal");

/* Subscribe to messages on channel */

MessageListener listener;
listener = new MessageListener() {
  @Override
  public void onMessage(Message message) {
    System.out.print(message.data);
  };
};
channel.subscribe("greeting", listener);`,...i},parameters:{docs:{description:{story:`Java code snippet with syntax highlighting.`}}}},c={args:{language:`kotlin`,snippet:`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
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
)`,...i},parameters:{docs:{description:{story:`Kotlin code snippet with syntax highlighting.`}}}},l={args:{showLines:!0,language:`javascript`,snippet:`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// Subscribe to messages on channel
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,...i},parameters:{docs:{description:{story:"Code snippet with line numbers displayed using the `showLines` prop."}}}},u={args:{wrap:!0,language:`javascript`,snippet:`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// This is a very long line that demonstrates the wrap functionality: it will wrap instead of creating a horizontal scrollbar when the content exceeds the container width
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,...i},parameters:{docs:{description:{story:"Code snippet with the `wrap` prop enabled, causing long lines to wrap instead of creating horizontal scrollbars."}}}},d=`var ably = new Ably.Realtime('1WChTA.mc0Biw:kNfiYG4KiPgmHHgH');
var channel = ably.channels.get('web-pal');

// Subscribe to messages on channel
channel.subscribe('greeting', function(message) {
  alert(message.data);
});`,f={1:`addition`,2:`addition`,3:`highlight`,5:`removal`,6:`removal`,7:`highlight`,8:`highlight`},p={args:{language:`javascript`,snippet:d,lineHighlights:f,...i},parameters:{docs:{description:{story:"Code snippet with per-line highlighting. Green lines indicate additions (`+`), yellow lines indicate neutral highlights, and red lines indicate removals (`-`)."}}}},m={args:{showLines:!0,language:`javascript`,snippet:d,lineHighlights:f,...i},parameters:{docs:{description:{story:`Line highlighting combined with line numbers.`}}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Javascript`,`Swift`,`Java`,`Kotlin`,`CodeWithLines`,`CodeWithWrap`,`LineHighlighting`,`LineHighlightingWithLineNumbers`]}))();export{l as CodeWithLines,u as CodeWithWrap,s as Java,a as Javascript,c as Kotlin,p as LineHighlighting,m as LineHighlightingWithLineNumbers,o as Swift,h as __namedExportsOrder,r as default};