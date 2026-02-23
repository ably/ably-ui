import{j as e}from"./jsx-runtime-BX7wYO_o.js";import{I as x}from"./Icon-BiANqV6K.js";import"./iframe-BhqeG6ro.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-Dw6GJglA.js";const p=({index:a,disabled:s})=>e.jsxs("div",{className:"ui-checkbox-p1 flex items-center",children:[e.jsx("input",{"data-ui-checkbox-native":"",type:"checkbox",id:`checkbox-example-${a}`,name:`checkbox-example-${a}`,value:"yes",className:"ui-checkbox-input",disabled:s}),e.jsx("div",{"data-ui-checkbox-styled":"",className:"ui-checkbox-styled",children:e.jsx(x,{name:"icon-gui-check-micro",size:"1rem",additionalCSS:"ui-checkbox-styled-tick"})}),e.jsxs("label",{htmlFor:`checkbox-example-${a}`,className:"ui-checkbox-label-p1",children:["Option ",a]})]}),m=({index:a,disabled:s})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{"data-ui-radio-native":"",type:"radio",id:`radio-example-${a}`,name:"radio-example",value:`option-${a}`,className:"ui-radio",disabled:s}),e.jsxs("label",{className:"text-neutral-1300 dark:text-neutral-000",htmlFor:`radio-example-${a}`,children:["Option ",a]})]});try{p.displayName="Checkbox",p.__docgenInfo={description:"",displayName:"Checkbox",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}try{m.displayName="RadioButton",m.__docgenInfo={description:"",displayName:"RadioButton",props:{index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const v={title:"Styles/Forms"},o=e.jsxs(e.Fragment,{children:[e.jsx("option",{value:"select",disabled:!0,children:"Select language"}),e.jsx("option",{value:"javascript",children:"Javascript"}),e.jsx("option",{value:"ruby",children:"Ruby"}),e.jsx("option",{value:"python",children:"Python"}),e.jsx("option",{value:"java",children:"Java"})]}),t={render:()=>e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-neutral-800",children:"Default"}),e.jsx("input",{type:"search",className:"ui-input",placeholder:"Light mode input",autoComplete:"off"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-neutral-800",children:"Disabled"}),e.jsx("input",{type:"search",className:"ui-input disabled",placeholder:"Light mode input",autoComplete:"off",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-neutral-800",children:"Invalid"}),e.jsx("input",{type:"search",className:"ui-input disabled",placeholder:"Light mode input",autoComplete:"off",required:!0}),e.jsx("p",{className:"ui-text-p3 text-gui-error-red mt-2",children:"Oof, what an input"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-neutral-800",children:"With character insert"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"h-8 w-8 absolute left-2 top-2 flex items-center justify-center select-none cursor-default",children:"$"}),e.jsx("input",{type:"search",className:"ui-input pl-10",placeholder:"With icon",autoComplete:"off"})]})]})]})},i={render:()=>e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-neutral-800",children:"Default"}),e.jsx("select",{className:"ui-dropdown",defaultValue:"select",children:o})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-neutral-800",children:"Small"}),e.jsx("select",{className:"ui-dropdown-small",defaultValue:"select",children:o})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-neutral-800",children:"Disabled"}),e.jsx("select",{className:"ui-dropdown",defaultValue:"select",disabled:!0,children:o})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-neutral-800",children:"Synthetic"}),e.jsx("div",{className:"ui-dropdown max-w-64",tabIndex:0,role:"combobox","aria-expanded":"false","aria-controls":"language-options",children:"Select language"})]})]})},n={render:()=>e.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:["Default","Disabled"].map((a,s)=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"mb-4 text-neutral-800",children:a}),Array(3).fill(0).map((u,l)=>e.jsx(p,{index:l+s*3+1,disabled:s===1},l))]},a))})},r={render:()=>e.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:["Default","Disabled"].map((a,s)=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{className:"mb-4 text-neutral-800",children:a}),Array(3).fill(0).map((u,l)=>e.jsx(m,{index:l+s*3+1,disabled:s===1},l))]},a))})},c={render:()=>e.jsxs("div",{className:"mb-10",children:[e.jsx("label",{className:"ui-text-p1 block",htmlFor:"example-text-area",children:"Example textarea"}),e.jsx("textarea",{id:"example-text-area",className:"ui-textarea",rows:2,placeholder:"The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."}),e.jsx("p",{className:"ui-text-p3 text-dark-grey",children:"Example of additional text beneath the textarea."})]})},d={render:()=>e.jsxs("div",{className:"grid sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("label",{className:"ui-toggle",children:[e.jsx("span",{className:"sr-only",children:"Default toggle"}),e.jsx("input",{type:"checkbox"}),e.jsx("span",{className:"ui-toggle-slider"})]}),e.jsx("p",{children:"Default"})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("label",{className:"ui-toggle",children:[e.jsx("span",{className:"sr-only",children:"Pre-checked toggle"}),e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{className:"ui-toggle-slider"})]}),e.jsx("p",{children:"Pre-checked"})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("label",{className:"ui-toggle",children:[e.jsx("span",{className:"sr-only",children:"Disabled toggle"}),e.jsx("input",{type:"checkbox",disabled:!0}),e.jsx("span",{className:"ui-toggle-slider"})]}),e.jsx("p",{children:"Disabled"})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("label",{className:"ui-toggle",children:[e.jsx("span",{className:"sr-only",children:"Custom styled toggle"}),e.jsx("input",{type:"checkbox",className:"peer"}),e.jsx("span",{className:"ui-toggle-slider peer-checked:!bg-pink-600 bg-blue-800"})]}),e.jsx("p",{children:"Custom color"})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <p className="mb-4 text-neutral-800">Default</p>
        <input type="search" className="ui-input" placeholder="Light mode input" autoComplete="off" />
      </div>
      <div>
        <p className="mb-4 text-neutral-800">Disabled</p>
        <input type="search" className="ui-input disabled" placeholder="Light mode input" autoComplete="off" disabled />
      </div>
      <div>
        <p className="mb-4 text-neutral-800">Invalid</p>
        <input type="search" className="ui-input disabled" placeholder="Light mode input" autoComplete="off" required />
        <p className="ui-text-p3 text-gui-error-red mt-2">Oof, what an input</p>
      </div>
      <div>
        <p className="mb-4 text-neutral-800">With character insert</p>
        <div className="relative">
          <div className="h-8 w-8 absolute left-2 top-2 flex items-center justify-center select-none cursor-default">
            $
          </div>
          <input type="search" className="ui-input pl-10" placeholder="With icon" autoComplete="off" />
        </div>
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <p className="mb-4 text-neutral-800">Default</p>
        <select className="ui-dropdown" defaultValue="select">
          {exampleOptionFields}
        </select>
      </div>
      <div>
        <p className="mb-4 text-neutral-800">Small</p>
        <select className="ui-dropdown-small" defaultValue="select">
          {exampleOptionFields}
        </select>
      </div>
      <div>
        <p className="mb-4 text-neutral-800">Disabled</p>
        <select className="ui-dropdown" defaultValue="select" disabled>
          {exampleOptionFields}
        </select>
      </div>
      <div>
        <p className="mb-4 text-neutral-800">Synthetic</p>
        <div className="ui-dropdown max-w-64" tabIndex={0} role="combobox" aria-expanded="false" aria-controls="language-options">
          Select language
        </div>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid sm:grid-cols-2 gap-4">
      {["Default", "Disabled"].map((label, groupIndex) => <div key={label} className="flex flex-col gap-2">
          <p className="mb-4 text-neutral-800">{label}</p>
          {Array(3).fill(0).map((_, i) => <Checkbox key={i} index={i + groupIndex * 3 + 1} disabled={groupIndex === 1} />)}
        </div>)}
    </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid sm:grid-cols-2 gap-4">
      {["Default", "Disabled"].map((label, groupIndex) => <div key={label} className="flex flex-col gap-2">
          <p className="mb-4 text-neutral-800">{label}</p>
          {Array(3).fill(0).map((_, i) => <RadioButton key={i} index={i + groupIndex * 3 + 1} disabled={groupIndex === 1} />)}
        </div>)}
    </div>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="mb-10">
      <label className="ui-text-p1 block" htmlFor="example-text-area">
        Example textarea
      </label>
      <textarea id="example-text-area" className="ui-textarea" rows={2} placeholder="The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form."></textarea>
      <p className="ui-text-p3 text-dark-grey">
        Example of additional text beneath the textarea.
      </p>
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid sm:grid-cols-2 gap-4">
      <div className="flex gap-4 items-center">
        <label className="ui-toggle">
          <span className="sr-only">Default toggle</span>
          <input type="checkbox" />
          <span className="ui-toggle-slider" />
        </label>
        <p>Default</p>
      </div>
      <div className="flex gap-4 items-center">
        <label className="ui-toggle">
          <span className="sr-only">Pre-checked toggle</span>
          <input type="checkbox" defaultChecked />
          <span className="ui-toggle-slider" />
        </label>
        <p>Pre-checked</p>
      </div>
      <div className="flex gap-4 items-center">
        <label className="ui-toggle">
          <span className="sr-only">Disabled toggle</span>
          <input type="checkbox" disabled />
          <span className="ui-toggle-slider" />
        </label>
        <p>Disabled</p>
      </div>
      <div className="flex gap-4 items-center">
        <label className="ui-toggle">
          <span className="sr-only">Custom styled toggle</span>
          <input type="checkbox" className="peer" />
          <span className="ui-toggle-slider peer-checked:!bg-pink-600 bg-blue-800" />
        </label>
        <p>Custom color</p>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const j=["Inputs","Dropdowns","Checkboxes","RadioButtons","Textareas","Toggles"];export{n as Checkboxes,i as Dropdowns,t as Inputs,r as RadioButtons,c as Textareas,d as Toggles,j as __namedExportsOrder,v as default};
