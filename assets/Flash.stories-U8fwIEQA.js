import{j as u}from"./jsx-runtime-BX7wYO_o.js";import{B as d,c as m,a as v,r as k}from"./Flash-DcOfq6F-.js";import"./iframe-BhqeG6ro.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BiANqV6K.js";import"./cn-Dw6GJglA.js";const b={recent:null},g="blogPosts",p={[g]:(e=b,t)=>t.type==="blog/loaded"?{...e,recent:t.payload}:e},D={data:null},w="session",f={[w]:(e=D,t)=>t.type==="session/loaded"?{...e,data:t.payload}:e},{expect:a,within:n}=__STORYBOOK_MODULE_TEST__,H={title:"Components/Flash",component:d,args:{flashes:[["success","Congratulations! You've won the Oscar"],["notice","This is a notice"],["error","This is an error, very bad"],["alert","This is an alert"],["info","Some useful information, you are welcome"]]}},r={render:e=>{const t=m({...p,...f,...k});return v(t),u.jsx(d,{...e})}},s={args:{flashes:[["success",'Valid link: <a href="/valid-link">Click me</a>'],["error",'Invalid link: <a href="https://external.com">Should be removed</a>'],["info",'Link with data-method: <a href="/delete" data-method="delete">Delete</a>'],["notice",'Invalid link with proto relative: <a href="//external.com" rel="noopener">External</a>']]},render:e=>{const t=m({...p,...f,...k});return v(t),u.jsx(d,{...e})},play:async({canvasElement:e})=>{const o=await n(e).findAllByTestId("ui-flash"),x=o[0],c=n(x).getByText("Click me");a(c).toBeInTheDocument(),a(c).toHaveAttribute("href","/valid-link");const T=o[1],h=n(T).getByText("Should be removed");a(h).toBeInTheDocument(),a(h).not.toHaveAttribute("href");const L=o[2],i=n(L).getByRole("link",{name:"Delete"});a(i).toBeInTheDocument(),a(i).toHaveAttribute("href","/delete"),a(i).toHaveAttribute("data-method","delete");const B=o[3],l=n(B).getByText("External");a(l).toBeInTheDocument(),a(l).not.toHaveAttribute("href"),a(l).not.toHaveAttribute("rel")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const store = createRemoteDataStore({
      ...reducerBlogPosts,
      ...reducerSessionData,
      ...reducerFlashes
    });
    attachStoreToWindow(store);
    return <Flash {...args} />;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    flashes: [["success", 'Valid link: <a href="/valid-link">Click me</a>'], ["error", 'Invalid link: <a href="https://external.com">Should be removed</a>'], ["info", 'Link with data-method: <a href="/delete" data-method="delete">Delete</a>'], ["notice", 'Invalid link with proto relative: <a href="//external.com" rel="noopener">External</a>']]
  },
  render: args => {
    const store = createRemoteDataStore({
      ...reducerBlogPosts,
      ...reducerSessionData,
      ...reducerFlashes
    });
    attachStoreToWindow(store);
    return <Flash {...args} />;
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
}`,...s.parameters?.docs?.source}}};const R=["Default","WithLinks"];export{r as Default,s as WithLinks,R as __namedExportsOrder,H as default};
