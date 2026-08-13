import{i as e}from"./preload-helper-CT_b8DTk.js";import{Jt as t}from"./iframe-B9InDt9-.js";import{t as n}from"./jsx-runtime-CauIFuYy.js";import{n as r,t as i}from"./types-861S3kn6.js";var a,o,s,c,l,u,d,f,p;e((()=>{t(),r(),a=n(),o={title:`Styles/Colors`},s=(e,t=``)=>e.map(e=>(0,a.jsxs)(`div`,{className:`rounded-lg w-32 bg-neutral-100 dark:bg-neutral-1200 flex flex-col`,children:[(0,a.jsx)(`div`,{className:`h-[6.25rem] rounded-t-lg ${t}`,style:{backgroundColor:t?``:`var(--color-${e})`}}),(0,a.jsxs)(`div`,{className:`p-3 flex flex-col flex-1`,children:[(0,a.jsx)(`p`,{className:`ui-text-p2 font-semibold flex-1 text-neutral-1000 dark:text-neutral-300`,children:e}),(0,a.jsx)(`p`,{className:`ui-text-p3 font-normal text-neutral-800 dark:text-neutral-500`,children:c(e)[0]}),(0,a.jsx)(`p`,{className:`ui-text-p3 text-[12px] font-normal text-neutral-800 dark:text-neutral-500`,children:c(e)[1]})]})]},e)),c=e=>{let t=getComputedStyle(document.body).getPropertyValue(`--color-${e}`),n=parseInt(t.replace(/^#/,``),16);return[t,`rgb(${n>>16&255}, ${n>>8&255}, ${n&255})`]},l={render:()=>(0,a.jsx)(`div`,{className:`flex flex-wrap gap-6`,children:s([...i.neutral])}),parameters:{docs:{description:{story:"Example usage: `.text-neutral-1000`, `.bg-neutral-1000`"}}}},u={render:()=>(0,a.jsx)(`div`,{className:`flex flex-wrap gap-6`,children:s([...i.orange])}),parameters:{docs:{description:{story:"Example usage: `.text-orange-600`, `.bg-orange-600`"}}}},d={render:()=>(0,a.jsx)(`div`,{className:`flex flex-wrap gap-6`,children:s([...i.secondary])}),parameters:{docs:{description:{story:"Example usage: `.text-green-1000`, `.bg-green-1000`"}}}},f={render:()=>(0,a.jsx)(`div`,{className:`flex flex-wrap gap-6`,children:s([...i.gui])}),parameters:{docs:{description:{story:"Example usage: `.text-gui-blue-default`, `.bg-gui-blue-default`"}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6">
      {colorSet([...colorRoles.neutral])}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.text-neutral-1000\`, \`.bg-neutral-1000\`"
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6">
      {colorSet([...colorRoles.orange])}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.text-orange-600\`, \`.bg-orange-600\`"
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6">
      {colorSet([...colorRoles.secondary])}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.text-green-1000\`, \`.bg-green-1000\`"
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6">{colorSet([...colorRoles.gui])}</div>,
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.text-gui-blue-default\`, \`.bg-gui-blue-default\`"
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`NeutralColors`,`OrangeColors`,`SecondaryColors`,`GUIColors`]}))();export{f as GUIColors,l as NeutralColors,u as OrangeColors,d as SecondaryColors,p as __namedExportsOrder,o as default};