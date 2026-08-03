import{i as e}from"./preload-helper-CT_b8DTk.js";import{Jt as t}from"./iframe-BwCxeFni.js";import{t as n}from"./jsx-runtime-TD5IgBxr.js";import{i as r,r as i,t as a}from"./Flash-Dva5dvbO.js";var o,s,c,l,u,d,f;e((()=>{t(),r(),o=n(),{expect:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Flash`,component:a,args:{flashes:[[`success`,`Congratulations! You've won the Oscar`],[`notice`,`This is a notice`],[`error`,`This is an error, very bad`],[`alert`,`This is an alert`],[`info`,`Some useful information, you are welcome`]]}},u={render:e=>(0,o.jsx)(i,{children:(0,o.jsx)(a,{...e})})},d={args:{flashes:[[`success`,`Valid link: <a href="/valid-link">Click me</a>`],[`error`,`Invalid link: <a href="https://external.com">Should be removed</a>`],[`info`,`Link with data-method: <a href="/delete" data-method="delete">Delete</a>`],[`notice`,`Invalid link with proto relative: <a href="//external.com" rel="noopener">External</a>`]]},render:e=>(0,o.jsx)(i,{children:(0,o.jsx)(a,{...e})}),play:async({canvasElement:e})=>{let t=await c(e).findAllByTestId(`ui-flash`),n=t[0],r=c(n).getByText(`Click me`);s(r).toBeInTheDocument(),s(r).toHaveAttribute(`href`,`/valid-link`);let i=t[1],a=c(i).getByText(`Should be removed`);s(a).toBeInTheDocument(),s(a).not.toHaveAttribute(`href`);let o=t[2],l=c(o).getByRole(`link`,{name:`Delete`});s(l).toBeInTheDocument(),s(l).toHaveAttribute(`href`,`/delete`),s(l).toHaveAttribute(`data-method`,`delete`);let u=t[3],d=c(u).getByText(`External`);s(d).toBeInTheDocument(),s(d).not.toHaveAttribute(`href`),s(d).not.toHaveAttribute(`rel`)}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <FlashProvider>
        <Flash {...args} />
      </FlashProvider>;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    flashes: [["success", 'Valid link: <a href="/valid-link">Click me</a>'], ["error", 'Invalid link: <a href="https://external.com">Should be removed</a>'], ["info", 'Link with data-method: <a href="/delete" data-method="delete">Delete</a>'], ["notice", 'Invalid link with proto relative: <a href="//external.com" rel="noopener">External</a>']]
  },
  render: args => {
    return <FlashProvider>
        <Flash {...args} />
      </FlashProvider>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for flashes to appear
    const flashes = await canvas.findAllByTestId("ui-flash");

    // Test valid link (should be present)
    const validLinkFlash = flashes[0];
    const validLink = within(validLinkFlash).getByText("Click me");
    expect(validLink).toBeInTheDocument();
    expect(validLink).toHaveAttribute("href", "/valid-link");

    // Test invalid link (should be removed)
    const invalidLinkFlash = flashes[1];
    const invalidLinkText = within(invalidLinkFlash).getByText("Should be removed");
    expect(invalidLinkText).toBeInTheDocument();
    expect(invalidLinkText).not.toHaveAttribute("href");

    // Test link with data-method (should be present)
    const dataMethodFlash = flashes[2];
    const dataMethodLink = within(dataMethodFlash).getByRole("link", {
      name: "Delete"
    });
    expect(dataMethodLink).toBeInTheDocument();
    expect(dataMethodLink).toHaveAttribute("href", "/delete");
    expect(dataMethodLink).toHaveAttribute("data-method", "delete");

    // Test link with proto relative url (should be present)
    const relFlash = flashes[3];
    const relLink = within(relFlash).getByText("External");
    expect(relLink).toBeInTheDocument();
    expect(relLink).not.toHaveAttribute("href");
    expect(relLink).not.toHaveAttribute("rel");
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithLinks`]}))();export{u as Default,d as WithLinks,f as __namedExportsOrder,l as default};