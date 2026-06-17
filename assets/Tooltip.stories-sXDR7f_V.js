import{j as e}from"./jsx-runtime-BVSMeD0G.js";import{T as i}from"./Tooltip-DuLJmYqu.js";import"./iframe-pBTCkJkL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DRPAV1bF.js";import"./index-Bp7dNF_5.js";import"./index-BZDXSumo.js";import"./index-CgOkUjyA.js";import"./index-QqVyu4RC.js";import"./index-CnejFIJc.js";import"./index-bbhm8zDW.js";import"./Icon-_PeCk6Wt.js";import"./cn-B2SrrX3i.js";const g={title:"Components/Tooltip",component:i,tags:["autodocs"]},t={render:()=>e.jsx("div",{className:"w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg",children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})},r={render:()=>e.jsx("div",{className:"w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg",children:e.jsxs(i,{interactive:!0,children:["Here's some super stuff with a"," ",e.jsx("a",{href:"/",onClick:o=>{o.preventDefault(),alert("Tooltip link clicked!")},className:"ui-link",children:"super interactive link"})," ","in it"]})}),parameters:{docs:{description:{story:"Using the `interactive` prop allows you to navigate the cursor inside the tooltip and interact with it."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg">
      <Tooltip>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Tooltip>
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg">
      <Tooltip interactive>
        Here&apos;s some super stuff with a{" "}
        <a href="/" onClick={e => {
        e.preventDefault();
        alert("Tooltip link clicked!");
      }} className="ui-link">
          super interactive link
        </a>{" "}
        in it
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Using the \`interactive\` prop allows you to navigate the cursor inside the tooltip and interact with it."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const j=["Default","Interactive"];export{t as Default,r as Interactive,j as __namedExportsOrder,g as default};
