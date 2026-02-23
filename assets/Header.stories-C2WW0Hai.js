import{j as e}from"./jsx-runtime-BX7wYO_o.js";import{H as d}from"./Header-B_UmiO-O.js";import{T as m}from"./TabMenu-C80SWDse.js";import{B as u}from"./Button-n1uGcKtP.js";import{A as h}from"./Accordion-Cqsh54ff.js";import{I as p}from"./Icon-BiANqV6K.js";import"./iframe-BhqeG6ro.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-Dw6GJglA.js";import"./Logo-DPBsjrF5.js";import"./Badge-D654oxWy.js";import"./heights-CjR9PzPP.js";import"./LinkButton-C8V88ead.js";import"./DropdownMenu-CcV1itmo.js";import"./component-GTQXiztz.js";import"./Flash-DcOfq6F-.js";import"./throttle-BORCkuMQ.js";import"./index-Dc_FVRD7.js";import"./index-ccvHsI_W.js";import"./index-ClGs55ML.js";import"./index-D1K5EYwF.js";import"./index-zjP4QPa9.js";import"./index-BcF6evE-.js";import"./index-zxaKzrmR.js";import"./index-DlbrPz2R.js";const O={title:"Components/Header",component:d},o=l=>e.jsx(d,{...l}),i={logoHref:"https://www.ably.com/",headerLinks:[{href:"/docs",label:"Docs"},{href:"/tutorials",label:"Tutorials",external:!0}],searchButton:e.jsx(p,{name:"icon-gui-magnifying-glass-outline",size:"1.5rem"}),sessionState:{signedIn:!1,logOut:{token:"0000",href:"accounts/sign_out"},accountName:"Discovery Education Corporation"}},a=o.bind({});a.args={...i,nav:e.jsx(m,{tabs:["Tab 1","Tab 2"],tabClassName:"ui-text-label3 !px-4",options:{underline:!1,flexibleTabHeight:!0}}),mobileNav:e.jsx(m,{tabs:["Tab 1","Tab 2"],contents:["Content 1","Content 2"],rootClassName:"h-full overflow-y-hidden min-h-[3.1875rem] flex flex-col",contentClassName:"h-full py-4 overflow-y-scroll p-8",tabClassName:"ui-text-label2 !px-4",options:{flexibleTabWidth:!0}})};const r=o.bind({});r.args={...i,nav:e.jsx("div",{className:"flex gap-2",children:["Products","Solutions","Company","Pricing","Docs"].map(l=>e.jsx(u,{variant:"secondary",size:"xs",children:l},l))}),mobileNav:e.jsx(h,{className:"p-4",data:[{name:"Products",content:"Products content"},{name:"Solutions",content:"Solutions content"},{name:"Company",content:"Company content"},{name:"Pricing",content:"Pricing content"},{name:"Docs",content:"Docs content"}]})};const t=o.bind({});t.args={...r.args,sessionState:{...i.sessionState,signedIn:!0}};const c={render:()=>e.jsxs("div",{className:"h-[187.5rem] -m-4",children:[e.jsx(d,{...r.args,themedScrollpoints:[{id:"hero-transparent",className:"ui-theme-light !bg-transparent !border-none"},{id:"hero-dark",className:"ui-theme-dark !bg-transparent !border-none"},{id:"main-light",className:"ui-theme-light bg-neutral-000 dark:bg-neutral-1300 border-b"},{id:"main-dark",className:"ui-theme-dark bg-neutral-000 dark:bg-neutral-1300 border-b"}]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{id:"hero-transparent",className:"w-full bg-gradient-to-r from-neutral-000 to-orange-600 h-32 flex justify-center absolute top-0 left-0 right-0 z-10",children:e.jsxs("p",{className:"ui-text-p2 text-neutral-1300 flex gap-1 items-center p-16",children:["Hero: Transparent header (scroll down"," ",e.jsx(p,{name:"icon-gui-arrow-down-outline"}),")"]})}),e.jsx("div",{id:"main-light",className:"w-full h-[50rem] bg-neutral-000 flex justify-center pt-32",children:e.jsx("p",{className:"ui-text-p2 text-neutral-1300 p-16",children:"Main: Light theme with border"})})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{id:"hero-dark",className:"w-full bg-gradient-to-r from-neutral-1300 to-violet-600 h-32 flex justify-center absolute top-0 left-0 right-0 z-10",children:e.jsx("p",{className:"ui-text-p2 text-neutral-000 flex gap-1 items-center p-16",children:"Hero: Dark transparent header"})}),e.jsx("div",{id:"main-dark",className:"w-full h-full bg-neutral-1300 flex justify-center pt-32",children:e.jsx("p",{className:"ui-text-p2 text-neutral-000 p-16",children:"Main: Dark theme with border"})})]})]})},n=o.bind({});n.args={...i,searchBar:e.jsx("input",{type:"text",placeholder:"Search",className:"ui-input w-64"})};const s=o.bind({});s.args={...i,logoBadge:"docs"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"args => <Header {...args} />",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <Header {...args} />",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <Header {...args} />",...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="h-[187.5rem] -m-4">
      <Header {...WithButtonNav.args} themedScrollpoints={[{
      id: "hero-transparent",
      className: "ui-theme-light !bg-transparent !border-none"
    }, {
      id: "hero-dark",
      className: "ui-theme-dark !bg-transparent !border-none"
    }, {
      id: "main-light",
      className: "ui-theme-light bg-neutral-000 dark:bg-neutral-1300 border-b"
    }, {
      id: "main-dark",
      className: "ui-theme-dark bg-neutral-000 dark:bg-neutral-1300 border-b"
    }]} />
      {/* Wrapper with both hero and main sections starting at same position (like Voltaire) */}
      <div className="relative">
        {/* Hero section - transparent header, positioned absolutely to overlay */}
        <div id="hero-transparent" className="w-full bg-gradient-to-r from-neutral-000 to-orange-600 h-32 flex justify-center absolute top-0 left-0 right-0 z-10">
          <p className="ui-text-p2 text-neutral-1300 flex gap-1 items-center p-16">
            Hero: Transparent header (scroll down{" "}
            <Icon name="icon-gui-arrow-down-outline" />)
          </p>
        </div>
        {/* Main content area starts at same position - header gets border */}
        <div id="main-light" className="w-full h-[50rem] bg-neutral-000 flex justify-center pt-32">
          <p className="ui-text-p2 text-neutral-1300 p-16">
            Main: Light theme with border
          </p>
        </div>
      </div>
      {/* Dark section wrapper */}
      <div className="relative">
        {/* Dark hero section - transparent header */}
        <div id="hero-dark" className="w-full bg-gradient-to-r from-neutral-1300 to-violet-600 h-32 flex justify-center absolute top-0 left-0 right-0 z-10">
          <p className="ui-text-p2 text-neutral-000 flex gap-1 items-center p-16">
            Hero: Dark transparent header
          </p>
        </div>
        {/* Dark content area - header gets border */}
        <div id="main-dark" className="w-full h-full bg-neutral-1300 flex justify-center pt-32">
          <p className="ui-text-p2 text-neutral-000 p-16">
            Main: Dark theme with border
          </p>
        </div>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <Header {...args} />",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <Header {...args} />",...s.parameters?.docs?.source}}};const R=["WithTabMenuNav","WithButtonNav","LoggedIn","WithThemedScrollpoints","WithSearchBar","WithLogoBadge"];export{t as LoggedIn,r as WithButtonNav,s as WithLogoBadge,n as WithSearchBar,a as WithTabMenuNav,c as WithThemedScrollpoints,R as __namedExportsOrder,O as default};
