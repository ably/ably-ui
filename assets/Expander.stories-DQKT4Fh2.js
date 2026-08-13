import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Jt as n}from"./iframe-B9InDt9-.js";import{t as r}from"./jsx-runtime-CauIFuYy.js";import{a as i,n as a,r as o}from"./dist-BH6sKjHh.js";import{n as s,t as c}from"./Icon-CXGm94Za.js";import{n as l,t as u}from"./cn-nhyqQX1a.js";function d(e,t=0){let[n,r]=(0,f.useState)(t),i=(0,f.useRef)(null),a=(0,f.useRef)(null);return(0,f.useEffect)(()=>{let t=e.current;if(!t)return;let n=!0;return i.current=new ResizeObserver(e=>{a.current!==null&&cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>{if(a.current=null,!n)return;let t=e[0];if(t&&t.contentRect){let e=Math.round(t.contentRect.height);r(e)}})}),i.current.observe(t),()=>{n=!1,a.current!==null&&(cancelAnimationFrame(a.current),a.current=null),i.current?.disconnect(),i.current=null}},[e]),n}var f,p=e((()=>{f=t(n())})),m,h,g,_=e((()=>{m=t(n()),i(),l(),p(),h=r(),g=({heightThreshold:e=200,className:t,fadeClassName:n,controlsClassName:r,controlsOpenedLabel:i,controlsClosedLabel:s,children:c})=>{let l=(0,m.useRef)(null),[f,p]=(0,m.useState)(!1),g=d(l,e),_=(0,m.useMemo)(()=>g>=e,[g,e]),v=(0,m.useMemo)(()=>g<e?`auto`:f?g:e,[g,e,f]);return(0,h.jsxs)(a,{open:f,onOpenChange:p,children:[(0,h.jsxs)(`div`,{style:{height:v},"data-testid":`expander-container`,className:u(`overflow-hidden transition-all relative`,t),children:[_&&!f&&(0,h.jsx)(`div`,{className:u(`h-16 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 right-0`,n)}),(0,h.jsx)(`div`,{ref:l,children:c})]}),_&&(0,h.jsx)(o,{asChild:!0,children:(0,h.jsx)(`button`,{"data-testid":`expander-controls`,className:u(e===0&&!f?``:`mt-4`,`cursor-pointer font-bold text-gui-blue-default-light hover:text-gui-blue-hover-light focus-base transition-colors`,r),children:f?i??`View less -`:s??`View all +`})})]})};try{g.displayName=`Expander`,g.__docgenInfo={description:``,displayName:`Expander`,filePath:`/home/runner/work/website/website/packages/ui/src/core/Expander.tsx`,methods:[],props:{heightThreshold:{defaultValue:{value:`200`},declarations:[{fileName:`ui/src/core/Expander.tsx`,name:`TypeLiteral`}],description:``,name:`heightThreshold`,required:!1,tags:{},type:{name:`number`}},className:{defaultValue:null,declarations:[{fileName:`ui/src/core/Expander.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string`}},fadeClassName:{defaultValue:null,declarations:[{fileName:`ui/src/core/Expander.tsx`,name:`TypeLiteral`}],description:``,name:`fadeClassName`,required:!1,tags:{},type:{name:`string`}},controlsClassName:{defaultValue:null,declarations:[{fileName:`ui/src/core/Expander.tsx`,name:`TypeLiteral`}],description:``,name:`controlsClassName`,required:!1,tags:{},type:{name:`string`}},controlsOpenedLabel:{defaultValue:null,declarations:[{fileName:`ui/src/core/Expander.tsx`,name:`TypeLiteral`}],description:``,name:`controlsOpenedLabel`,required:!1,tags:{},type:{name:`ReactNode`}},controlsClosedLabel:{defaultValue:null,declarations:[{fileName:`ui/src/core/Expander.tsx`,name:`TypeLiteral`}],description:``,name:`controlsClosedLabel`,required:!1,tags:{},type:{name:`ReactNode`}}},tags:{}}}catch{}})),v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{n(),_(),s(),v=r(),{userEvent:y,within:b,expect:x,waitFor:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/Expander`,component:g,tags:[`autodocs`],args:{height:200},argTypes:{height:{control:{type:`number`}}}},w=(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{children:`Ipsum`}),(0,v.jsxs)(`ul`,{className:`mb-4 list-inside list-disc`,children:[(0,v.jsx)(`li`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,v.jsx)(`li`,{children:`Sed convallis ex pharetra, tristique tellus vel, rhoncus velit.`}),(0,v.jsx)(`li`,{children:`Mauris molestie felis et scelerisque ullamcorper.`}),(0,v.jsx)(`li`,{children:`Maecenas congue ligula ut commodo tristique.`}),(0,v.jsx)(`li`,{children:`Pellentesque venenatis elit vitae urna condimentum, in mollis arcu venenatis.`}),(0,v.jsx)(`li`,{children:`Donec nec turpis vel urna egestas fringilla.`})]}),(0,v.jsx)(`p`,{children:`Ipsum`}),(0,v.jsxs)(`ul`,{className:`mb-4 list-inside list-disc`,children:[(0,v.jsx)(`li`,{children:`Mauris ut nibh vel metus cursus semper.`}),(0,v.jsx)(`li`,{children:`Ut mattis tortor eu urna accumsan gravida.`}),(0,v.jsx)(`li`,{children:`Nunc pellentesque neque at elit pretium tempor.`}),(0,v.jsx)(`li`,{children:`Curabitur finibus magna vitae nunc varius fermentum.`})]}),(0,v.jsxs)(`ul`,{className:`mb-4 list-inside list-disc`,children:[(0,v.jsx)(`li`,{children:`Curabitur vehicula mi iaculis, luctus augue eu, venenatis quam.`}),(0,v.jsx)(`li`,{children:`Praesent in eros efficitur, consequat ante eu, faucibus arcu.`}),(0,v.jsx)(`li`,{children:`Nulla laoreet nibh a odio interdum, non molestie diam auctor.`})]}),(0,v.jsx)(`p`,{children:`Ipsum`}),(0,v.jsxs)(`ul`,{className:`mb-4 list-inside list-disc`,children:[(0,v.jsx)(`li`,{children:`Praesent aliquam diam tincidunt, sollicitudin tortor eget, vulputate lacus.`}),(0,v.jsx)(`li`,{children:`Quisque in mi sed ex vulputate varius in a leo.`}),(0,v.jsx)(`li`,{children:`Etiam posuere dolor at tortor aliquam imperdiet.`}),(0,v.jsx)(`li`,{children:`Maecenas quis neque consequat, ultricies est sit amet, congue est.`}),(0,v.jsx)(`li`,{children:`Aenean a elit sed nibh pretium lacinia sed convallis sapien.`})]}),(0,v.jsx)(`p`,{children:`Ipsum`}),(0,v.jsxs)(`ul`,{className:`mb-4 list-inside list-disc`,children:[(0,v.jsx)(`li`,{children:`Nulla malesuada libero id dolor aliquam, non sagittis mi scelerisque.`}),(0,v.jsx)(`li`,{children:`Etiam tincidunt lacus eu diam laoreet consectetur sit amet non est.`}),(0,v.jsx)(`li`,{children:`In porta arcu nec purus tincidunt vulputate.`})]})]}),T={render:()=>(0,v.jsx)(g,{children:w}),parameters:{docs:{description:{story:`A larger amount of content that exceeds the height cut-off, controls shown.`}}}},E={render:()=>(0,v.jsx)(g,{children:(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`p`,{children:`Ipsum`}),(0,v.jsxs)(`ul`,{className:`mb-4 list-inside list-disc`,children:[(0,v.jsx)(`li`,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}),(0,v.jsx)(`li`,{children:`Sed convallis ex pharetra, tristique tellus vel, rhoncus velit.`}),(0,v.jsx)(`li`,{children:`Mauris molestie felis et scelerisque ullamcorper.`}),(0,v.jsx)(`li`,{children:`Maecenas congue ligula ut commodo tristique.`}),(0,v.jsx)(`li`,{children:`Pellentesque venenatis elit vitae urna condimentum, in mollis arcu venenatis.`}),(0,v.jsx)(`li`,{children:`Donec nec turpis vel urna egestas fringilla.`})]})]})}),parameters:{docs:{description:{story:`A smaller amount of content that doesn't exceed the height cut-off, therefore no controls shown.`}}}},D={render:()=>(0,v.jsx)(g,{className:`bg-neutral-400 p-4 rounded-lg`,fadeClassName:`from-neutral-800`,children:w}),parameters:{docs:{description:{story:`A larger amount of content, with overridden styles for the content wrapper and fader.`}}}},O={render:()=>(0,v.jsx)(g,{controlsClassName:`ui-btn text-white w-full ui-text-p1 border rounded-xl hover:text-white`,controlsOpenedLabel:(0,v.jsxs)(`span`,{className:`flex items-center gap-2`,children:[`Away with you, knave.`,` `,(0,v.jsx)(c,{color:`text-pink-500`,size:`24px`,name:`icon-gui-exclamation-triangle-outline`})]}),controlsClosedLabel:`Give me more!`,children:w}),play:async({canvasElement:e})=>{let t=b(e);await x(t.getByTestId(`expander-container`)).toHaveStyle({height:`200px`}),await S(()=>x(t.getByTestId(`expander-controls`)).toBeInTheDocument()),await y.click(t.getByTestId(`expander-controls`)),await x(t.getByTestId(`expander-controls`)).toHaveTextContent(`Away with you, knave.`),await S(()=>x(t.getByTestId(`expander-container`)).toHaveStyle({height:`664px`}))},parameters:{docs:{description:{story:`An expander with overridden styles and labels for the controls.`}}}},k={render:()=>(0,v.jsx)(g,{fadeClassName:`from-transparent`,heightThreshold:0,children:w}),parameters:{docs:{description:{story:`A fully collapsed body of content.`}}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Expander>{longContentInner}</Expander>,
  parameters: {
    docs: {
      description: {
        story: "A larger amount of content that exceeds the height cut-off, controls shown."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Expander>
      <div>
        <p>Ipsum</p>
        <ul className="mb-4 list-inside list-disc">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>
            Sed convallis ex pharetra, tristique tellus vel, rhoncus velit.
          </li>
          <li>Mauris molestie felis et scelerisque ullamcorper.</li>
          <li>Maecenas congue ligula ut commodo tristique.</li>
          <li>
            Pellentesque venenatis elit vitae urna condimentum, in mollis arcu
            venenatis.
          </li>
          <li>Donec nec turpis vel urna egestas fringilla.</li>
        </ul>
      </div>
    </Expander>,
  parameters: {
    docs: {
      description: {
        story: "A smaller amount of content that doesn't exceed the height cut-off, therefore no controls shown."
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Expander className="bg-neutral-400 p-4 rounded-lg" fadeClassName="from-neutral-800">
      {longContentInner}
    </Expander>,
  parameters: {
    docs: {
      description: {
        story: "A larger amount of content, with overridden styles for the content wrapper and fader."
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Expander controlsClassName="ui-btn text-white w-full ui-text-p1 border rounded-xl hover:text-white" controlsOpenedLabel={<span className="flex items-center gap-2">
          Away with you, knave.{" "}
          <Icon color="text-pink-500" size="24px" name="icon-gui-exclamation-triangle-outline" />
        </span>} controlsClosedLabel="Give me more!">
      {longContentInner}
    </Expander>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId("expander-container")).toHaveStyle({
      height: "200px"
    });
    await waitFor(() => expect(canvas.getByTestId("expander-controls")).toBeInTheDocument());
    await userEvent.click(canvas.getByTestId("expander-controls"));
    await expect(canvas.getByTestId("expander-controls")).toHaveTextContent("Away with you, knave.");
    await waitFor(() => expect(canvas.getByTestId("expander-container")).toHaveStyle({
      height: "664px"
    }));
  },
  parameters: {
    docs: {
      description: {
        story: "An expander with overridden styles and labels for the controls."
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Expander fadeClassName="from-transparent" heightThreshold={0}>
      {longContentInner}
    </Expander>,
  parameters: {
    docs: {
      description: {
        story: "A fully collapsed body of content."
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`LongContent`,`ShortContent`,`OverriddenContentStyles`,`OverriddenControls`,`ZeroHeightContent`]}))();export{T as LongContent,D as OverriddenContentStyles,O as OverriddenControls,E as ShortContent,k as ZeroHeightContent,A as __namedExportsOrder,C as default};