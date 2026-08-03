import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Jt as n}from"./iframe-CKFKr-bK.js";import{t as r}from"./jsx-runtime-P1stK3o1.js";import{n as i,t as a}from"./Icon-BH-JOwHS.js";import{n as o,t as s}from"./cn-nhyqQX1a.js";import{n as c,t as l}from"./Badge-BuZalXFb.js";import{n as u,t as d}from"./FeaturedLink-1KuaVaX7.js";var f,p,m,h=e((()=>{f=t(n()),c(),u(),i(),o(),p=r(),m=({title:e,className:t,description:n,cta:r,feature:i,featureType:o=`image`,featureIcons:c,centerFeature:u,badges:m,onClick:h,featureClassName:g,titleClassName:_,descriptionClassName:v,ctaClassName:y,featurePadding:b=!0,encapsulated:x=!0})=>{let S=(0,f.useCallback)(()=>{r&&(h?h(r.url):window.location.href=r.url)},[h,r]),C=(0,f.useMemo)(()=>i?o===`image`?(0,p.jsxs)(`div`,{className:s(`content-tile__feature relative p-3 h-[200px] pb-0 flex items-end justify-center overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-1200 border border-neutral-300 dark:border-neutral-1000 transition-[border-color,height]`,u&&`items-center pb-3`,r&&!x&&`group-hover/content-tile:border-neutral-500 dark:group-hover/content-tile:border-neutral-800 transition-colors`,g),children:[(0,p.jsx)(`div`,{className:s(`flex justify-center max-h-[200px]`,!u&&`[&_img]:min-w-max [&_img]:h-[200px]`,b&&!u&&`pt-6`),children:i}),c&&c?.length>0&&(0,p.jsx)(`div`,{className:`absolute bottom-3 right-3 flex gap-1.5 bg-neutral-000 dark:bg-neutral-1300 rounded border border-neutral-200 dark:border-neutral-1100 px-2 py-1.5`,children:c.map((e,t)=>(0,p.jsx)(a,{name:e,size:`18px`},e+t))})]}):o===`icon`?(0,p.jsx)(`div`,{className:s(`h-9`,g),children:typeof i==`string`?(0,p.jsx)(a,{name:i,size:`36px`}):i}):null:null,[u,i,g,c,x,b,o,r]);return(0,p.jsxs)(`div`,{className:s(`group/content-tile`,x&&`p-5 border border-neutral-300 dark:border-neutral-1000 rounded-lg`,r&&`cursor-pointer`,r&&x&&`hover:border-neutral-500 dark:hover:border-neutral-800 transition-colors`,t),...r&&{onClick:S,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),S())},tabIndex:0,role:`link`,"aria-label":e},children:[C,(0,p.jsxs)(`div`,{className:`content-tile__content pr-4`,children:[e&&(0,p.jsx)(`h2`,{className:s(`content-tile__title mb-2 ui-text-h4 text-neutral-1300 dark:text-neutral-000`,i&&`mt-4`,_),children:e}),n&&(0,p.jsx)(`div`,{className:s(`content-tile__description ui-text-p2 text-neutral-1000 dark:text-neutral-300`,r&&`text-neutral-800 dark:text-neutral-500 group-hover/content-tile:text-neutral-1000 dark:group-hover/content-tile:text-neutral-300 transition-colors`,(m||r&&!r.implicit)&&`mb-2`,v),children:n}),m&&m.length>0&&(0,p.jsx)(`div`,{className:`content-tile__badges mb-2 flex flex-wrap gap-2`,children:m.map(({label:e,className:t,...n},r)=>(0,p.jsx)(l,{className:s(`uppercase text-[10px]`,t),...n,children:e},e+r))}),r&&!r.implicit&&(0,p.jsx)(d,{url:`#`,additionalCSS:s(`py-0 pointer-events-none font-medium items-center text-neutral-800 dark:text-neutral-500 group-hover/content-tile:text-neutral-1300 dark:group-hover/content-tile:text-neutral-000 transition-colors [&_svg]:group-hover/content-tile:left-0`,y),iconColor:`text-orange-600`,children:r.text})]})]})};try{m.displayName=`ContentTile`,m.__docgenInfo={description:``,displayName:`ContentTile`,filePath:`/home/runner/work/website/website/packages/ui/src/core/ContentTile.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`The title text to display`,name:`title`,required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Additional CSS classes for the root container`,name:`className`,required:!1,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`The description content to display (text or React elements)`,name:`description`,required:!1,tags:{},type:{name:`ReactNode`}},cta:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Call-to-action configuration.
- text: The CTA button or link text.
- url: The destination URL for the CTA.
- implicit: If true, no explicit CTA button is shown.`,name:`cta`,required:!1,tags:{},type:{name:`{ text: string; url: string; implicit?: boolean; }`}},feature:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Content to display in the feature area (image or icon)`,name:`feature`,required:!1,tags:{},type:{name:`ReactNode`}},featureType:{defaultValue:{value:`image`},declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Type of feature to render - either 'image' or 'icon'`,name:`featureType`,required:!1,tags:{},type:{name:`enum`,raw:`"image" | "icon"`,value:[{value:`"image"`},{value:`"icon"`}]}},featureIcons:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Array of icon names to display as overlays on the feature`,name:`featureIcons`,required:!1,tags:{},type:{name:`IconName[]`}},centerFeature:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Whether to vertically center the feature content`,name:`centerFeature`,required:!1,tags:{},type:{name:`boolean`}},badges:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Array of badges to display`,name:`badges`,required:!1,tags:{},type:{name:`(BadgeProps & { label: string; })[]`}},onClick:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Custom click handler, receives the CTA URL if present`,name:`onClick`,required:!1,tags:{},type:{name:`((url?: string) => void)`}},featureClassName:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Additional CSS classes for the feature element`,name:`featureClassName`,required:!1,tags:{},type:{name:`string`}},titleClassName:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Additional CSS classes for the title element`,name:`titleClassName`,required:!1,tags:{},type:{name:`string`}},descriptionClassName:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Additional CSS classes for the description element`,name:`descriptionClassName`,required:!1,tags:{},type:{name:`string`}},ctaClassName:{defaultValue:null,declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Additional CSS classes for the CTA element`,name:`ctaClassName`,required:!1,tags:{},type:{name:`string`}},featurePadding:{defaultValue:{value:`true`},declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Whether to add padding-top to the feature content (default: true)`,name:`featurePadding`,required:!1,tags:{},type:{name:`boolean`}},encapsulated:{defaultValue:{value:`true`},declarations:[{fileName:`ui/src/core/ContentTile.tsx`,name:`TypeLiteral`}],description:`Whether to encapsulate the content tile in an outer container (default: true)`,name:`encapsulated`,required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{n(),h(),g=r(),_={title:`Components/Content Tile`,component:m,tags:[`autodocs`]},v=`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8`,y=(0,g.jsx)(`img`,{src:`https://placecats.com/300/200`,alt:`Kitten`,className:`rounded-t`}),b=(0,g.jsx)(`img`,{src:`https://placecats.com/300/100`,alt:`Kitten`,className:`rounded`}),x={parameters:{docs:{description:{story:'Displays a ContentTile with an image feature that extends to fill the container. Props: `featureType="image"`, `featurePadding={false}` to allow the image to reach the edges.'}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with Image ${e}`,description:`This ContentTile displays an image above the content.`,feature:y,featureType:`image`,featurePadding:!1},e))})},S={parameters:{docs:{description:{story:'Displays a ContentTile with a vertically centered image feature. Props: `featureType="image"`, `centerFeature={true}` to vertically center the image within the feature container.'}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with Centered Image ${e}`,description:`This ContentTile displays an image above the content.`,feature:b,featureType:`image`,centerFeature:!0},e))})},C={parameters:{docs:{description:{story:"Displays a ContentTile with technology icons overlaid in the bottom-right corner of the image feature. Props: `featureIcons` array contains icon names that are displayed as badges on the image."}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with Image Icons ${e}`,description:`This ContentTile displays a row of icons as featureIcons.`,feature:y,featureType:`image`,featureIcons:[`icon-tech-javascript`,`icon-tech-typescript`,`icon-tech-python`]},e))})},w={parameters:{docs:{description:{story:"Displays a ContentTile with an image feature and a visible call-to-action link. Props: `cta` object with `text` and `url`, making the entire tile clickable with hover effects and displaying the CTA link text at the bottom."}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with explicit CTA ${e}`,description:`This ContentTile displays a call-to-action button.`,feature:y,featureType:`image`,cta:{text:`Learn More`,url:`https://ably.com/${e}`},onClick:e=>alert(`Clicked ${e}`)},e))})},T={parameters:{docs:{description:{story:"Displays a ContentTile that is clickable but doesn't show an explicit CTA link. Props: `cta.implicit={true}` makes the entire tile clickable with hover effects, but hides the CTA link text."}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with implicit CTA ${e}`,description:`This ContentTile is linked but has no call-to-action button.`,feature:y,featureType:`image`,cta:{text:`Learn More`,url:`https://ably.com/${e}`,implicit:!0},onClick:e=>alert(`Clicked ${e}`)},e))})},E={parameters:{docs:{description:{story:'Displays a ContentTile with a single icon as the feature element. Props: `featureType="icon"` with `feature` set to an icon name string, rendering a smaller, icon-based header instead of a full image.'}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with Icon ${e}`,description:`This ContentTile displays an icon above the content.`,feature:`icon-display-ui`,featureType:`icon`},e))})},D={parameters:{docs:{description:{story:'Displays a ContentTile combining an icon feature with a call-to-action link. Props: `featureType="icon"` with `cta` object, creating a compact tile suitable for navigation cards or action items.'}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with Icon ${e}`,description:`This ContentTile displays an icon above the content.`,feature:`icon-display-ui`,featureType:`icon`,cta:{text:`Learn More`,url:`https://ably.com/${e}`},onClick:e=>alert(`Clicked ${e}`)},e))})},O={parameters:{docs:{description:{story:"Displays a minimal ContentTile with only text content and a CTA link, no feature element. Props: `cta` object without `feature` prop, creating a simple text-based card ideal for link lists or navigation menus."}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with Icon ${e}`,description:`This ContentTile displays a cta, but no feature.`,cta:{text:`Learn More`,url:`https://ably.com/${e}`},onClick:e=>alert(`Clicked ${e}`)},e))})},k={parameters:{docs:{description:{story:"Displays a ContentTile with status or category badges below the description. Props: `badges` array of objects with `label` and optional `color`, useful for highlighting features, statuses, or categories (e.g., 'New', 'Beta', 'Featured')."}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with Badges ${e}`,description:`This ContentTile displays several badges.`,featureType:`image`,badges:[{label:`New`},{label:`Featured`,color:`blue`},{label:`Beta`,color:`yellow`}]},e))})},A={parameters:{docs:{description:{story:"Demonstrates a fully-featured ContentTile with all available options combined. Props: `feature` (image), `featureIcons` (tech badges), `cta` (clickable link), and `badges` (status labels), showcasing the component's maximum capabilities."}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with All Features ${e}`,description:`This ContentTile displays image, icons, CTA, and badges.`,feature:y,featureType:`image`,featureIcons:[`icon-tech-javascript`,`icon-tech-typescript`],cta:{text:`Get Started`,url:`https://ably.com/${e}`},onClick:e=>alert(`Clicked ${e}`),badges:[{label:`Popular`},{label:`Pro`,color:`green`}]},e))})},j={parameters:{docs:{description:{story:"Displays a ContentTile with non-encapsulated styling and no feature padding. Props: `encapsulated={false}` with `featurePadding={false}`, creating a more compact layout where the image extends to the container edges."}}},render:()=>(0,g.jsx)(`div`,{className:v,children:[1,2,3,4].map(e=>(0,g.jsx)(m,{title:`Content Tile with Non-Encapsulated Content ${e}`,description:`This ContentTile displays a content tile with non-encapsulated content.`,encapsulated:!1,feature:y,featureType:`image`,featurePadding:!1,cta:{text:`Get Started`,url:`https://ably.com/${e}`}},e))})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    docs: {\n      description: {\n        story: "Displays a ContentTile with an image feature and a visible call-to-action link. Props: `cta` object with `text` and `url`, making the entire tile clickable with hover effects and displaying the CTA link text at the bottom."\n      }\n    }\n  },\n  render: () => <div className={gridStyle}>\n      {[1, 2, 3, 4].map(i => <ContentTile key={i} title={`Content Tile with explicit CTA ${i}`} description="This ContentTile displays a call-to-action button." feature={fullImage} featureType="image" cta={{\n      text: "Learn More",\n      url: `https://ably.com/${i}`\n    }} onClick={url => alert(`Clicked ${url}`)} />)}\n    </div>\n}',...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`WithImageFeature`,`WithCenteredImageFeature`,`WithFeatureIcons`,`WithImageFeatureAndExplicitCTA`,`WithImageFeatureAndImplicitCTA`,`WithIconFeature`,`WithIconFeatureAndCTA`,`WithCTAOnly`,`WithBadges`,`WithImageFeatureAndEverything`,`WithNonEncapsulatedContentTile`]}))();export{k as WithBadges,O as WithCTAOnly,S as WithCenteredImageFeature,C as WithFeatureIcons,E as WithIconFeature,D as WithIconFeatureAndCTA,x as WithImageFeature,A as WithImageFeatureAndEverything,w as WithImageFeatureAndExplicitCTA,T as WithImageFeatureAndImplicitCTA,j as WithNonEncapsulatedContentTile,M as __namedExportsOrder,_ as default};