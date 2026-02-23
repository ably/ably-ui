import{j as e}from"./jsx-runtime-BX7wYO_o.js";import{A as C}from"./Accordion-Cqsh54ff.js";import{B as x}from"./Badge-D654oxWy.js";import"./iframe-BhqeG6ro.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClGs55ML.js";import"./index-D1K5EYwF.js";import"./Icon-BiANqV6K.js";import"./cn-Dw6GJglA.js";const v=["default","transparent","static"],I="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque congue risus id lobortis. Vivamus blandit dolor at ultricies cursus. Phasellus pharetra nunc erat, quis porttitor mauris faucibus in. Donec feugiat dapibus orci et blandit. Duis eleifend accumsan est nec euismod. Proin imperdiet malesuada lacus, a aliquam eros aliquet nec. Sed eu dolor finibus, sodales nisl a, egestas mi. In semper interdum lacinia. Duis malesuada diam quis purus blandit, sit amet imperdiet neque accumsan. Morbi viverra vitae risus ut pellentesque. Praesent ac blandit augue. Aliquam purus lectus, lacinia in semper vitae, dictum eu felis. Donec vel pulvinar eros, id facilisis neque. Aenean odio arcu, accumsan vel est in, lobortis rhoncus ligula. Pellentesque sit amet odio velit.",o=e.jsx("p",{className:"mb-4 text-neutral-1300 dark:text-neutral-000",children:I}),k=e.jsx("textarea",{className:"w-full h-64 bg-neutral-700 p-4 rounded-xl leading-relaxed",defaultValue:I}),s=[...Array(5)].map((n,w)=>({name:`Item ${w+1}`,content:o})),y=s.map(n=>({...n,icon:"icon-gui-document-outline"})),W=s.map(n=>({...n,content:k})),O=s.map(n=>({...n,content:e.jsxs(e.Fragment,{children:[o,o,o,o,o]})})),A=s.map(n=>({...n,onClick:()=>alert(`Custom onClick for ${n.name} section`)})),t=({data:n,options:w})=>e.jsx("div",{className:"grid sm:grid-cols-2 gap-4 w-full",children:v.filter(a=>!a.toLowerCase().includes("static")).map(a=>e.jsxs("div",{className:"p-4 rounded-lg",children:[e.jsx("p",{className:"ui-text-p3 mb-4 text-center text-neutral-1300 dark:text-neutral-000 font-mono",children:a}),e.jsx(C,{data:n,options:w,theme:a,className:"flex-1"})]},a))}),E={title:"Components/Accordion",component:C},r={render:()=>t({data:s})},i={render:()=>t({data:s,options:{autoClose:!0}}),parameters:{docs:{description:{story:"Opening a section will close any other open sections. Set with `autoClose` on `options`."}}}},c={render:()=>t({data:y,options:{selectable:!0,defaultOpenIndexes:[0]}}),parameters:{docs:{description:{story:"Opening a section will apply styling to the opened section header. Row icons are disabled. Set with `selectable` on `options`."}}}},d={render:()=>e.jsx("div",{className:"h-[25rem]",children:t({data:s,options:{sticky:!0,defaultOpenIndexes:[0,1,2,3]}})}),parameters:{docs:{description:{story:"Section headers will fix to the top of the container when scrolled. Set with `sticky` on `options`."}}}},l={render:()=>t({data:s,options:{defaultOpenIndexes:[1]}}),parameters:{docs:{description:{story:"The sections that correspond to the supplied indexes will be open by default. (e.g. `[1]` will open the second section). Set with `defaultOpenIndexes` on `options`."}}}},p={render:()=>t({data:y}),parameters:{docs:{description:{story:"When an icon name is supplied, it will be displayed to the left of the section name. Set with `icon` on `data` entries."}}}},u={args:{data:O}},m={render:()=>t({data:W}),parameters:{docs:{description:{story:"Try resizing content within the Accordion entries - the container should respond to the new height accordingly"}}}},h={render:()=>e.jsx("div",{className:"grid sm:grid-cols-2 gap-4 w-full",children:v.filter(n=>n.toLowerCase().includes("static")).map(n=>e.jsxs("div",{className:`p-4 rounded-lg ${n.includes("dark")?"bg-neutral-1300":""}`,children:[e.jsx("p",{className:"ui-text-p3 mb-4 text-center font-mono",children:n}),e.jsx(C,{data:s,options:{fullyOpen:!0},theme:n,className:"flex-1"})]},n))}),parameters:{docs:{description:{story:"Setting `fullyOpen` on options will set all sections to be open by default. This is useful for static themes (usable with the `static` theme)."}}}},g={render:()=>t({data:A}),parameters:{docs:{description:{story:"When you set an onClick entry, it will be called when the section is clicked. It will add an additional action to be performed apart from the open/close behavior."}}}},b={render:()=>t({data:y,options:{selectedHeaderCSS:"bg-green-400 hover:bg-blue-600",contentCSS:"bg-yellow-200",headerCSS:"bg-pink-400 hover:bg-pink-600 h-10",iconSize:"40px",rowIconSize:"12px"}}),parameters:{docs:{description:{story:"By modifying `headerCSS`, `selectedHeaderCSS`, `contentCSS`, `iconSize`, and `rowIconSize` in `options`, you can customize the styling of the header, row expansion icons (i.e. the plus and minus), and the icons on the left of the row. What's below is hideous, but you get the gist."}}}},S={render:()=>t({data:y,options:{defaultOpenIndexes:[0,2],selectedItemCSS:"bg-blue-100 dark:bg-blue-900 rounded-lg p-2 border-2 border-blue-500 dark:border-blue-400"}}),parameters:{docs:{description:{story:"By setting `selectedItemCSS` in `options`, you can apply custom CSS classes to the AccordionItem wrapper element when it is open/active. This example shows items 1 and 3 open with a blue background and border. The content remains visible and functional."}}}},P=[{name:"Basic Plan",heading:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Basic Plan"}),e.jsx(x,{size:"sm",color:"neutral",children:"Popular"})]}),content:o},{name:"Pro Plan",heading:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Pro Plan"}),e.jsx(x,{size:"sm",color:"orange",children:"Best Value"})]}),content:o},{name:"Enterprise Plan",heading:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{children:"Enterprise Plan"}),e.jsx(x,{size:"sm",color:"blue",children:"Recommended"})]}),content:o}],f={render:()=>t({data:P}),parameters:{docs:{description:{story:"You can customize the accordion heading by providing a `heading` prop with custom ReactNode content. This example shows headings with Badge components. The `heading` prop can be a ReactNode or a function that receives the index and isOpen state."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data,
    options: {
      autoClose: true
    }
  }),
  parameters: {
    docs: {
      description: {
        story: "Opening a section will close any other open sections. Set with \`autoClose\` on \`options\`."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data: dataWithIcons,
    options: {
      selectable: true,
      defaultOpenIndexes: [0]
    }
  }),
  parameters: {
    docs: {
      description: {
        story: "Opening a section will apply styling to the opened section header. Row icons are disabled. Set with \`selectable\` on \`options\`."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-[25rem]">
      {AccordionPresentation({
      data: data,
      options: {
        sticky: true,
        defaultOpenIndexes: [0, 1, 2, 3]
      }
    })}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Section headers will fix to the top of the container when scrolled. Set with \`sticky\` on \`options\`."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data: data,
    options: {
      defaultOpenIndexes: [1]
    }
  }),
  parameters: {
    docs: {
      description: {
        story: "The sections that correspond to the supplied indexes will be open by default. (e.g. \`[1]\` will open the second section). Set with \`defaultOpenIndexes\` on \`options\`."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data: dataWithIcons
  }),
  parameters: {
    docs: {
      description: {
        story: "When an icon name is supplied, it will be displayed to the left of the section name. Set with \`icon\` on \`data\` entries."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: longData
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data: dataWithTextarea
  }),
  parameters: {
    docs: {
      description: {
        story: "Try resizing content within the Accordion entries - the container should respond to the new height accordingly"
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid sm:grid-cols-2 gap-4 w-full">
      {accordionThemes.filter(theme => theme.toLowerCase().includes("static")).map(theme => <div key={theme} className={\`p-4 rounded-lg \${theme.includes("dark") ? "bg-neutral-1300" : ""}\`}>
            <p className="ui-text-p3 mb-4 text-center font-mono">{theme}</p>
            <Accordion data={data} options={{
        fullyOpen: true
      }} theme={theme} className="flex-1" />
          </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Setting \`fullyOpen\` on options will set all sections to be open by default. This is useful for static themes (usable with the \`static\` theme)."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data: dataWithCustomClickable
  }),
  parameters: {
    docs: {
      description: {
        story: "When you set an onClick entry, it will be called when the section is clicked. It will add an additional action to be performed apart from the open/close behavior."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data: dataWithIcons,
    options: {
      selectedHeaderCSS: "bg-green-400 hover:bg-blue-600",
      contentCSS: "bg-yellow-200",
      headerCSS: "bg-pink-400 hover:bg-pink-600 h-10",
      iconSize: "40px",
      rowIconSize: "12px"
    }
  }),
  parameters: {
    docs: {
      description: {
        story: "By modifying \`headerCSS\`, \`selectedHeaderCSS\`, \`contentCSS\`, \`iconSize\`, and \`rowIconSize\` in \`options\`, you can customize the styling of the header, row expansion icons (i.e. the plus and minus), and the icons on the left of the row. What's below is hideous, but you get the gist."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data: dataWithIcons,
    options: {
      defaultOpenIndexes: [0, 2],
      selectedItemCSS: "bg-blue-100 dark:bg-blue-900 rounded-lg p-2 border-2 border-blue-500 dark:border-blue-400"
    }
  }),
  parameters: {
    docs: {
      description: {
        story: "By setting \`selectedItemCSS\` in \`options\`, you can apply custom CSS classes to the AccordionItem wrapper element when it is open/active. This example shows items 1 and 3 open with a blue background and border. The content remains visible and functional."
      }
    }
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data: dataWithBadgeInHeading
  }),
  parameters: {
    docs: {
      description: {
        story: "You can customize the accordion heading by providing a \`heading\` prop with custom ReactNode content. This example shows headings with Badge components. The \`heading\` prop can be a ReactNode or a function that receives the index and isOpen state."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const L=["Default","AutoClose","SelectableHeaders","StickyHeaders","WithDefaultOpenSections","WithRowIcons","LongContent","WithResizableInnerContent","StaticAndFullyOpen","WithCustomOnClick","WithCustomElementCSS","WithSelectedItemCSS","WithBadgeOnHeading"];export{i as AutoClose,r as Default,u as LongContent,c as SelectableHeaders,h as StaticAndFullyOpen,d as StickyHeaders,f as WithBadgeOnHeading,b as WithCustomElementCSS,g as WithCustomOnClick,l as WithDefaultOpenSections,m as WithResizableInnerContent,p as WithRowIcons,S as WithSelectedItemCSS,L as __namedExportsOrder,E as default};
