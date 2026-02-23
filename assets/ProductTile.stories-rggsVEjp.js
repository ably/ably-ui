import{j as e}from"./jsx-runtime-BX7wYO_o.js";import{R as p}from"./iframe-BhqeG6ro.js";import{P as r}from"./ProductTile-B5eEhfFo.js";import{p as l}from"./ProductDescription-oXv3I98s.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-Dw6GJglA.js";import"./LinkButton-C8V88ead.js";import"./Button-n1uGcKtP.js";import"./Icon-BiANqV6K.js";const f={title:"Components/Product Tile",component:r,tags:["autodocs"]},o={render:()=>{const[s,u]=p.useState(null);return e.jsx("div",{className:"grid sm:grid-cols-3 gap-8",children:Object.keys(l).map(t=>e.jsx(r,{name:t,selected:s===t,onClick:()=>u(t)},t))})},parameters:{docs:{description:{story:"Example usage: `<ProductTile name='pubsub' selected={...} />`. Click on a tile to select it (`selected` must be controlled for selection to be enabled)."}}}},a={render:()=>e.jsx("div",{className:"grid sm:grid-cols-3 gap-8",children:Object.keys(l).map(s=>e.jsx(r,{name:s},s))}),parameters:{docs:{description:{story:"When `selected` is not controlled, the tiles are not selectable and show default styling."}}}},c={render:()=>e.jsx(r,{name:"pubsub",className:"bg-pink-200 dark:bg-pink-800 hover:bg-pink-600 dark:hover:bg-pink-400 cursor-pointer",labelClassName:"text-orange-500",descriptionClassName:"text-blue-500",onClick:()=>alert("yo congrats on the click")},"pubsub"),parameters:{docs:{description:{story:"`className` is overridden to change the background color and cursor. `labelClassName` and `descriptionClassName` are used to change the text color of the label and description respectively. `onClick` is also overridden to show an alert on click."}}}},n={render:()=>e.jsx("div",{className:"grid sm:grid-cols-3 gap-8 justify-center",children:Object.keys(l).map(s=>e.jsx(r,{name:s,showDescription:!1,showLabel:!1},s))}),parameters:{docs:{description:{story:"Example usage: `<ProductTile name='pubsub' showDescription={false} showLabel={false} />`"}}}},d={render:()=>e.jsx(r,{name:"pubsub",size:"144px",showDescription:!1},"pubsub"),parameters:{docs:{description:{story:"The proportions of the label, description, and inter-component padding are dependent on the ident's set size. Here is an example of a larger product tile set to 144px."}}}},i={render:()=>{const[s,u]=p.useState(null);return e.jsx("div",{className:"grid sm:grid-cols-3 gap-8",children:Object.keys(l).map(t=>e.jsx(r,{name:t,selected:s===t,onClick:()=>u(t),animateIcons:!0},t))})},parameters:{docs:{description:{story:"Example usage: `<ProductTile name='pubsub' animateIcons={true} />`. This story demonstrates the product tile with 'animated' icons. For now they are just icon swaps, but the stretch goal is to have full animations."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ProductTile key="pubsub" name="pubsub" className="bg-pink-200 dark:bg-pink-800 hover:bg-pink-600 dark:hover:bg-pink-400 cursor-pointer" labelClassName="text-orange-500" descriptionClassName="text-blue-500" onClick={() => alert("yo congrats on the click")} />,
  parameters: {
    docs: {
      description: {
        story: "\`className\` is overridden to change the background color and cursor. \`labelClassName\` and \`descriptionClassName\` are used to change the text color of the label and description respectively. \`onClick\` is also overridden to show an alert on click."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ProductTile key="pubsub" name="pubsub" size="144px" showDescription={false} />,
  parameters: {
    docs: {
      description: {
        story: "The proportions of the label, description, and inter-component padding are dependent on the ident's set size. Here is an example of a larger product tile set to 144px."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const N=["ProductTiles","StaticProductTiles","ProductTileWithOverriddenStylesAndClick","ProductTilesWithoutDescriptionsOrLabels","LargerProductTile","ProductTileWithFilledIcons"];export{d as LargerProductTile,i as ProductTileWithFilledIcons,c as ProductTileWithOverriddenStylesAndClick,o as ProductTiles,n as ProductTilesWithoutDescriptionsOrLabels,a as StaticProductTiles,N as __namedExportsOrder,f as default};
