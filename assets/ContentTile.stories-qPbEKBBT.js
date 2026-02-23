import{j as t}from"./jsx-runtime-BX7wYO_o.js";import{r as F}from"./iframe-BhqeG6ro.js";import{B as L}from"./Badge-D654oxWy.js";import{F as M}from"./FeaturedLink-CJfv3zGJ.js";import{I as W}from"./Icon-BiANqV6K.js";import{c as o}from"./cn-Dw6GJglA.js";import"./preload-helper-PPVm8Dsz.js";const n=({title:e,className:i,description:$,cta:a,feature:l,featureType:I="image",featureIcons:d,centerFeature:p,badges:u,onClick:N,featureClassName:j,titleClassName:D,descriptionClassName:_,ctaClassName:q,featurePadding:S=!0,encapsulated:m=!0})=>{const P=F.useCallback(()=>{a&&(N?N(a.url):window.location.href=a.url)},[N,a]),V=F.useMemo(()=>l?I==="image"?t.jsxs("div",{className:o("content-tile__feature relative p-3 h-[200px] pb-0 flex items-end justify-center overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-1200 border border-neutral-300 dark:border-neutral-1000 transition-[border-color,height]",p&&"items-center pb-3",a&&!m&&"group-hover/content-tile:border-neutral-500 dark:group-hover/content-tile:border-neutral-800 transition-colors",j),children:[t.jsx("div",{className:o("flex justify-center max-h-[200px]",!p&&"[&_img]:min-w-max [&_img]:h-[200px]",S&&!p&&"pt-6"),children:l}),d&&d?.length>0&&t.jsx("div",{className:"absolute bottom-3 right-3 flex gap-1.5 bg-neutral-000 dark:bg-neutral-1300 rounded border border-neutral-200 dark:border-neutral-1100 px-2 py-1.5",children:d.map((s,A)=>t.jsx(W,{name:s,size:"18px"},s+A))})]}):I==="icon"?t.jsx("div",{className:o("h-9",j),children:typeof l=="string"?t.jsx(W,{name:l,size:"36px"}):l}):null:null,[p,l,j,d,m,S,I,a]);return t.jsxs("div",{className:o("group/content-tile",m&&"p-5 border border-neutral-300 dark:border-neutral-1000 rounded-lg",a&&"cursor-pointer",a&&m&&"hover:border-neutral-500 dark:hover:border-neutral-800 transition-colors",i),...a&&{onClick:P,onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),P())},tabIndex:0,role:"link","aria-label":e},children:[V,t.jsxs("div",{className:"content-tile__content pr-4",children:[e&&t.jsx("h2",{className:o("content-tile__title mb-2 ui-text-h4 text-neutral-1300 dark:text-neutral-000",l&&"mt-4",D),children:e}),$&&t.jsx("div",{className:o("content-tile__description ui-text-p2 text-neutral-1000 dark:text-neutral-300",a&&"text-neutral-800 dark:text-neutral-500 group-hover/content-tile:text-neutral-1000 dark:group-hover/content-tile:text-neutral-300 transition-colors",(u||a&&!a.implicit)&&"mb-2",_),children:$}),u&&u.length>0&&t.jsx("div",{className:"content-tile__badges mb-2 flex flex-wrap gap-2",children:u.map(({label:s,className:A,...E},B)=>t.jsx(L,{className:o("uppercase text-[10px]",A),...E,children:s},s+B))}),a&&!a.implicit&&t.jsx(M,{url:"#",additionalCSS:o("py-0 pointer-events-none font-medium items-center text-neutral-800 dark:text-neutral-500 group-hover/content-tile:text-neutral-1300 dark:group-hover/content-tile:text-neutral-000 transition-colors [&_svg]:group-hover/content-tile:left-0",q),iconColor:"text-orange-600",children:a.text})]})]})};try{n.displayName="ContentTile",n.__docgenInfo={description:"",displayName:"ContentTile",props:{title:{defaultValue:null,description:"The title text to display",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS classes for the root container",name:"className",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"The description content to display (text or React elements)",name:"description",required:!1,type:{name:"ReactNode"}},cta:{defaultValue:null,description:`Call-to-action configuration.
- text: The CTA button or link text.
- url: The destination URL for the CTA.
- implicit: If true, no explicit CTA button is shown.`,name:"cta",required:!1,type:{name:"{ text: string; url: string; implicit?: boolean; }"}},feature:{defaultValue:null,description:"Content to display in the feature area (image or icon)",name:"feature",required:!1,type:{name:"ReactNode"}},featureType:{defaultValue:{value:"image"},description:"Type of feature to render - either 'image' or 'icon'",name:"featureType",required:!1,type:{name:"enum",value:[{value:'"image"'},{value:'"icon"'}]}},featureIcons:{defaultValue:null,description:"Array of icon names to display as overlays on the feature",name:"featureIcons",required:!1,type:{name:"IconName[]"}},centerFeature:{defaultValue:null,description:"Whether to vertically center the feature content",name:"centerFeature",required:!1,type:{name:"boolean"}},badges:{defaultValue:null,description:"Array of badges to display",name:"badges",required:!1,type:{name:"(BadgeProps & { label: string; })[]"}},onClick:{defaultValue:null,description:"Custom click handler, receives the CTA URL if present",name:"onClick",required:!1,type:{name:"((url?: string) => void)"}},featureClassName:{defaultValue:null,description:"Additional CSS classes for the feature element",name:"featureClassName",required:!1,type:{name:"string"}},titleClassName:{defaultValue:null,description:"Additional CSS classes for the title element",name:"titleClassName",required:!1,type:{name:"string"}},descriptionClassName:{defaultValue:null,description:"Additional CSS classes for the description element",name:"descriptionClassName",required:!1,type:{name:"string"}},ctaClassName:{defaultValue:null,description:"Additional CSS classes for the CTA element",name:"ctaClassName",required:!1,type:{name:"string"}},featurePadding:{defaultValue:{value:"true"},description:"Whether to add padding-top to the feature content (default: true)",name:"featurePadding",required:!1,type:{name:"boolean"}},encapsulated:{defaultValue:{value:"true"},description:"Whether to encapsulate the content tile in an outer container (default: true)",name:"encapsulated",required:!1,type:{name:"boolean"}}}}}catch{}const Q={title:"Components/Content Tile",component:n,tags:["autodocs"]},r="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",c=t.jsx("img",{src:"https://placecats.com/300/200",alt:"Kitten",className:"rounded-t"}),R=t.jsx("img",{src:"https://placecats.com/300/100",alt:"Kitten",className:"rounded"}),h={parameters:{docs:{description:{story:'Displays a ContentTile with an image feature that extends to fill the container. Props: `featureType="image"`, `featurePadding={false}` to allow the image to reach the edges.'}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with Image ${e}`,description:"This ContentTile displays an image above the content.",feature:c,featureType:"image",featurePadding:!1},e))})},g={parameters:{docs:{description:{story:'Displays a ContentTile with a vertically centered image feature. Props: `featureType="image"`, `centerFeature={true}` to vertically center the image within the feature container.'}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with Centered Image ${e}`,description:"This ContentTile displays an image above the content.",feature:R,featureType:"image",centerFeature:!0},e))})},f={parameters:{docs:{description:{story:"Displays a ContentTile with technology icons overlaid in the bottom-right corner of the image feature. Props: `featureIcons` array contains icon names that are displayed as badges on the image."}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with Image Icons ${e}`,description:"This ContentTile displays a row of icons as featureIcons.",feature:c,featureType:"image",featureIcons:["icon-tech-javascript","icon-tech-typescript","icon-tech-python"]},e))})},y={parameters:{docs:{description:{story:"Displays a ContentTile with an image feature and a visible call-to-action link. Props: `cta` object with `text` and `url`, making the entire tile clickable with hover effects and displaying the CTA link text at the bottom."}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with explicit CTA ${e}`,description:"This ContentTile displays a call-to-action button.",feature:c,featureType:"image",cta:{text:"Learn More",url:`https://ably.com/${e}`},onClick:i=>alert(`Clicked ${i}`)},e))})},T={parameters:{docs:{description:{story:"Displays a ContentTile that is clickable but doesn't show an explicit CTA link. Props: `cta.implicit={true}` makes the entire tile clickable with hover effects, but hides the CTA link text."}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with implicit CTA ${e}`,description:"This ContentTile is linked but has no call-to-action button.",feature:c,featureType:"image",cta:{text:"Learn More",url:`https://ably.com/${e}`,implicit:!0},onClick:i=>alert(`Clicked ${i}`)},e))})},C={parameters:{docs:{description:{story:'Displays a ContentTile with a single icon as the feature element. Props: `featureType="icon"` with `feature` set to an icon name string, rendering a smaller, icon-based header instead of a full image.'}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with Icon ${e}`,description:"This ContentTile displays an icon above the content.",feature:"icon-display-ui",featureType:"icon"},e))})},b={parameters:{docs:{description:{story:'Displays a ContentTile combining an icon feature with a call-to-action link. Props: `featureType="icon"` with `cta` object, creating a compact tile suitable for navigation cards or action items.'}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with Icon ${e}`,description:"This ContentTile displays an icon above the content.",feature:"icon-display-ui",featureType:"icon",cta:{text:"Learn More",url:`https://ably.com/${e}`},onClick:i=>alert(`Clicked ${i}`)},e))})},x={parameters:{docs:{description:{story:"Displays a minimal ContentTile with only text content and a CTA link, no feature element. Props: `cta` object without `feature` prop, creating a simple text-based card ideal for link lists or navigation menus."}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with Icon ${e}`,description:"This ContentTile displays a cta, but no feature.",cta:{text:"Learn More",url:`https://ably.com/${e}`},onClick:i=>alert(`Clicked ${i}`)},e))})},v={parameters:{docs:{description:{story:"Displays a ContentTile with status or category badges below the description. Props: `badges` array of objects with `label` and optional `color`, useful for highlighting features, statuses, or categories (e.g., 'New', 'Beta', 'Featured')."}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with Badges ${e}`,description:"This ContentTile displays several badges.",featureType:"image",badges:[{label:"New"},{label:"Featured",color:"blue"},{label:"Beta",color:"yellow"}]},e))})},w={parameters:{docs:{description:{story:"Demonstrates a fully-featured ContentTile with all available options combined. Props: `feature` (image), `featureIcons` (tech badges), `cta` (clickable link), and `badges` (status labels), showcasing the component's maximum capabilities."}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with All Features ${e}`,description:"This ContentTile displays image, icons, CTA, and badges.",feature:c,featureType:"image",featureIcons:["icon-tech-javascript","icon-tech-typescript"],cta:{text:"Get Started",url:`https://ably.com/${e}`},onClick:i=>alert(`Clicked ${i}`),badges:[{label:"Popular"},{label:"Pro",color:"green"}]},e))})},k={parameters:{docs:{description:{story:"Displays a ContentTile with non-encapsulated styling and no feature padding. Props: `encapsulated={false}` with `featurePadding={false}`, creating a more compact layout where the image extends to the container edges."}}},render:()=>t.jsx("div",{className:r,children:[1,2,3,4].map(e=>t.jsx(n,{title:`Content Tile with Non-Encapsulated Content ${e}`,description:"This ContentTile displays a content tile with non-encapsulated content.",encapsulated:!1,feature:c,featureType:"image",featurePadding:!1,cta:{text:"Get Started",url:`https://ably.com/${e}`}},e))})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Displays a ContentTile with an image feature that extends to fill the container. Props: \`featureType="image"\`, \`featurePadding={false}\` to allow the image to reach the edges.'
      }
    }
  },
  render: () => <div className={gridStyle}>
      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={\`Content Tile with Image \${i}\`} description="This ContentTile displays an image above the content." feature={fullImage} featureType="image" featurePadding={false} />)}
    </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Displays a ContentTile with a vertically centered image feature. Props: \`featureType="image"\`, \`centerFeature={true}\` to vertically center the image within the feature container.'
      }
    }
  },
  render: () => <div className={gridStyle}>
      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={\`Content Tile with Centered Image \${i}\`} description="This ContentTile displays an image above the content." feature={centeredImage} featureType="image" centerFeature />)}
    </div>
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Displays a ContentTile with technology icons overlaid in the bottom-right corner of the image feature. Props: \`featureIcons\` array contains icon names that are displayed as badges on the image."
      }
    }
  },
  render: () => <div className={gridStyle}>
      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={\`Content Tile with Image Icons \${i}\`} description="This ContentTile displays a row of icons as featureIcons." feature={fullImage} featureType="image" featureIcons={["icon-tech-javascript", "icon-tech-typescript", "icon-tech-python"]} />)}
    </div>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Displays a ContentTile with an image feature and a visible call-to-action link. Props: `cta` object with `text` and `url`, making the entire tile clickable with hover effects and displaying the CTA link text at the bottom."\n      }\n    }\n  },\n  render: () => <div className={gridStyle}>\n      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={`Content Tile with explicit CTA ${i}`} description="This ContentTile displays a call-to-action button." feature={fullImage} featureType="image" cta={{\n      text: "Learn More",\n      url: `https://ably.com/${i}`\n    }} onClick={url => alert(`Clicked ${url}`)} />)}\n    </div>\n}',...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Displays a ContentTile that is clickable but doesn't show an explicit CTA link. Props: \`cta.implicit={true}\` makes the entire tile clickable with hover effects, but hides the CTA link text."
      }
    }
  },
  render: () => <div className={gridStyle}>
      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={\`Content Tile with implicit CTA \${i}\`} description="This ContentTile is linked but has no call-to-action button." feature={fullImage} featureType="image" cta={{
      text: "Learn More",
      url: \`https://ably.com/\${i}\`,
      implicit: true
    }} onClick={url => alert(\`Clicked \${url}\`)} />)}
    </div>
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Displays a ContentTile with a single icon as the feature element. Props: \`featureType="icon"\` with \`feature\` set to an icon name string, rendering a smaller, icon-based header instead of a full image.'
      }
    }
  },
  render: () => <div className={gridStyle}>
      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={\`Content Tile with Icon \${i}\`} description="This ContentTile displays an icon above the content." feature="icon-display-ui" featureType="icon" />)}
    </div>
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Displays a ContentTile combining an icon feature with a call-to-action link. Props: \`featureType="icon"\` with \`cta\` object, creating a compact tile suitable for navigation cards or action items.'
      }
    }
  },
  render: () => <div className={gridStyle}>
      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={\`Content Tile with Icon \${i}\`} description="This ContentTile displays an icon above the content." feature="icon-display-ui" featureType="icon" cta={{
      text: "Learn More",
      url: \`https://ably.com/\${i}\`
    }} onClick={url => alert(\`Clicked \${url}\`)} />)}
    </div>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Displays a minimal ContentTile with only text content and a CTA link, no feature element. Props: \`cta\` object without \`feature\` prop, creating a simple text-based card ideal for link lists or navigation menus."
      }
    }
  },
  render: () => <div className={gridStyle}>
      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={\`Content Tile with Icon \${i}\`} description="This ContentTile displays a cta, but no feature." cta={{
      text: "Learn More",
      url: \`https://ably.com/\${i}\`
    }} onClick={url => alert(\`Clicked \${url}\`)} />)}
    </div>
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Displays a ContentTile with status or category badges below the description. Props: \`badges\` array of objects with \`label\` and optional \`color\`, useful for highlighting features, statuses, or categories (e.g., 'New', 'Beta', 'Featured')."
      }
    }
  },
  render: () => <div className={gridStyle}>
      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={\`Content Tile with Badges \${i}\`} description="This ContentTile displays several badges." featureType="image" badges={[{
      label: "New"
    }, {
      label: "Featured",
      color: "blue"
    }, {
      label: "Beta",
      color: "yellow"
    }]} />)}
    </div>
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a fully-featured ContentTile with all available options combined. Props: \`feature\` (image), \`featureIcons\` (tech badges), \`cta\` (clickable link), and \`badges\` (status labels), showcasing the component's maximum capabilities."
      }
    }
  },
  render: () => <div className={gridStyle}>
      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={\`Content Tile with All Features \${i}\`} description="This ContentTile displays image, icons, CTA, and badges." feature={fullImage} featureType="image" featureIcons={["icon-tech-javascript", "icon-tech-typescript"]} cta={{
      text: "Get Started",
      url: \`https://ably.com/\${i}\`
    }} onClick={url => alert(\`Clicked \${url}\`)} badges={[{
      label: "Popular"
    }, {
      label: "Pro",
      color: "green"
    }]} />)}
    </div>
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Displays a ContentTile with non-encapsulated styling and no feature padding. Props: \`encapsulated={false}\` with \`featurePadding={false}\`, creating a more compact layout where the image extends to the container edges."
      }
    }
  },
  render: () => <div className={gridStyle}>
      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={\`Content Tile with Non-Encapsulated Content \${i}\`} description="This ContentTile displays a content tile with non-encapsulated content." encapsulated={false} feature={fullImage} featureType="image" featurePadding={false} cta={{
      text: "Get Started",
      url: \`https://ably.com/\${i}\`
    }} />)}
    </div>
}`,...k.parameters?.docs?.source}}};const X=["WithImageFeature","WithCenteredImageFeature","WithFeatureIcons","WithImageFeatureAndExplicitCTA","WithImageFeatureAndImplicitCTA","WithIconFeature","WithIconFeatureAndCTA","WithCTAOnly","WithBadges","WithImageFeatureAndEverything","WithNonEncapsulatedContentTile"];export{v as WithBadges,x as WithCTAOnly,g as WithCenteredImageFeature,f as WithFeatureIcons,C as WithIconFeature,b as WithIconFeatureAndCTA,h as WithImageFeature,w as WithImageFeatureAndEverything,y as WithImageFeatureAndExplicitCTA,T as WithImageFeatureAndImplicitCTA,k as WithNonEncapsulatedContentTile,X as __namedExportsOrder,Q as default};
