import{i as e}from"./preload-helper-CT_b8DTk.js";import{Jt as t}from"./iframe-CKFKr-bK.js";import{t as n}from"./jsx-runtime-P1stK3o1.js";import{n as r,t as i}from"./cn-nhyqQX1a.js";import{n as a,t as o}from"./TabMenu-C1yYV5vZ.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),a(),r(),s=n(),c={title:`Components/Tab Menu`,component:o},l=e=>(0,s.jsx)(`div`,{className:i({"h-40":e.options?.flexibleTabHeight}),children:(0,s.jsx)(o,{...e})}),u=({children:e})=>(0,s.jsx)(`div`,{className:`p-2 border border-neutral-200 mt-4 rounded-lg`,children:e}),d=[`Tab 1`,`Tab 2`,`Tab 3`],f=l.bind({}),f.args={tabs:[`Long Tab 1`,`Long Long Tab 2`,`Tab 3`],contents:[(0,s.jsx)(u,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`},`content-1`),(0,s.jsx)(u,{children:`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;`},`content-2`),(0,s.jsx)(u,{children:`Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.`},`content-3`)]},p=l.bind({}),p.args={tabs:d,options:{defaultTabIndex:1}},p.parameters={docs:{description:{story:"This story demonstrates tabs with a default active tab. The second tab is active by default. Set the default active tab index with `defaultTabIndex` on `options`."}}},m=l.bind({}),m.args={tabs:d,tabOnClick:e=>{alert(`Tab ${e+1} clicked`)}},m.parameters={docs:{description:{story:`This story demonstrates tabs with no content and click events. Clicking on a tab will call a callback with the tab index as the argument.`}}},h=l.bind({}),h.args={tabs:[{label:`Tab 1`,disabled:!1},{label:`Tab 2`,disabled:!0},{label:`Tab 3`}]},h.parameters={docs:{description:{story:"This story demonstrates tabs with some of them disabled. The second tab is disabled and cannot be clicked. Disable a tab by including an object with a `label` and `disabled` property to the `tabs` array instead of a string."}}},g=l.bind({}),g.args={tabs:d,options:{flexibleTabWidth:!0,flexibleTabHeight:!0}},g.parameters={docs:{description:{story:"This story demonstrates tabs with flexible dimensions. The tabs will adjust their width and height based on the content. Activate with `flexibleTabWidth` and `flexibleTabHeight` on `options`."}}},_=l.bind({}),_.args={tabs:d,options:{animated:!1}},_.parameters={docs:{description:{story:"This story demonstrates tabs without animated highlights. The tab highlight will not animate when switching tabs. On by default, disable with `animated` on `options`."}}},v=l.bind({}),v.args={tabs:[(0,s.jsx)(`a`,{href:`#tab-1`,children:`Tab 1`},`tab-1`),(0,s.jsx)(`a`,{href:`#tab-2`,children:`Tab 2`},`tab-2`),(0,s.jsx)(`a`,{href:`#tab-3`,children:`Tab 3`},`tab-3`)]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <div className={cn({
  "h-40": args.options?.flexibleTabHeight
})}>
    <TabMenu {...args} />
  </div>`,...v.parameters?.docs?.source}}},y=[`Default`,`WithDefaultActiveTab`,`WithNoContentAndClickEvents`,`WithDisabledTabs`,`WithFlexibleTabDimensions`,`WithNoAnimatedHighlight`,`WithCustomTabContent`]}))();export{f as Default,v as WithCustomTabContent,p as WithDefaultActiveTab,h as WithDisabledTabs,g as WithFlexibleTabDimensions,_ as WithNoAnimatedHighlight,m as WithNoContentAndClickEvents,y as __namedExportsOrder,c as default};