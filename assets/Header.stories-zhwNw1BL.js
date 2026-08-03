import{i as e}from"./preload-helper-CT_b8DTk.js";import{Jt as t}from"./iframe-CKFKr-bK.js";import{t as n}from"./jsx-runtime-P1stK3o1.js";import{n as r,t as i}from"./Accordion-DwLaP-_2.js";import{n as a,t as o}from"./Icon-BH-JOwHS.js";import{a as s,t as c}from"./Button-DuOAcPWr.js";import{n as l,t as u}from"./Header-BLtI13zI.js";import{n as d,t as f}from"./TabMenu-C1yYV5vZ.js";var p,m,h,g,_,v,y,b,x,S,C;e((()=>{t(),l(),d(),s(),r(),a(),p=n(),m={title:`Components/Header`,component:u},h=e=>(0,p.jsx)(u,{...e}),g={logoHref:`https://www.ably.com/`,headerLinks:[{href:`/docs`,label:`Docs`},{href:`/tutorials`,label:`Tutorials`,external:!0}],searchButton:(0,p.jsx)(o,{name:`icon-gui-magnifying-glass-outline`,size:`1.5rem`}),sessionState:{signedIn:!1,logOut:{token:`0000`,href:`accounts/sign_out`},accountName:`Discovery Education Corporation`}},_=h.bind({}),_.args={...g,nav:(0,p.jsx)(f,{tabs:[`Tab 1`,`Tab 2`],tabClassName:`ui-text-label3 !px-4`,options:{underline:!1,flexibleTabHeight:!0}}),mobileNav:(0,p.jsx)(f,{tabs:[`Tab 1`,`Tab 2`],contents:[`Content 1`,`Content 2`],rootClassName:`h-full overflow-y-hidden min-h-[3.1875rem] flex flex-col`,contentClassName:`h-full py-4 overflow-y-scroll p-8`,tabClassName:`ui-text-label2 !px-4`,options:{flexibleTabWidth:!0}})},v=h.bind({}),v.args={...g,nav:(0,p.jsx)(`div`,{className:`flex gap-2`,children:[`Products`,`Solutions`,`Company`,`Pricing`,`Docs`].map(e=>(0,p.jsx)(c,{variant:`secondary`,size:`xs`,children:e},e))}),mobileNav:(0,p.jsx)(i,{className:`p-4`,data:[{name:`Products`,content:`Products content`},{name:`Solutions`,content:`Solutions content`},{name:`Company`,content:`Company content`},{name:`Pricing`,content:`Pricing content`},{name:`Docs`,content:`Docs content`}]})},y=h.bind({}),y.args={...v.args,sessionState:{...g.sessionState,signedIn:!0}},b={render:()=>(0,p.jsxs)(`div`,{className:`h-[187.5rem] -m-4`,children:[(0,p.jsx)(u,{...v.args,themedScrollpoints:[{id:`hero-transparent`,className:`ui-theme-light !bg-transparent !border-none`},{id:`hero-dark`,className:`ui-theme-dark !bg-transparent !border-none`},{id:`main-light`,className:`ui-theme-light bg-neutral-000 dark:bg-neutral-1300 border-b`},{id:`main-dark`,className:`ui-theme-dark bg-neutral-000 dark:bg-neutral-1300 border-b`}]}),(0,p.jsxs)(`div`,{className:`relative`,children:[(0,p.jsx)(`div`,{id:`hero-transparent`,className:`w-full bg-gradient-to-r from-neutral-000 to-orange-600 h-32 flex justify-center absolute top-0 left-0 right-0 z-10`,children:(0,p.jsxs)(`p`,{className:`ui-text-p2 text-neutral-1300 flex gap-1 items-center p-16`,children:[`Hero: Transparent header (scroll down`,` `,(0,p.jsx)(o,{name:`icon-gui-arrow-down-outline`}),`)`]})}),(0,p.jsx)(`div`,{id:`main-light`,className:`w-full h-[50rem] bg-neutral-000 flex justify-center pt-32`,children:(0,p.jsx)(`p`,{className:`ui-text-p2 text-neutral-1300 p-16`,children:`Main: Light theme with border`})})]}),(0,p.jsxs)(`div`,{className:`relative`,children:[(0,p.jsx)(`div`,{id:`hero-dark`,className:`w-full bg-gradient-to-r from-neutral-1300 to-violet-600 h-32 flex justify-center absolute top-0 left-0 right-0 z-10`,children:(0,p.jsx)(`p`,{className:`ui-text-p2 text-neutral-000 flex gap-1 items-center p-16`,children:`Hero: Dark transparent header`})}),(0,p.jsx)(`div`,{id:`main-dark`,className:`w-full h-full bg-neutral-1300 flex justify-center pt-32`,children:(0,p.jsx)(`p`,{className:`ui-text-p2 text-neutral-000 p-16`,children:`Main: Dark theme with border`})})]})]})},x=h.bind({}),x.args={...g,searchBar:(0,p.jsx)(`input`,{type:`text`,placeholder:`Search`,className:`ui-input w-64`})},S=h.bind({}),S.args={...g,logoBadge:`docs`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <Header {...args} />`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <Header {...args} />`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <Header {...args} />`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <Header {...args} />`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <Header {...args} />`,...S.parameters?.docs?.source}}},C=[`WithTabMenuNav`,`WithButtonNav`,`LoggedIn`,`WithThemedScrollpoints`,`WithSearchBar`,`WithLogoBadge`]}))();export{y as LoggedIn,v as WithButtonNav,S as WithLogoBadge,x as WithSearchBar,_ as WithTabMenuNav,b as WithThemedScrollpoints,C as __namedExportsOrder,m as default};