import{i as e}from"./preload-helper-CT_b8DTk.js";import{Jt as t}from"./iframe-CKFKr-bK.js";import{t as n}from"./jsx-runtime-P1stK3o1.js";import{n as r,t as i}from"./Accordion-DwLaP-_2.js";import{n as a,t as o}from"./Badge-BuZalXFb.js";var s,c=e((()=>{s=[`default`,`transparent`,`static`]})),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{t(),r(),a(),c(),l=n(),u=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque congue risus id lobortis. Vivamus blandit dolor at ultricies cursus. Phasellus pharetra nunc erat, quis porttitor mauris faucibus in. Donec feugiat dapibus orci et blandit. Duis eleifend accumsan est nec euismod. Proin imperdiet malesuada lacus, a aliquam eros aliquet nec. Sed eu dolor finibus, sodales nisl a, egestas mi. In semper interdum lacinia. Duis malesuada diam quis purus blandit, sit amet imperdiet neque accumsan. Morbi viverra vitae risus ut pellentesque. Praesent ac blandit augue. Aliquam purus lectus, lacinia in semper vitae, dictum eu felis. Donec vel pulvinar eros, id facilisis neque. Aenean odio arcu, accumsan vel est in, lobortis rhoncus ligula. Pellentesque sit amet odio velit.`,d=(0,l.jsx)(`p`,{className:`mb-4 text-neutral-1300 dark:text-neutral-000`,children:u}),f=(0,l.jsx)(`textarea`,{className:`w-full h-64 bg-neutral-700 p-4 rounded-xl leading-relaxed`,defaultValue:u}),p=[...[,,,,,]].map((e,t)=>({name:`Item ${t+1}`,content:d})),m=p.map(e=>({...e,icon:`icon-gui-document-outline`})),h=p.map(e=>({...e,content:f})),g=p.map(e=>({...e,content:(0,l.jsxs)(l.Fragment,{children:[d,d,d,d,d]})})),_=p.map(e=>({...e,onClick:()=>alert(`Custom onClick for ${e.name} section`)})),v=({data:e,options:t})=>(0,l.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-4 w-full`,children:s.filter(e=>!e.toLowerCase().includes(`static`)).map(n=>(0,l.jsxs)(`div`,{className:`p-4 rounded-lg`,children:[(0,l.jsx)(`p`,{className:`ui-text-p3 mb-4 text-center text-neutral-1300 dark:text-neutral-000 font-mono`,children:n}),(0,l.jsx)(i,{data:e,options:t,theme:n,className:`flex-1`})]},n))}),y={title:`Components/Accordion`,component:i},b={render:()=>v({data:p})},x={render:()=>v({data:p,options:{autoClose:!0}}),parameters:{docs:{description:{story:"Opening a section will close any other open sections. Set with `autoClose` on `options`."}}}},S={render:()=>v({data:m,options:{selectable:!0,defaultOpenIndexes:[0]}}),parameters:{docs:{description:{story:"Opening a section will apply styling to the opened section header. Row icons are disabled. Set with `selectable` on `options`."}}}},C={render:()=>(0,l.jsx)(`div`,{className:`h-[25rem]`,children:v({data:p,options:{sticky:!0,defaultOpenIndexes:[0,1,2,3]}})}),parameters:{docs:{description:{story:"Section headers will fix to the top of the container when scrolled. Set with `sticky` on `options`."}}}},w={render:()=>v({data:p,options:{defaultOpenIndexes:[1]}}),parameters:{docs:{description:{story:"The sections that correspond to the supplied indexes will be open by default. (e.g. `[1]` will open the second section). Set with `defaultOpenIndexes` on `options`."}}}},T={render:()=>v({data:m}),parameters:{docs:{description:{story:"When an icon name is supplied, it will be displayed to the left of the section name. Set with `icon` on `data` entries."}}}},E={args:{data:g}},D={render:()=>v({data:h}),parameters:{docs:{description:{story:`Try resizing content within the Accordion entries - the container should respond to the new height accordingly`}}}},O={render:()=>(0,l.jsx)(`div`,{className:`grid sm:grid-cols-2 gap-4 w-full`,children:s.filter(e=>e.toLowerCase().includes(`static`)).map(e=>(0,l.jsxs)(`div`,{className:`p-4 rounded-lg ${e.includes(`dark`)?`bg-neutral-1300`:``}`,children:[(0,l.jsx)(`p`,{className:`ui-text-p3 mb-4 text-center font-mono`,children:e}),(0,l.jsx)(i,{data:p,options:{fullyOpen:!0},theme:e,className:`flex-1`})]},e))}),parameters:{docs:{description:{story:"Setting `fullyOpen` on options will set all sections to be open by default. This is useful for static themes (usable with the `static` theme)."}}}},k={render:()=>v({data:_}),parameters:{docs:{description:{story:`When you set an onClick entry, it will be called when the section is clicked. It will add an additional action to be performed apart from the open/close behavior.`}}}},A={render:()=>v({data:m,options:{selectedHeaderCSS:`bg-green-400 hover:bg-blue-600`,contentCSS:`bg-yellow-200`,headerCSS:`bg-pink-400 hover:bg-pink-600 h-10`,iconSize:`40px`,rowIconSize:`12px`}}),parameters:{docs:{description:{story:"By modifying `headerCSS`, `selectedHeaderCSS`, `contentCSS`, `iconSize`, and `rowIconSize` in `options`, you can customize the styling of the header, row expansion icons (i.e. the plus and minus), and the icons on the left of the row. What's below is hideous, but you get the gist."}}}},j={render:()=>v({data:m,options:{defaultOpenIndexes:[0,2],selectedItemCSS:`bg-blue-100 dark:bg-blue-900 rounded-lg p-2 border-2 border-blue-500 dark:border-blue-400`}}),parameters:{docs:{description:{story:"By setting `selectedItemCSS` in `options`, you can apply custom CSS classes to the AccordionItem wrapper element when it is open/active. This example shows items 1 and 3 open with a blue background and border. The content remains visible and functional."}}}},M=[{name:`Basic Plan`,heading:(0,l.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,l.jsx)(`span`,{children:`Basic Plan`}),(0,l.jsx)(o,{size:`sm`,color:`neutral`,children:`Popular`})]}),content:d},{name:`Pro Plan`,heading:(0,l.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,l.jsx)(`span`,{children:`Pro Plan`}),(0,l.jsx)(o,{size:`sm`,color:`orange`,children:`Best Value`})]}),content:d},{name:`Enterprise Plan`,heading:(0,l.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,l.jsx)(`span`,{children:`Enterprise Plan`}),(0,l.jsx)(o,{size:`sm`,color:`blue`,children:`Recommended`})]}),content:d}],N={render:()=>v({data:M}),parameters:{docs:{description:{story:"You can customize the accordion heading by providing a `heading` prop with custom ReactNode content. This example shows headings with Badge components. The `heading` prop can be a ReactNode or a function that receives the index and isOpen state."}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => AccordionPresentation({
    data
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: longData
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`Default`,`AutoClose`,`SelectableHeaders`,`StickyHeaders`,`WithDefaultOpenSections`,`WithRowIcons`,`LongContent`,`WithResizableInnerContent`,`StaticAndFullyOpen`,`WithCustomOnClick`,`WithCustomElementCSS`,`WithSelectedItemCSS`,`WithBadgeOnHeading`]}))();export{x as AutoClose,b as Default,E as LongContent,S as SelectableHeaders,O as StaticAndFullyOpen,C as StickyHeaders,N as WithBadgeOnHeading,A as WithCustomElementCSS,k as WithCustomOnClick,w as WithDefaultOpenSections,D as WithResizableInnerContent,T as WithRowIcons,j as WithSelectedItemCSS,P as __namedExportsOrder,y as default};