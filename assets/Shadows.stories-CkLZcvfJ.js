import{j as d}from"./jsx-runtime-CZ2sIMGp.js";import"./iframe-uAgQpGx3.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Styles/Shadows"},n={soft:["ui-shadow-xs-soft","ui-shadow-sm-soft","ui-shadow-md-soft","ui-shadow-lg-soft","ui-shadow-xl-soft"],medium:["ui-shadow-xs-medium","ui-shadow-sm-medium","ui-shadow-md-medium","ui-shadow-lg-medium","ui-shadow-xl-medium"],strong:["ui-shadow-xs-strong","ui-shadow-sm-strong","ui-shadow-md-strong","ui-shadow-lg-strong","ui-shadow-xl-strong"]},a=t=>d.jsx("div",{className:"flex gap-8",children:n[t].map(r=>d.jsx("div",{className:`${t==="strong"?"bg-neutral-1100 text-white":"bg-white"} rounded-lg w-16 h-16 ${r} flex items-center justify-center ui-text-p1`,children:r.split("-")[2]},r))}),s={render:()=>a("soft"),parameters:{docs:{description:{story:"Example usage: `.ui-shadow-xs-soft`"}}}},e={render:()=>a("medium"),parameters:{docs:{description:{story:"Example usage: `.ui-shadow-xs-medium`"}}}},o={render:()=>a("strong"),parameters:{docs:{description:{story:"Example usage: `.ui-shadow-xs-strong`"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => shadowRow("soft"),
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.ui-shadow-xs-soft\`"
      }
    }
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => shadowRow("medium"),
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.ui-shadow-xs-medium\`"
      }
    }
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => shadowRow("strong"),
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.ui-shadow-xs-strong\`"
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const p=["Soft","Medium","Strong"];export{e as Medium,s as Soft,o as Strong,p as __namedExportsOrder,c as default};
