import{i as e}from"./preload-helper-CT_b8DTk.js";import{Jt as t}from"./iframe-B9InDt9-.js";import{t as n}from"./jsx-runtime-CauIFuYy.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r=n(),i={title:`Styles/Shadows`},a={soft:[`ui-shadow-xs-soft`,`ui-shadow-sm-soft`,`ui-shadow-md-soft`,`ui-shadow-lg-soft`,`ui-shadow-xl-soft`],medium:[`ui-shadow-xs-medium`,`ui-shadow-sm-medium`,`ui-shadow-md-medium`,`ui-shadow-lg-medium`,`ui-shadow-xl-medium`],strong:[`ui-shadow-xs-strong`,`ui-shadow-sm-strong`,`ui-shadow-md-strong`,`ui-shadow-lg-strong`,`ui-shadow-xl-strong`]},o=e=>(0,r.jsx)(`div`,{className:`flex gap-8`,children:a[e].map(t=>(0,r.jsx)(`div`,{className:`${e===`strong`?`bg-neutral-1100 text-white`:`bg-white`} rounded-lg w-16 h-16 ${t} flex items-center justify-center ui-text-p1`,children:t.split(`-`)[2]},t))}),s={render:()=>o(`soft`),parameters:{docs:{description:{story:"Example usage: `.ui-shadow-xs-soft`"}}}},c={render:()=>o(`medium`),parameters:{docs:{description:{story:"Example usage: `.ui-shadow-xs-medium`"}}}},l={render:()=>o(`strong`),parameters:{docs:{description:{story:"Example usage: `.ui-shadow-xs-strong`"}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => shadowRow("soft"),
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.ui-shadow-xs-soft\`"
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => shadowRow("medium"),
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.ui-shadow-xs-medium\`"
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => shadowRow("strong"),
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.ui-shadow-xs-strong\`"
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`Soft`,`Medium`,`Strong`]}))();export{c as Medium,s as Soft,l as Strong,u as __namedExportsOrder,i as default};