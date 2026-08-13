import{i as e}from"./preload-helper-CT_b8DTk.js";import{Jt as t}from"./iframe-B9InDt9-.js";import{t as n}from"./jsx-runtime-CauIFuYy.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),r=n(),i={title:`Styles/Layout`},a={render:()=>(0,r.jsx)(`div`,{className:`ui-standard-container mb-8`,children:(0,r.jsx)(`div`,{className:`bg-mid-grey align-center p-8`,children:(0,r.jsx)(`p`,{className:`ui-text-h3 text-center`,children:`ui-standard-container`})})}),parameters:{docs:{description:{story:"Container that does not grow beyond the xl breakpoint (1440px), centers and contains the correct outside padding across viewport changes. Usage: `.ui-standard-container`"}}}},o={render:()=>(0,r.jsx)(`div`,{className:`ui-standard-container mb-8`,children:(0,r.jsx)(`div`,{className:`bg-mid-grey align-center p-8`,children:(0,r.jsxs)(`div`,{className:`grid grid-cols-4 ui-grid-gap`,children:[(0,r.jsx)(`div`,{className:`bg-cool-black text-white font-sans p-8 text-center`,children:`1`}),(0,r.jsx)(`div`,{className:`bg-cool-black text-white font-sans p-8 text-center`,children:`2`}),(0,r.jsx)(`div`,{className:`bg-cool-black text-white font-sans p-8 text-center`,children:`3`}),(0,r.jsx)(`div`,{className:`bg-cool-black text-white font-sans p-8 text-center`,children:`4`})]})})}),parameters:{docs:{description:{story:"Add correct gaps across viewport changes. Usage: `.ui-grid-gap`"}}}},s={render:()=>(0,r.jsx)(`div`,{className:`ui-standard-container mb-8`,children:(0,r.jsx)(`div`,{className:`bg-mid-grey align-center p-8`,children:(0,r.jsx)(`div`,{className:`ui-grid-px`,children:(0,r.jsx)(`div`,{className:`bg-cool-black text-white font-sans p-8 text-center`,children:`Text`})})})}),parameters:{docs:{description:{story:"Add padding on the x axis, with correct values across viewport changes. Usage: `.ui-grid-px`"}}}},c={render:()=>(0,r.jsx)(`div`,{className:`ui-standard-container mb-8`,children:(0,r.jsx)(`div`,{className:`bg-mid-grey align-center p-8`,children:(0,r.jsx)(`div`,{className:`ui-grid-mx`,children:(0,r.jsx)(`div`,{className:`bg-cool-black text-white font-sans p-8 text-center`,children:`Text`})})})}),parameters:{docs:{description:{story:"Add margin on the x axis, with correct values across viewport changes. Usage: `.ui-grid-mx`"}}}},l={render:()=>(0,r.jsx)(`div`,{className:`overflow-x-hidden`,children:(0,r.jsx)(`div`,{className:`ui-standard-container mb-8`,children:(0,r.jsx)(`div`,{className:`bg-[linear-gradient(to_right,cyan_49.9%,blue_50%,cyan_50.1%)] align-center p-8 ui-full-container-override text-white`,children:(0,r.jsx)(`div`,{children:[...Array(20)].map((e,t)=>(0,r.jsx)(`span`,{className:`mx-2 rounded-lg bg-cool-black p-4`,children:`Content`},t))})})})}),parameters:{docs:{description:{story:`Somewhat niche override for situations where you would like an element to break out from inside a container and occupy the whole width of the page. The dark blue line here shows that the element is centered, but the content starts from the left hand edge.

Place on an element that is a child of \`.ui-standard-container\`.

Usage: \`.ui-full-container-override\``}}}},u={render:()=>(0,r.jsx)(`div`,{className:`overflow-x-hidden`,children:(0,r.jsx)(`div`,{className:`ui-standard-container mb-8`,children:(0,r.jsx)(`div`,{className:`bg-[linear-gradient(to_right,cyan_49.9%,blue_50%,cyan_50.1%)] align-center p-8 ui-full-borderless-container-override text-white`,children:(0,r.jsx)(`div`,{className:`text-center`,children:[...Array(20)].map((e,t)=>(0,r.jsx)(`span`,{className:`mx-2 rounded-lg bg-cool-black p-4`,children:`Content`},t))})})})}),parameters:{docs:{description:{story:"Even more niche application where you would like an element to break out from a standard container, but without the constraints of the window width. The dark blue line here shows that the element is centered (it's more blurry as the 'element' is far wider to achieve the borderless effect).\n\nPlace on an element that is a child of `.ui-standard-container`, and ensure that the container is within an element with `overflow:hidden` or something of that ilk.\n\nUsage: `.ui-full-borderless-container-override`"}}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`StandardContainer`,`GridGap`,`GridPX`,`GridMX`,`FullContainerOverride`,`FullBorderlessContainerOverride`]}))();export{u as FullBorderlessContainerOverride,l as FullContainerOverride,o as GridGap,c as GridMX,s as GridPX,a as StandardContainer,d as __namedExportsOrder,i as default};