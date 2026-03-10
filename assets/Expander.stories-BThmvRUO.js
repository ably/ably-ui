import{j as e}from"./jsx-runtime-dqWd7f8W.js";import{r as a}from"./iframe-CNWbBzxM.js";import{R as q,T as I}from"./index-BfzjR-F-.js";import{c as w}from"./cn-C1g8Q-pJ.js";import{I as E}from"./Icon-f8KVpqAy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAR7x13f.js";import"./index-B9jjmq9N.js";import"./index-fhXCZ0ZR.js";import"./index-BVIJaol3.js";function S(t,n=0){const[y,j]=a.useState(n),l=a.useRef(null),r=a.useRef(null);return a.useEffect(()=>{const u=t.current;if(!u)return;let c=!0;return l.current=new ResizeObserver(s=>{r.current!==null&&cancelAnimationFrame(r.current),r.current=requestAnimationFrame(()=>{if(r.current=null,!c)return;const d=s[0];if(d&&d.contentRect){const o=Math.round(d.contentRect.height);j(o)}})}),l.current.observe(u),()=>{c=!1,r.current!==null&&(cancelAnimationFrame(r.current),r.current=null),l.current?.disconnect(),l.current=null}},[t]),y}const i=({heightThreshold:t=200,className:n,fadeClassName:y,controlsClassName:j,controlsOpenedLabel:l,controlsClosedLabel:r,children:u})=>{const c=a.useRef(null),[s,d]=a.useState(!1),o=S(c,t),b=a.useMemo(()=>o>=t,[o,t]),N=a.useMemo(()=>o<t?"auto":s?o:t,[o,t,s]);return e.jsxs(q,{open:s,onOpenChange:d,children:[e.jsxs("div",{style:{height:N},"data-testid":"expander-container",className:w("overflow-hidden transition-all relative",n),children:[b&&!s&&e.jsx("div",{className:w("h-16 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 right-0",y)}),e.jsx("div",{ref:c,children:u})]}),b&&e.jsx(I,{asChild:!0,children:e.jsx("button",{"data-testid":"expander-controls",className:w(t===0&&!s?"":"mt-4","cursor-pointer font-bold text-gui-blue-default-light hover:text-gui-blue-hover-light focus-base transition-colors",j),children:s?l??"View less -":r??"View all +"})})]})};try{i.displayName="Expander",i.__docgenInfo={description:"",displayName:"Expander",props:{heightThreshold:{defaultValue:{value:"200"},description:"",name:"heightThreshold",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fadeClassName:{defaultValue:null,description:"",name:"fadeClassName",required:!1,type:{name:"string"}},controlsClassName:{defaultValue:null,description:"",name:"controlsClassName",required:!1,type:{name:"string"}},controlsOpenedLabel:{defaultValue:null,description:"",name:"controlsOpenedLabel",required:!1,type:{name:"ReactNode"}},controlsClosedLabel:{defaultValue:null,description:"",name:"controlsClosedLabel",required:!1,type:{name:"ReactNode"}}}}}catch{}const{userEvent:A,within:T,expect:m,waitFor:C}=__STORYBOOK_MODULE_TEST__,F={title:"Components/Expander",component:i,tags:["autodocs"],args:{height:200},argTypes:{height:{control:{type:"number"}}}},v=e.jsxs("div",{children:[e.jsx("p",{children:"Ipsum"}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx("li",{children:"Sed convallis ex pharetra, tristique tellus vel, rhoncus velit."}),e.jsx("li",{children:"Mauris molestie felis et scelerisque ullamcorper."}),e.jsx("li",{children:"Maecenas congue ligula ut commodo tristique."}),e.jsx("li",{children:"Pellentesque venenatis elit vitae urna condimentum, in mollis arcu venenatis."}),e.jsx("li",{children:"Donec nec turpis vel urna egestas fringilla."})]}),e.jsx("p",{children:"Ipsum"}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Mauris ut nibh vel metus cursus semper."}),e.jsx("li",{children:"Ut mattis tortor eu urna accumsan gravida."}),e.jsx("li",{children:"Nunc pellentesque neque at elit pretium tempor."}),e.jsx("li",{children:"Curabitur finibus magna vitae nunc varius fermentum."})]}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Curabitur vehicula mi iaculis, luctus augue eu, venenatis quam."}),e.jsx("li",{children:"Praesent in eros efficitur, consequat ante eu, faucibus arcu."}),e.jsx("li",{children:"Nulla laoreet nibh a odio interdum, non molestie diam auctor."})]}),e.jsx("p",{children:"Ipsum"}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Praesent aliquam diam tincidunt, sollicitudin tortor eget, vulputate lacus."}),e.jsx("li",{children:"Quisque in mi sed ex vulputate varius in a leo."}),e.jsx("li",{children:"Etiam posuere dolor at tortor aliquam imperdiet."}),e.jsx("li",{children:"Maecenas quis neque consequat, ultricies est sit amet, congue est."}),e.jsx("li",{children:"Aenean a elit sed nibh pretium lacinia sed convallis sapien."})]}),e.jsx("p",{children:"Ipsum"}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Nulla malesuada libero id dolor aliquam, non sagittis mi scelerisque."}),e.jsx("li",{children:"Etiam tincidunt lacus eu diam laoreet consectetur sit amet non est."}),e.jsx("li",{children:"In porta arcu nec purus tincidunt vulputate."})]})]}),p={render:()=>e.jsx(i,{children:v}),parameters:{docs:{description:{story:"A larger amount of content that exceeds the height cut-off, controls shown."}}}},h={render:()=>e.jsx(i,{children:e.jsxs("div",{children:[e.jsx("p",{children:"Ipsum"}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx("li",{children:"Sed convallis ex pharetra, tristique tellus vel, rhoncus velit."}),e.jsx("li",{children:"Mauris molestie felis et scelerisque ullamcorper."}),e.jsx("li",{children:"Maecenas congue ligula ut commodo tristique."}),e.jsx("li",{children:"Pellentesque venenatis elit vitae urna condimentum, in mollis arcu venenatis."}),e.jsx("li",{children:"Donec nec turpis vel urna egestas fringilla."})]})]})}),parameters:{docs:{description:{story:"A smaller amount of content that doesn't exceed the height cut-off, therefore no controls shown."}}}},x={render:()=>e.jsx(i,{className:"bg-neutral-400 p-4 rounded-lg",fadeClassName:"from-neutral-800",children:v}),parameters:{docs:{description:{story:"A larger amount of content, with overridden styles for the content wrapper and fader."}}}},f={render:()=>e.jsx(i,{controlsClassName:"ui-btn text-white w-full ui-text-p1 border rounded-xl hover:text-white",controlsOpenedLabel:e.jsxs("span",{className:"flex items-center gap-2",children:["Away with you, knave."," ",e.jsx(E,{color:"text-pink-500",size:"24px",name:"icon-gui-exclamation-triangle-outline"})]}),controlsClosedLabel:"Give me more!",children:v}),play:async({canvasElement:t})=>{const n=T(t);await m(n.getByTestId("expander-container")).toHaveStyle({height:"200px"}),await C(()=>m(n.getByTestId("expander-controls")).toBeInTheDocument()),await A.click(n.getByTestId("expander-controls")),await m(n.getByTestId("expander-controls")).toHaveTextContent("Away with you, knave."),await C(()=>m(n.getByTestId("expander-container")).toHaveStyle({height:"664px"}))},parameters:{docs:{description:{story:"An expander with overridden styles and labels for the controls."}}}},g={render:()=>e.jsx(i,{fadeClassName:"from-transparent",heightThreshold:0,children:v}),parameters:{docs:{description:{story:"A fully collapsed body of content."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Expander>{longContentInner}</Expander>,
  parameters: {
    docs: {
      description: {
        story: "A larger amount of content that exceeds the height cut-off, controls shown."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const P=["LongContent","ShortContent","OverriddenContentStyles","OverriddenControls","ZeroHeightContent"];export{p as LongContent,x as OverriddenContentStyles,f as OverriddenControls,h as ShortContent,g as ZeroHeightContent,P as __namedExportsOrder,F as default};
