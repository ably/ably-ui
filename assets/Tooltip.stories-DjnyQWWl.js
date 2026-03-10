import{j as e}from"./jsx-runtime-dqWd7f8W.js";import{T as i}from"./Tooltip-rc-HzwM-.js";import"./iframe-CNWbBzxM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAR7x13f.js";import"./index-B9jjmq9N.js";import"./index-fhXCZ0ZR.js";import"./index-DGYFz5_A.js";import"./index-BtqhwZnh.js";import"./index-BVIJaol3.js";import"./index-CRdXOfTj.js";import"./Icon-f8KVpqAy.js";import"./cn-C1g8Q-pJ.js";const g={title:"Components/Tooltip",component:i,tags:["autodocs"]},t={render:()=>e.jsx("div",{className:"w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg",children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})},r={render:()=>e.jsx("div",{className:"w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg",children:e.jsxs(i,{interactive:!0,children:["Here's some super stuff with a"," ",e.jsx("a",{href:"/",onClick:o=>{o.preventDefault(),alert("Tooltip link clicked!")},className:"ui-link",children:"super interactive link"})," ","in it"]})}),parameters:{docs:{description:{story:"Using the `interactive` prop allows you to navigate the cursor inside the tooltip and interact with it."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
