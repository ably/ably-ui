import{i as e}from"./preload-helper-CT_b8DTk.js";import{Jt as t}from"./iframe-BwCxeFni.js";import{t as n}from"./jsx-runtime-TD5IgBxr.js";import{n as r,t as i}from"./Tooltip-CmFXvI51.js";var a,o,s,c,l;e((()=>{t(),r(),a=n(),o={title:`Components/Tooltip`,component:i,tags:[`autodocs`]},s={render:()=>(0,a.jsx)(`div`,{className:`w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg`,children:(0,a.jsx)(i,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`})})},c={render:()=>(0,a.jsx)(`div`,{className:`w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg`,children:(0,a.jsxs)(i,{interactive:!0,children:[`Here's some super stuff with a`,` `,(0,a.jsx)(`a`,{href:`/`,onClick:e=>{e.preventDefault(),alert(`Tooltip link clicked!`)},className:`ui-link`,children:`super interactive link`}),` `,`in it`]})}),parameters:{docs:{description:{story:"Using the `interactive` prop allows you to navigate the cursor inside the tooltip and interact with it."}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64 h-64 flex items-center justify-center m-6 border mx-auto rounded-lg">
      <Tooltip>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Tooltip>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Interactive`]}))();export{s as Default,c as Interactive,l as __namedExportsOrder,o as default};