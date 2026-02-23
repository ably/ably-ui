import{j as e}from"./jsx-runtime-BX7wYO_o.js";import"./iframe-BhqeG6ro.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Styles/Layout"},n={render:()=>e.jsx("div",{className:"ui-standard-container mb-8",children:e.jsx("div",{className:"bg-mid-grey align-center p-8",children:e.jsx("p",{className:"ui-text-h3 text-center",children:"ui-standard-container"})})}),parameters:{docs:{description:{story:"Container that does not grow beyond the xl breakpoint (1440px), centers and contains the correct outside padding across viewport changes. Usage: `.ui-standard-container`"}}}},a={render:()=>e.jsx("div",{className:"ui-standard-container mb-8",children:e.jsx("div",{className:"bg-mid-grey align-center p-8",children:e.jsxs("div",{className:"grid grid-cols-4 ui-grid-gap",children:[e.jsx("div",{className:"bg-cool-black text-white font-sans p-8 text-center",children:"1"}),e.jsx("div",{className:"bg-cool-black text-white font-sans p-8 text-center",children:"2"}),e.jsx("div",{className:"bg-cool-black text-white font-sans p-8 text-center",children:"3"}),e.jsx("div",{className:"bg-cool-black text-white font-sans p-8 text-center",children:"4"})]})})}),parameters:{docs:{description:{story:"Add correct gaps across viewport changes. Usage: `.ui-grid-gap`"}}}},r={render:()=>e.jsx("div",{className:"ui-standard-container mb-8",children:e.jsx("div",{className:"bg-mid-grey align-center p-8",children:e.jsx("div",{className:"ui-grid-px",children:e.jsx("div",{className:"bg-cool-black text-white font-sans p-8 text-center",children:"Text"})})})}),parameters:{docs:{description:{story:"Add padding on the x axis, with correct values across viewport changes. Usage: `.ui-grid-px`"}}}},t={render:()=>e.jsx("div",{className:"ui-standard-container mb-8",children:e.jsx("div",{className:"bg-mid-grey align-center p-8",children:e.jsx("div",{className:"ui-grid-mx",children:e.jsx("div",{className:"bg-cool-black text-white font-sans p-8 text-center",children:"Text"})})})}),parameters:{docs:{description:{story:"Add margin on the x axis, with correct values across viewport changes. Usage: `.ui-grid-mx`"}}}},s={render:()=>e.jsx("div",{className:"overflow-x-hidden",children:e.jsx("div",{className:"ui-standard-container mb-8",children:e.jsx("div",{className:"bg-[linear-gradient(to_right,cyan_49.9%,blue_50%,cyan_50.1%)] align-center p-8 ui-full-container-override text-white",children:e.jsx("div",{children:[...Array(20)].map((o,d)=>e.jsx("span",{className:"mx-2 rounded-lg bg-cool-black p-4",children:"Content"},d))})})})}),parameters:{docs:{description:{story:"Somewhat niche override for situations where you would like an element to break out from inside a container and occupy the whole width of the page. The dark blue line here shows that the element is centered, but the content starts from the left hand edge.\n\nPlace on an element that is a child of `.ui-standard-container`.\n\nUsage: `.ui-full-container-override`"}}}},i={render:()=>e.jsx("div",{className:"overflow-x-hidden",children:e.jsx("div",{className:"ui-standard-container mb-8",children:e.jsx("div",{className:"bg-[linear-gradient(to_right,cyan_49.9%,blue_50%,cyan_50.1%)] align-center p-8 ui-full-borderless-container-override text-white",children:e.jsx("div",{className:"text-center",children:[...Array(20)].map((o,d)=>e.jsx("span",{className:"mx-2 rounded-lg bg-cool-black p-4",children:"Content"},d))})})})}),parameters:{docs:{description:{story:"Even more niche application where you would like an element to break out from a standard container, but without the constraints of the window width. The dark blue line here shows that the element is centered (it's more blurry as the 'element' is far wider to achieve the borderless effect).\n\nPlace on an element that is a child of `.ui-standard-container`, and ensure that the container is within an element with `overflow:hidden` or something of that ilk.\n\nUsage: `.ui-full-borderless-container-override`"}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="ui-standard-container mb-8">
      <div className="bg-mid-grey align-center p-8">
        <p className="ui-text-h3 text-center">ui-standard-container</p>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Container that does not grow beyond the xl breakpoint (1440px), centers and contains the correct outside padding across viewport changes. Usage: \`.ui-standard-container\`"
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="ui-standard-container mb-8">
      <div className="bg-mid-grey align-center p-8">
        <div className="grid grid-cols-4 ui-grid-gap">
          <div className="bg-cool-black text-white font-sans p-8 text-center">
            1
          </div>
          <div className="bg-cool-black text-white font-sans p-8 text-center">
            2
          </div>
          <div className="bg-cool-black text-white font-sans p-8 text-center">
            3
          </div>
          <div className="bg-cool-black text-white font-sans p-8 text-center">
            4
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Add correct gaps across viewport changes. Usage: \`.ui-grid-gap\`"
      }
    }
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="ui-standard-container mb-8">
      <div className="bg-mid-grey align-center p-8">
        <div className="ui-grid-px">
          <div className="bg-cool-black text-white font-sans p-8 text-center">
            Text
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Add padding on the x axis, with correct values across viewport changes. Usage: \`.ui-grid-px\`"
      }
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="ui-standard-container mb-8">
      <div className="bg-mid-grey align-center p-8">
        <div className="ui-grid-mx">
          <div className="bg-cool-black text-white font-sans p-8 text-center">
            Text
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Add margin on the x axis, with correct values across viewport changes. Usage: \`.ui-grid-mx\`"
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="overflow-x-hidden">
      <div className="ui-standard-container mb-8">
        <div className="bg-[linear-gradient(to_right,cyan_49.9%,blue_50%,cyan_50.1%)] align-center p-8 ui-full-container-override text-white">
          <div>
            {[...Array(20)].map((_, i) => <span className="mx-2 rounded-lg bg-cool-black p-4" key={i}>
                Content
              </span>)}
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Somewhat niche override for situations where you would like an element to break out from inside a container and occupy the whole width of the page. The dark blue line here shows that the element is centered, but the content starts from the left hand edge.\\n\\nPlace on an element that is a child of \`.ui-standard-container\`.\\n\\nUsage: \`.ui-full-container-override\`"
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="overflow-x-hidden">
      <div className="ui-standard-container mb-8">
        <div className="bg-[linear-gradient(to_right,cyan_49.9%,blue_50%,cyan_50.1%)] align-center p-8 ui-full-borderless-container-override text-white">
          <div className="text-center">
            {[...Array(20)].map((_, i) => <span className="mx-2 rounded-lg bg-cool-black p-4" key={i}>
                Content
              </span>)}
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Even more niche application where you would like an element to break out from a standard container, but without the constraints of the window width. The dark blue line here shows that the element is centered (it's more blurry as the 'element' is far wider to achieve the borderless effect).\\n\\nPlace on an element that is a child of \`.ui-standard-container\`, and ensure that the container is within an element with \`overflow:hidden\` or something of that ilk.\\n\\nUsage: \`.ui-full-borderless-container-override\`"
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const p=["StandardContainer","GridGap","GridPX","GridMX","FullContainerOverride","FullBorderlessContainerOverride"];export{i as FullBorderlessContainerOverride,s as FullContainerOverride,a as GridGap,t as GridMX,r as GridPX,n as StandardContainer,p as __namedExportsOrder,h as default};
