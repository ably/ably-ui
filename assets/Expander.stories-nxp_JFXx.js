import{j as e}from"./jsx-runtime-BX7wYO_o.js";import{r as n}from"./iframe-BhqeG6ro.js";import{c as D,P as F}from"./index-DFbCWVds.js";import{b as V,c as G,P as R,u as z,a as U}from"./index-ccvHsI_W.js";import{u as Z}from"./index-BcF6evE-.js";import{c as q}from"./cn-Dw6GJglA.js";import{I as $}from"./Icon-BiANqV6K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ClGs55ML.js";import"./index-D1K5EYwF.js";var N="Collapsible",[K]=G(N),[Q,_]=K(N),B=n.forwardRef((t,r)=>{const{__scopeCollapsible:c,open:i,defaultOpen:s,disabled:a,onOpenChange:l,...m}=t,[o,d]=V({prop:i,defaultProp:s??!1,onChange:l,caller:N});return e.jsx(Q,{scope:c,disabled:a,contentId:Z(),open:o,onOpenToggle:n.useCallback(()=>d(u=>!u),[d]),children:e.jsx(R.div,{"data-state":S(o),"data-disabled":a?"":void 0,...m,ref:r})})});B.displayName=N;var H="CollapsibleTrigger",k=n.forwardRef((t,r)=>{const{__scopeCollapsible:c,...i}=t,s=_(H,c);return e.jsx(R.button,{type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":S(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled,...i,ref:r,onClick:D(t.onClick,s.onOpenToggle)})});k.displayName=H;var A="CollapsibleContent",Y=n.forwardRef((t,r)=>{const{forceMount:c,...i}=t,s=_(A,t.__scopeCollapsible);return e.jsx(F,{present:c||s.open,children:({present:a})=>e.jsx(J,{...i,ref:r,present:a})})});Y.displayName=A;var J=n.forwardRef((t,r)=>{const{__scopeCollapsible:c,present:i,children:s,...a}=t,l=_(A,c),[m,o]=n.useState(i),d=n.useRef(null),u=z(r,d),x=n.useRef(0),f=x.current,T=n.useRef(0),O=T.current,I=l.open||m,P=n.useRef(I),g=n.useRef(void 0);return n.useEffect(()=>{const p=requestAnimationFrame(()=>P.current=!1);return()=>cancelAnimationFrame(p)},[]),U(()=>{const p=d.current;if(p){g.current=g.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const L=p.getBoundingClientRect();x.current=L.height,T.current=L.width,P.current||(p.style.transitionDuration=g.current.transitionDuration,p.style.animationName=g.current.animationName),o(i)}},[l.open,i]),e.jsx(R.div,{"data-state":S(l.open),"data-disabled":l.disabled?"":void 0,id:l.contentId,hidden:!I,...a,ref:u,style:{"--radix-collapsible-content-height":f?`${f}px`:void 0,"--radix-collapsible-content-width":O?`${O}px`:void 0,...t.style},children:I&&s})});function S(t){return t?"open":"closed"}var W=B,X=k;function ee(t,r=0){const[c,i]=n.useState(r),s=n.useRef(null),a=n.useRef(null);return n.useEffect(()=>{const l=t.current;if(!l)return;let m=!0;return s.current=new ResizeObserver(o=>{a.current!==null&&cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>{if(a.current=null,!m)return;const d=o[0];if(d&&d.contentRect){const u=Math.round(d.contentRect.height);i(u)}})}),s.current.observe(l),()=>{m=!1,a.current!==null&&(cancelAnimationFrame(a.current),a.current=null),s.current?.disconnect(),s.current=null}},[t]),c}const h=({heightThreshold:t=200,className:r,fadeClassName:c,controlsClassName:i,controlsOpenedLabel:s,controlsClosedLabel:a,children:l})=>{const m=n.useRef(null),[o,d]=n.useState(!1),u=ee(m,t),x=n.useMemo(()=>u>=t,[u,t]),f=n.useMemo(()=>u<t?"auto":o?u:t,[u,t,o]);return e.jsxs(W,{open:o,onOpenChange:d,children:[e.jsxs("div",{style:{height:f},"data-testid":"expander-container",className:q("overflow-hidden transition-all relative",r),children:[x&&!o&&e.jsx("div",{className:q("h-16 w-full bg-gradient-to-t from-white to-transparent absolute bottom-0 left-0 right-0",c)}),e.jsx("div",{ref:m,children:l})]}),x&&e.jsx(X,{asChild:!0,children:e.jsx("button",{"data-testid":"expander-controls",className:q(t===0&&!o?"":"mt-4","cursor-pointer font-bold text-gui-blue-default-light hover:text-gui-blue-hover-light focus-base transition-colors",i),children:o?s??"View less -":a??"View all +"})})]})};try{h.displayName="Expander",h.__docgenInfo={description:"",displayName:"Expander",props:{heightThreshold:{defaultValue:{value:"200"},description:"",name:"heightThreshold",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},fadeClassName:{defaultValue:null,description:"",name:"fadeClassName",required:!1,type:{name:"string"}},controlsClassName:{defaultValue:null,description:"",name:"controlsClassName",required:!1,type:{name:"string"}},controlsOpenedLabel:{defaultValue:null,description:"",name:"controlsOpenedLabel",required:!1,type:{name:"ReactNode"}},controlsClosedLabel:{defaultValue:null,description:"",name:"controlsClosedLabel",required:!1,type:{name:"ReactNode"}}}}}catch{}const{userEvent:te,within:ne,expect:v,waitFor:M}=__STORYBOOK_MODULE_TEST__,me={title:"Components/Expander",component:h,tags:["autodocs"],args:{height:200},argTypes:{height:{control:{type:"number"}}}},E=e.jsxs("div",{children:[e.jsx("p",{children:"Ipsum"}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx("li",{children:"Sed convallis ex pharetra, tristique tellus vel, rhoncus velit."}),e.jsx("li",{children:"Mauris molestie felis et scelerisque ullamcorper."}),e.jsx("li",{children:"Maecenas congue ligula ut commodo tristique."}),e.jsx("li",{children:"Pellentesque venenatis elit vitae urna condimentum, in mollis arcu venenatis."}),e.jsx("li",{children:"Donec nec turpis vel urna egestas fringilla."})]}),e.jsx("p",{children:"Ipsum"}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Mauris ut nibh vel metus cursus semper."}),e.jsx("li",{children:"Ut mattis tortor eu urna accumsan gravida."}),e.jsx("li",{children:"Nunc pellentesque neque at elit pretium tempor."}),e.jsx("li",{children:"Curabitur finibus magna vitae nunc varius fermentum."})]}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Curabitur vehicula mi iaculis, luctus augue eu, venenatis quam."}),e.jsx("li",{children:"Praesent in eros efficitur, consequat ante eu, faucibus arcu."}),e.jsx("li",{children:"Nulla laoreet nibh a odio interdum, non molestie diam auctor."})]}),e.jsx("p",{children:"Ipsum"}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Praesent aliquam diam tincidunt, sollicitudin tortor eget, vulputate lacus."}),e.jsx("li",{children:"Quisque in mi sed ex vulputate varius in a leo."}),e.jsx("li",{children:"Etiam posuere dolor at tortor aliquam imperdiet."}),e.jsx("li",{children:"Maecenas quis neque consequat, ultricies est sit amet, congue est."}),e.jsx("li",{children:"Aenean a elit sed nibh pretium lacinia sed convallis sapien."})]}),e.jsx("p",{children:"Ipsum"}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Nulla malesuada libero id dolor aliquam, non sagittis mi scelerisque."}),e.jsx("li",{children:"Etiam tincidunt lacus eu diam laoreet consectetur sit amet non est."}),e.jsx("li",{children:"In porta arcu nec purus tincidunt vulputate."})]})]}),b={render:()=>e.jsx(h,{children:E}),parameters:{docs:{description:{story:"A larger amount of content that exceeds the height cut-off, controls shown."}}}},y={render:()=>e.jsx(h,{children:e.jsxs("div",{children:[e.jsx("p",{children:"Ipsum"}),e.jsxs("ul",{className:"mb-4 list-inside list-disc",children:[e.jsx("li",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsx("li",{children:"Sed convallis ex pharetra, tristique tellus vel, rhoncus velit."}),e.jsx("li",{children:"Mauris molestie felis et scelerisque ullamcorper."}),e.jsx("li",{children:"Maecenas congue ligula ut commodo tristique."}),e.jsx("li",{children:"Pellentesque venenatis elit vitae urna condimentum, in mollis arcu venenatis."}),e.jsx("li",{children:"Donec nec turpis vel urna egestas fringilla."})]})]})}),parameters:{docs:{description:{story:"A smaller amount of content that doesn't exceed the height cut-off, therefore no controls shown."}}}},C={render:()=>e.jsx(h,{className:"bg-neutral-400 p-4 rounded-lg",fadeClassName:"from-neutral-800",children:E}),parameters:{docs:{description:{story:"A larger amount of content, with overridden styles for the content wrapper and fader."}}}},j={render:()=>e.jsx(h,{controlsClassName:"ui-btn text-white w-full ui-text-p1 border rounded-xl hover:text-white",controlsOpenedLabel:e.jsxs("span",{className:"flex items-center gap-2",children:["Away with you, knave."," ",e.jsx($,{color:"text-pink-500",size:"24px",name:"icon-gui-exclamation-triangle-outline"})]}),controlsClosedLabel:"Give me more!",children:E}),play:async({canvasElement:t})=>{const r=ne(t);await v(r.getByTestId("expander-container")).toHaveStyle({height:"200px"}),await M(()=>v(r.getByTestId("expander-controls")).toBeInTheDocument()),await te.click(r.getByTestId("expander-controls")),await v(r.getByTestId("expander-controls")).toHaveTextContent("Away with you, knave."),await M(()=>v(r.getByTestId("expander-container")).toHaveStyle({height:"664px"}))},parameters:{docs:{description:{story:"An expander with overridden styles and labels for the controls."}}}},w={render:()=>e.jsx(h,{fadeClassName:"from-transparent",heightThreshold:0,children:E}),parameters:{docs:{description:{story:"A fully collapsed body of content."}}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Expander>{longContentInner}</Expander>,
  parameters: {
    docs: {
      description: {
        story: "A larger amount of content that exceeds the height cut-off, controls shown."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const he=["LongContent","ShortContent","OverriddenContentStyles","OverriddenControls","ZeroHeightContent"];export{b as LongContent,C as OverriddenContentStyles,j as OverriddenControls,y as ShortContent,w as ZeroHeightContent,he as __namedExportsOrder,me as default};
