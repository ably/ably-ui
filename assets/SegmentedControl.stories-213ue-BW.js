import{j as e}from"./jsx-runtime-CZ2sIMGp.js";import{R as g}from"./iframe-uAgQpGx3.js";import{S as m}from"./SegmentedControl-BFqgYm3t.js";import{B as f}from"./Badge-CONoLHaS.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-Dw6GJglA.js";import"./Icon-CQE5WZJ9.js";const w={title:"Components/Segmented Control",component:m,parameters:{layout:"centered",docs:{description:{component:`The SegmentedControl component provides a container for content with optional
rounded corners and icons on either side. It's useful for creating toggle-like
controls, tabs, or any segmented interface element that needs visual distinction.
The component supports customization through props for rounded corners and
icons on the left and/or right sides.`}}},tags:["autodocs"]},r=p=>{const[u,h]=g.useState(0);return e.jsx("div",{className:"flex flex-col sm:flex-row gap-2",children:["md","sm","xs"].map(c=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"flex flex-col items-center",children:e.jsx(f,{className:"mb-2",children:c})}),e.jsx("div",{className:"flex gap-2 justify-center items-center p-2 border rounded-lg",children:[0,1].map(l=>e.jsxs(m,{size:c,active:u===l,onClick:()=>h(l),...p,children:["Option ",l+1]},l))},c)]},c))})},t={render:()=>e.jsx(r,{})},o={render:()=>e.jsx("div",{className:"bg-neutral-100 dark:bg-neutral-1200 rounded-lg p-4",children:e.jsx(r,{variant:"subtle"})})},n={render:()=>e.jsx("div",{className:"bg-neutral-100 dark:bg-neutral-1200 rounded-lg p-4",children:e.jsx(r,{variant:"strong"})})},s={render:()=>e.jsx(r,{leftIcon:"icon-tech-javascript"})},a={render:()=>e.jsx(r,{rightIcon:"icon-tech-javascript"})},i={render:()=>e.jsx(r,{disabled:!0})},d={render:()=>e.jsx(r,{rounded:!0})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlGrid />
}`,...t.parameters?.docs?.source},description:{story:`The default variant of the SegmentedControl component displays a grid of controls
in three different sizes (md, sm, xs) with the default styling.`,...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-neutral-100 dark:bg-neutral-1200 rounded-lg p-4">
      <SegmentedControlGrid variant="subtle" />
    </div>
}`,...o.parameters?.docs?.source},description:{story:`The subtle variant of the SegmentedControl component provides a more appropriate styling
for n100/n1200 backgrounds.`,...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-neutral-100 dark:bg-neutral-1200 rounded-lg p-4">
      <SegmentedControlGrid variant="strong" />
    </div>
}`,...n.parameters?.docs?.source},description:{story:`The strong variant of the SegmentedControl component provides more visual contrast
and is displayed against a neutral background to highlight the difference in styling.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlGrid leftIcon="icon-tech-javascript" />
}`,...s.parameters?.docs?.source},description:{story:`This example shows the SegmentedControl with an icon positioned on the left side
of the text content, demonstrating how icons can enhance visual communication.`,...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlGrid rightIcon="icon-tech-javascript" />
}`,...a.parameters?.docs?.source},description:{story:`This example shows the SegmentedControl with an icon positioned on the right side
of the text content, useful for indicating actions or additional information.`,...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlGrid disabled />
}`,...i.parameters?.docs?.source},description:{story:`The disabled state of the SegmentedControl shows how the component appears when
it's not interactive, with muted colors and a not-allowed cursor.`,...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControlGrid rounded />
}`,...d.parameters?.docs?.source},description:{story:`This variant shows the SegmentedControl with fully rounded corners (pill shape),
which can be useful for certain design aesthetics or to visually distinguish
different types of controls.`,...d.parameters?.docs?.description}}};const I=["DefaultVariant","SubtleVariant","StrongVariant","WithLeftIcon","WithRightIcon","Disabled","Rounded"];export{t as DefaultVariant,i as Disabled,d as Rounded,n as StrongVariant,o as SubtleVariant,s as WithLeftIcon,a as WithRightIcon,I as __namedExportsOrder,w as default};
