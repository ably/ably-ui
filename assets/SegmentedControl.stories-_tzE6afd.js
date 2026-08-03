import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Jt as n}from"./iframe-BwCxeFni.js";import{t as r}from"./jsx-runtime-TD5IgBxr.js";import{n as i,t as a}from"./Badge-GCDVcNFQ.js";import{n as o,t as s}from"./SegmentedControl-DeSqwtlM.js";var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{c=t(n()),o(),i(),l=r(),u={title:`Components/Segmented Control`,component:s,parameters:{layout:`centered`,docs:{description:{component:`The SegmentedControl component provides a container for content with optional
rounded corners and icons on either side. It's useful for creating toggle-like
controls, tabs, or any segmented interface element that needs visual distinction.
The component supports customization through props for rounded corners and
icons on the left and/or right sides.`}}},tags:[`autodocs`]},d=e=>{let[t,n]=c.useState(0);return(0,l.jsx)(`div`,{className:`flex flex-col sm:flex-row gap-2`,children:[`md`,`sm`,`xs`].map(r=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,l.jsx)(`div`,{className:`flex flex-col items-center`,children:(0,l.jsx)(a,{className:`mb-2`,children:r})}),(0,l.jsx)(`div`,{className:`flex gap-2 justify-center items-center p-2 border rounded-lg`,children:[0,1].map(i=>(0,l.jsxs)(s,{size:r,active:t===i,onClick:()=>n(i),...e,children:[`Option `,i+1]},i))},r)]},r))})},f={render:()=>(0,l.jsx)(d,{})},p={render:()=>(0,l.jsx)(`div`,{className:`bg-neutral-100 dark:bg-neutral-1200 rounded-lg p-4`,children:(0,l.jsx)(d,{variant:`subtle`})})},m={render:()=>(0,l.jsx)(`div`,{className:`bg-neutral-100 dark:bg-neutral-1200 rounded-lg p-4`,children:(0,l.jsx)(d,{variant:`strong`})})},h={render:()=>(0,l.jsx)(d,{leftIcon:`icon-tech-javascript`})},g={render:()=>(0,l.jsx)(d,{rightIcon:`icon-tech-javascript`})},_={render:()=>(0,l.jsx)(d,{disabled:!0})},v={render:()=>(0,l.jsx)(d,{rounded:!0})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlGrid />
}`,...f.parameters?.docs?.source},description:{story:`The default variant of the SegmentedControl component displays a grid of controls
in three different sizes (md, sm, xs) with the default styling.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-neutral-100 dark:bg-neutral-1200 rounded-lg p-4">
      <SegmentedControlGrid variant="subtle" />
    </div>
}`,...p.parameters?.docs?.source},description:{story:`The subtle variant of the SegmentedControl component provides a more appropriate styling
for n100/n1200 backgrounds.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-neutral-100 dark:bg-neutral-1200 rounded-lg p-4">
      <SegmentedControlGrid variant="strong" />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`The strong variant of the SegmentedControl component provides more visual contrast
and is displayed against a neutral background to highlight the difference in styling.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlGrid leftIcon="icon-tech-javascript" />
}`,...h.parameters?.docs?.source},description:{story:`This example shows the SegmentedControl with an icon positioned on the left side
of the text content, demonstrating how icons can enhance visual communication.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlGrid rightIcon="icon-tech-javascript" />
}`,...g.parameters?.docs?.source},description:{story:`This example shows the SegmentedControl with an icon positioned on the right side
of the text content, useful for indicating actions or additional information.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlGrid disabled />
}`,..._.parameters?.docs?.source},description:{story:`The disabled state of the SegmentedControl shows how the component appears when
it's not interactive, with muted colors and a not-allowed cursor.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlGrid rounded />
}`,...v.parameters?.docs?.source},description:{story:`This variant shows the SegmentedControl with fully rounded corners (pill shape),
which can be useful for certain design aesthetics or to visually distinguish
different types of controls.`,...v.parameters?.docs?.description}}},y=[`DefaultVariant`,`SubtleVariant`,`StrongVariant`,`WithLeftIcon`,`WithRightIcon`,`Disabled`,`Rounded`]}))();export{f as DefaultVariant,_ as Disabled,v as Rounded,m as StrongVariant,p as SubtleVariant,h as WithLeftIcon,g as WithRightIcon,y as __namedExportsOrder,u as default};