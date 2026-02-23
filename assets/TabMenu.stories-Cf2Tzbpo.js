import{j as e}from"./jsx-runtime-BX7wYO_o.js";import{T as m}from"./TabMenu-C80SWDse.js";import{c as h}from"./cn-Dw6GJglA.js";import"./iframe-BhqeG6ro.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dc_FVRD7.js";import"./index-ccvHsI_W.js";import"./index-ClGs55ML.js";import"./index-D1K5EYwF.js";import"./index-zjP4QPa9.js";import"./index-BcF6evE-.js";import"./index-zxaKzrmR.js";import"./index-DlbrPz2R.js";import"./throttle-BORCkuMQ.js";const M={title:"Components/Tab Menu",component:m},a=t=>e.jsx("div",{className:h({"h-40":t.options?.flexibleTabHeight}),children:e.jsx(m,{...t})}),b=({children:t})=>e.jsx("div",{className:"p-2 border border-neutral-200 mt-4 rounded-lg",children:t}),d=["Tab 1","Tab 2","Tab 3"],c=a.bind({});c.args={tabs:["Long Tab 1","Long Long Tab 2","Tab 3"],contents:[e.jsx(b,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},"content-1"),e.jsx(b,{children:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"},"content-2"),e.jsx(b,{children:"Curabitur non nulla sit amet nisl tempus convallis quis ac lectus."},"content-3")]};const s=a.bind({});s.args={tabs:d,options:{defaultTabIndex:1}};s.parameters={docs:{description:{story:"This story demonstrates tabs with a default active tab. The second tab is active by default. Set the default active tab index with `defaultTabIndex` on `options`."}}};const i=a.bind({});i.args={tabs:d,tabOnClick:t=>{alert(`Tab ${t+1} clicked`)}};i.parameters={docs:{description:{story:"This story demonstrates tabs with no content and click events. Clicking on a tab will call a callback with the tab index as the argument."}}};const r=a.bind({});r.args={tabs:[{label:"Tab 1",disabled:!1},{label:"Tab 2",disabled:!0},{label:"Tab 3"}]};r.parameters={docs:{description:{story:"This story demonstrates tabs with some of them disabled. The second tab is disabled and cannot be clicked. Disable a tab by including an object with a `label` and `disabled` property to the `tabs` array instead of a string."}}};const n=a.bind({});n.args={tabs:d,options:{flexibleTabWidth:!0,flexibleTabHeight:!0}};n.parameters={docs:{description:{story:"This story demonstrates tabs with flexible dimensions. The tabs will adjust their width and height based on the content. Activate with `flexibleTabWidth` and `flexibleTabHeight` on `options`."}}};const o=a.bind({});o.args={tabs:d,options:{animated:!1}};o.parameters={docs:{description:{story:"This story demonstrates tabs without animated highlights. The tab highlight will not animate when switching tabs. On by default, disable with `animated` on `options`."}}};const l=a.bind({});l.args={tabs:[e.jsx("a",{href:"#tab-1",children:"Tab 1"},"tab-1"),e.jsx("a",{href:"#tab-2",children:"Tab 2"},"tab-2"),e.jsx("a",{href:"#tab-3",children:"Tab 3"},"tab-3")]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...l.parameters?.docs?.source}}};const D=["Default","WithDefaultActiveTab","WithNoContentAndClickEvents","WithDisabledTabs","WithFlexibleTabDimensions","WithNoAnimatedHighlight","WithCustomTabContent"];export{c as Default,l as WithCustomTabContent,s as WithDefaultActiveTab,r as WithDisabledTabs,n as WithFlexibleTabDimensions,o as WithNoAnimatedHighlight,i as WithNoContentAndClickEvents,D as __namedExportsOrder,M as default};
