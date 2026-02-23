import{j as e}from"./jsx-runtime-BX7wYO_o.js";import"./iframe-BhqeG6ro.js";import"./preload-helper-PPVm8Dsz.js";const x=["neutral-000","neutral-100","neutral-200","neutral-300","neutral-400","neutral-500","neutral-600","neutral-700","neutral-800","neutral-900","neutral-1000","neutral-1100","neutral-1200","neutral-1300"],m=["orange-100","orange-200","orange-300","orange-400","orange-500","orange-600","orange-700","orange-800","orange-900","orange-1000","orange-1100"],b=["yellow-100","yellow-200","yellow-300","yellow-400","yellow-500","yellow-600","yellow-700","yellow-800","yellow-900"],f=["green-100","green-200","green-300","green-400","green-500","green-600","green-700","green-800","green-900"],v=["blue-100","blue-200","blue-300","blue-400","blue-500","blue-600","blue-700","blue-800","blue-900"],y=["violet-100","violet-200","violet-300","violet-400","violet-500","violet-600","violet-700","violet-800","violet-900"],C=["pink-100","pink-200","pink-300","pink-400","pink-500","pink-600","pink-700","pink-800","pink-900"],w=[...b,...f,...v,...y,...C],k=["gui-blue-default-light","gui-blue-hover-light","gui-blue-active-light","gui-blue-default-dark","gui-blue-hover-dark","gui-blue-active-dark","gui-blue-focus","gui-unavailable","gui-success-green","gui-error-red","gui-focus","gui-focus-outline","gui-visited"],s={neutral:x,orange:m,secondary:w,gui:k},j={title:"Styles/Colors"},u=(c,o="")=>c.map(r=>e.jsxs("div",{className:"rounded-lg w-32 bg-neutral-100 dark:bg-neutral-1200 flex flex-col",children:[e.jsx("div",{className:`h-[6.25rem] rounded-t-lg ${o}`,style:{backgroundColor:o?"":`var(--color-${r})`}}),e.jsxs("div",{className:"p-3 flex flex-col flex-1",children:[e.jsx("p",{className:"ui-text-p2 font-semibold flex-1 text-neutral-1000 dark:text-neutral-300",children:r}),e.jsx("p",{className:"ui-text-p3 font-normal text-neutral-800 dark:text-neutral-500",children:i(r)[0]}),e.jsx("p",{className:"ui-text-p3 text-[12px] font-normal text-neutral-800 dark:text-neutral-500",children:i(r)[1]})]})]},r)),i=c=>{const o=getComputedStyle(document.body).getPropertyValue(`--color-${c}`),r=parseInt(o.replace(/^#/,""),16),g=r>>16&255,d=r>>8&255,p=r&255;return[o,`rgb(${g}, ${d}, ${p})`]},a={render:()=>e.jsx("div",{className:"flex flex-wrap gap-6",children:u([...s.neutral])}),parameters:{docs:{description:{story:"Example usage: `.text-neutral-1000`, `.bg-neutral-1000`"}}}},l={render:()=>e.jsx("div",{className:"flex flex-wrap gap-6",children:u([...s.orange])}),parameters:{docs:{description:{story:"Example usage: `.text-orange-600`, `.bg-orange-600`"}}}},n={render:()=>e.jsx("div",{className:"flex flex-wrap gap-6",children:u([...s.secondary])}),parameters:{docs:{description:{story:"Example usage: `.text-green-1000`, `.bg-green-1000`"}}}},t={render:()=>e.jsx("div",{className:"flex flex-wrap gap-6",children:u([...s.gui])}),parameters:{docs:{description:{story:"Example usage: `.text-gui-blue-default`, `.bg-gui-blue-default`"}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6">{colorSet([...colorRoles.gui])}</div>,
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`.text-gui-blue-default\`, \`.bg-gui-blue-default\`"
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const E=["NeutralColors","OrangeColors","SecondaryColors","GUIColors"];export{t as GUIColors,a as NeutralColors,l as OrangeColors,n as SecondaryColors,E as __namedExportsOrder,j as default};
