import{j as r}from"./jsx-runtime-CyWY-2fp.js";import{B as d,F as v}from"./Flash-BGvCAlpE.js";import"./iframe-BNJdjDsv.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-B5tBaJAs.js";import"./cn-B2SrrX3i.js";const{expect:e,within:a}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Flash",component:d,args:{flashes:[["success","Congratulations! You've won the Oscar"],["notice","This is a notice"],["error","This is an error, very bad"],["alert","This is an alert"],["info","Some useful information, you are welcome"]]}},i={render:t=>r.jsx(v,{children:r.jsx(d,{...t})})},o={args:{flashes:[["success",'Valid link: <a href="/valid-link">Click me</a>'],["error",'Invalid link: <a href="https://external.com">Should be removed</a>'],["info",'Link with data-method: <a href="/delete" data-method="delete">Delete</a>'],["notice",'Invalid link with proto relative: <a href="//external.com" rel="noopener">External</a>']]},render:t=>r.jsx(v,{children:r.jsx(d,{...t})}),play:async({canvasElement:t})=>{const n=await a(t).findAllByTestId("ui-flash"),m=n[0],h=a(m).getByText("Click me");e(h).toBeInTheDocument(),e(h).toHaveAttribute("href","/valid-link");const u=n[1],c=a(u).getByText("Should be removed");e(c).toBeInTheDocument(),e(c).not.toHaveAttribute("href");const k=n[2],s=a(k).getByRole("link",{name:"Delete"});e(s).toBeInTheDocument(),e(s).toHaveAttribute("href","/delete"),e(s).toHaveAttribute("data-method","delete");const p=n[3],l=a(p).getByText("External");e(l).toBeInTheDocument(),e(l).not.toHaveAttribute("href"),e(l).not.toHaveAttribute("rel")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <FlashProvider>
        <Flash {...args} />
      </FlashProvider>;
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const w=["Default","WithLinks"];export{i as Default,o as WithLinks,w as __namedExportsOrder,g as default};
