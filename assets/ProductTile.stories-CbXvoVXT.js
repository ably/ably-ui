import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Jt as n}from"./iframe-BwCxeFni.js";import{t as r}from"./jsx-runtime-TD5IgBxr.js";import{l as i,s as a}from"./ProductDescription-DUoqr-kX.js";import{n as o,t as s}from"./ProductTile-TBXgE4EX.js";var c,l,u,d,f,p,m,h,g,_;e((()=>{c=t(n()),o(),a(),l=r(),u={title:`Components/Product Tile`,component:s,tags:[`autodocs`]},d={render:()=>{let[e,t]=c.useState(null);return(0,l.jsx)(`div`,{className:`grid sm:grid-cols-3 gap-8`,children:Object.keys(i).map(n=>(0,l.jsx)(s,{name:n,selected:e===n,onClick:()=>t(n)},n))})},parameters:{docs:{description:{story:"Example usage: `<ProductTile name='pubsub' selected={...} />`. Click on a tile to select it (`selected` must be controlled for selection to be enabled)."}}}},f={render:()=>(0,l.jsx)(`div`,{className:`grid sm:grid-cols-3 gap-8`,children:Object.keys(i).map(e=>(0,l.jsx)(s,{name:e},e))}),parameters:{docs:{description:{story:"When `selected` is not controlled, the tiles are not selectable and show default styling."}}}},p={render:()=>(0,l.jsx)(s,{name:`pubsub`,className:`bg-pink-200 dark:bg-pink-800 hover:bg-pink-600 dark:hover:bg-pink-400 cursor-pointer`,labelClassName:`text-orange-500`,descriptionClassName:`text-blue-500`,onClick:()=>alert(`yo congrats on the click`)},`pubsub`),parameters:{docs:{description:{story:"`className` is overridden to change the background color and cursor. `labelClassName` and `descriptionClassName` are used to change the text color of the label and description respectively. `onClick` is also overridden to show an alert on click."}}}},m={render:()=>(0,l.jsx)(`div`,{className:`grid sm:grid-cols-3 gap-8 justify-center`,children:Object.keys(i).map(e=>(0,l.jsx)(s,{name:e,showDescription:!1,showLabel:!1},e))}),parameters:{docs:{description:{story:"Example usage: `<ProductTile name='pubsub' showDescription={false} showLabel={false} />`"}}}},h={render:()=>(0,l.jsx)(s,{name:`pubsub`,size:`144px`,showDescription:!1},`pubsub`),parameters:{docs:{description:{story:`The proportions of the label, description, and inter-component padding are dependent on the ident's set size. Here is an example of a larger product tile set to 144px.`}}}},g={render:()=>{let[e,t]=c.useState(null);return(0,l.jsx)(`div`,{className:`grid sm:grid-cols-3 gap-8`,children:Object.keys(i).map(n=>(0,l.jsx)(s,{name:n,selected:e===n,onClick:()=>t(n),animateIcons:!0},n))})},parameters:{docs:{description:{story:"Example usage: `<ProductTile name='pubsub' animateIcons={true} />`. This story demonstrates the product tile with 'animated' icons. For now they are just icon swaps, but the stretch goal is to have full animations."}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedProduct, setSelectedProduct] = React.useState<ProductName | null>(null);
    return <div className="grid sm:grid-cols-3 gap-8">
        {Object.keys(products).map(product => <ProductTile key={product} name={product as ProductName} selected={selectedProduct === product} onClick={() => setSelectedProduct(product as ProductName)} />)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`<ProductTile name='pubsub' selected={...} />\`. Click on a tile to select it (\`selected\` must be controlled for selection to be enabled)."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="grid sm:grid-cols-3 gap-8">
        {Object.keys(products).map(product => <ProductTile key={product} name={product as ProductName} />)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "When \`selected\` is not controlled, the tiles are not selectable and show default styling."
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ProductTile key="pubsub" name="pubsub" className="bg-pink-200 dark:bg-pink-800 hover:bg-pink-600 dark:hover:bg-pink-400 cursor-pointer" labelClassName="text-orange-500" descriptionClassName="text-blue-500" onClick={() => alert("yo congrats on the click")} />,
  parameters: {
    docs: {
      description: {
        story: "\`className\` is overridden to change the background color and cursor. \`labelClassName\` and \`descriptionClassName\` are used to change the text color of the label and description respectively. \`onClick\` is also overridden to show an alert on click."
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid sm:grid-cols-3 gap-8 justify-center">
      {Object.keys(products).map(product => <ProductTile key={product} name={product as ProductName} showDescription={false} showLabel={false} />)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`<ProductTile name='pubsub' showDescription={false} showLabel={false} />\`"
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ProductTile key="pubsub" name="pubsub" size="144px" showDescription={false} />,
  parameters: {
    docs: {
      description: {
        story: "The proportions of the label, description, and inter-component padding are dependent on the ident's set size. Here is an example of a larger product tile set to 144px."
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedProduct, setSelectedProduct] = React.useState<ProductName | null>(null);
    return <div className="grid sm:grid-cols-3 gap-8">
        {Object.keys(products).map(product => <ProductTile key={product} name={product as ProductName} selected={selectedProduct === product} onClick={() => setSelectedProduct(product as ProductName)} animateIcons={true} />)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Example usage: \`<ProductTile name='pubsub' animateIcons={true} />\`. This story demonstrates the product tile with 'animated' icons. For now they are just icon swaps, but the stretch goal is to have full animations."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`ProductTiles`,`StaticProductTiles`,`ProductTileWithOverriddenStylesAndClick`,`ProductTilesWithoutDescriptionsOrLabels`,`LargerProductTile`,`ProductTileWithFilledIcons`]}))();export{h as LargerProductTile,g as ProductTileWithFilledIcons,p as ProductTileWithOverriddenStylesAndClick,d as ProductTiles,m as ProductTilesWithoutDescriptionsOrLabels,f as StaticProductTiles,_ as __namedExportsOrder,u as default};