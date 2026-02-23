import{j as e}from"./jsx-runtime-BX7wYO_o.js";import{c as d}from"./cn-Dw6GJglA.js";import"./iframe-BhqeG6ro.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Styles/Typography"},c={primary:[{label:"Title XL",className:"ui-text-title text-title-xl"},{label:"Title",className:"ui-text-title"},{label:"Title XS",className:"ui-text-title text-title-xs"},{label:"h1 XL",className:"ui-text-h1 text-h1-xl"},{label:"h1",className:"ui-text-h1"},{label:"h1 XS",className:"ui-text-h1 text-h1-xs"},{label:"h2 XL",className:"ui-text-h2 text-h2-xl"},{label:"h2",className:"ui-text-h2"},{label:"h2 XS",className:"ui-text-h2 text-h2-xs"},{label:"h3",className:"ui-text-h3"},{label:"h4",className:"ui-text-h4"},{label:"h5",className:"ui-text-h5"},{label:"p1",className:"ui-text-p1"},{label:"p2",className:"ui-text-p2"},{label:"p3",className:"ui-text-p3"},{label:"p4",className:"ui-text-p4"}],decorative:[{label:"Sub-header",className:"ui-text-sub-header"},{label:"Sub-header XS",className:"ui-text-sub-header text-sub-header-xs"},{label:"Overline 1",className:"ui-text-overline1"},{label:"Overline 2",className:"ui-text-overline2"}],gui:[{label:"Label 1",className:"ui-text-label1"},{label:"Label 2",className:"ui-text-label2"},{label:"Label 3",className:"ui-text-label3"},{label:"Label 4",className:"ui-text-label4"}],code:[{label:"Code 1",className:"ui-text-code"},{label:"Code 2",className:"ui-text-code2"}]},o=s=>e.jsxs("div",{className:d("rounded-lg p-4 flex flex-col gap-2 bg-neutral-100 text-neutral-1300 dark:bg-neutral-1200 dark:text-neutral-000",s.className),children:[e.jsx("div",{children:s.label}),e.jsx("code",{className:"font-mono ui-text-code2 bg-neutral-200 text-neutral-1200 dark:bg-neutral-1100 dark:text-neutral-100 rounded-lg p-2",children:s.className.split(" ").map(u=>`.${u}`).join("")})]},s.label),a={render:()=>e.jsx("div",{className:"grid sm:grid-cols-3 gap-4",children:c.primary.map(s=>o(s))}),parameters:{docs:{description:{story:"CSS classes for headings and paragraphs. Title, H1 and H2 have three sizes: XL, default, and XS - the default classes responsively adapt to the screen size, so the variant visible here will correspond to that."}}}},i={render:()=>e.jsx("div",{className:"grid sm:grid-cols-3 gap-4",children:c.decorative.map(s=>o(s))})},t={render:()=>e.jsx("div",{className:"grid sm:grid-cols-3 gap-4",children:c.gui.map(s=>o(s))})},l={render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-4",children:c.code.map(s=>o(s))})},n={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"ui-text-h2 mb-6",children:"Links"}),e.jsx("p",{className:"ui-text-p1 mb-6",children:"The default text color is inherited from the surrounding text."}),e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx("div",{className:"p-4 mb-4 mr-4 border rounded",children:e.jsxs("p",{className:"ui-text-p1 text-charcoal-grey",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra,"," ",e.jsxs("a",{href:"/xyz",className:"ui-link",children:[" ","per inceptos himenaeos"]}),"."]})}),e.jsx("div",{className:"p-4 mb-4 mr-4 border rounded bg-cool-black",children:e.jsxs("p",{className:"ui-text-p1 text-white",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra,"," ",e.jsxs("a",{href:"/123",className:"ui-link",children:[" ","per inceptos himenaeos"]}),"."]})}),e.jsx("div",{className:"p-4 mb-4 mr-4 border rounded bg-jazzy-pink",children:e.jsxs("p",{className:"ui-text-p1 text-charcoal-grey",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra"," ",e.jsx("a",{href:"/123",className:"ui-link-neutral",children:"per inceptos himenaeos"}),"."]})})]})]})},r={render:()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"ui-text-h2 mb-6",children:"Lists"}),e.jsx("p",{className:"ui-text-p1 mb-6",children:"Note that lists support having li items and li items with children, while keeping the same margin (in these examples, the ordered list has paragraphs)."}),e.jsxs("div",{className:"mb-10",children:[e.jsx("h4",{className:"ui-text-h3 mb-4",children:"Unordered"}),e.jsx("p",{className:"ui-text-p1",children:"This is the preceding paragraph sed nisl id lectus scelerisque facilisis consectetur eget nisl. Morbi scelerisque felis vel ullamcorper viverra. In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien."}),e.jsxs("ul",{className:"ui-unordered-list",children:[e.jsxs("li",{children:["Pellentesque consequat elit eget tristique sagittis. Etiam et erat et lorem elementum commodo. Aenean congue diam a nibh accumsan tincidunt.",e.jsx("ul",{children:e.jsxs("li",{children:["In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien.",e.jsxs("ul",{children:[e.jsx("li",{children:"Etiam et erat et lorem elementum commodo."}),e.jsx("li",{children:"Etiam et erat et lorem elementum commodo."})]})]})})]}),e.jsx("li",{children:"Etiam et erat et lorem elementum commodo."})]}),e.jsx("p",{className:"ui-text-p1 mb-6",children:"This is the following paragraph sed nisl id lectus scelerisque facilisis consectetur eget nisl. Morbi scelerisque felis vel ullamcorper viverra. In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien."})]}),e.jsxs("div",{className:"mb-10",children:[e.jsx("h4",{className:"ui-text-h3 mb-4",children:"Ordered"}),e.jsx("p",{className:"ui-text-p1",children:"This is the preceding paragraph sed nisl id lectus scelerisque facilisis consectetur eget nisl. Morbi scelerisque felis vel ullamcorper viverra. In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien."}),e.jsx("ol",{className:"ui-ordered-list",children:e.jsxs("li",{children:[e.jsx("p",{children:"Pellentesque consequat elit eget tristique sagittis. Etiam et erat et lorem elementum commodo. Aenean congue diam a nibh accumsan tincidunt."}),e.jsx("ol",{children:e.jsxs("li",{children:[e.jsx("p",{children:"In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien."}),e.jsx("ol",{children:e.jsx("li",{children:e.jsx("p",{children:"Etiam et erat et lorem elementum commodo."})})})]})})]})}),e.jsx("p",{className:"ui-text-p1 mb-6",children:"This is the following paragraph sed nisl id lectus scelerisque facilisis consectetur eget nisl. Morbi scelerisque felis vel ullamcorper viverra. In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien."})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid sm:grid-cols-3 gap-4">
      {styles.primary.map(style => fontCell(style))}
    </div>,
  parameters: {
    docs: {
      description: {
        story: "CSS classes for headings and paragraphs. Title, H1 and H2 have three sizes: XL, default, and XS - the default classes responsively adapt to the screen size, so the variant visible here will correspond to that."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid sm:grid-cols-3 gap-4">
      {styles.decorative.map(style => fontCell(style))}
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid sm:grid-cols-3 gap-4">
      {styles.gui.map(style => fontCell(style))}
    </div>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">
      {styles.code.map(style => fontCell(style))}
    </div>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <h3 className="ui-text-h2 mb-6">Links</h3>
      <p className="ui-text-p1 mb-6">
        The default text color is inherited from the surrounding text.
      </p>
      <div className="flex flex-wrap">
        <div className="p-4 mb-4 mr-4 border rounded">
          <p className="ui-text-p1 text-charcoal-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra,{" "}
            <a href="/xyz" className="ui-link">
              {" "}
              per inceptos himenaeos
            </a>
            .
          </p>
        </div>
        <div className="p-4 mb-4 mr-4 border rounded bg-cool-black">
          <p className="ui-text-p1 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra,{" "}
            <a href="/123" className="ui-link">
              {" "}
              per inceptos himenaeos
            </a>
            .
          </p>
        </div>
        <div className="p-4 mb-4 mr-4 border rounded bg-jazzy-pink">
          <p className="ui-text-p1 text-charcoal-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra{" "}
            <a href="/123" className="ui-link-neutral">
              per inceptos himenaeos
            </a>
            .
          </p>
        </div>
      </div>
    </>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <h3 className="ui-text-h2 mb-6">Lists</h3>
      <p className="ui-text-p1 mb-6">
        Note that lists support having li items and li items with children,
        while keeping the same margin (in these examples, the ordered list has
        paragraphs).
      </p>

      <div className="mb-10">
        <h4 className="ui-text-h3 mb-4">Unordered</h4>
        <p className="ui-text-p1">
          This is the preceding paragraph sed nisl id lectus scelerisque
          facilisis consectetur eget nisl. Morbi scelerisque felis vel
          ullamcorper viverra. In id ante quis quam sodales auctor in a ante.
          Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla
          pellentesque sapien.
        </p>
        <ul className="ui-unordered-list">
          <li>
            Pellentesque consequat elit eget tristique sagittis. Etiam et erat
            et lorem elementum commodo. Aenean congue diam a nibh accumsan
            tincidunt.
            <ul>
              <li>
                In id ante quis quam sodales auctor in a ante. Maecenas
                faucibus, diam sit amet sollicitudin pellentesque, est nulla
                pellentesque sapien.
                <ul>
                  <li>Etiam et erat et lorem elementum commodo.</li>
                  <li>Etiam et erat et lorem elementum commodo.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Etiam et erat et lorem elementum commodo.</li>
        </ul>
        <p className="ui-text-p1 mb-6">
          This is the following paragraph sed nisl id lectus scelerisque
          facilisis consectetur eget nisl. Morbi scelerisque felis vel
          ullamcorper viverra. In id ante quis quam sodales auctor in a ante.
          Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla
          pellentesque sapien.
        </p>
      </div>

      <div className="mb-10">
        <h4 className="ui-text-h3 mb-4">Ordered</h4>
        <p className="ui-text-p1">
          This is the preceding paragraph sed nisl id lectus scelerisque
          facilisis consectetur eget nisl. Morbi scelerisque felis vel
          ullamcorper viverra. In id ante quis quam sodales auctor in a ante.
          Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla
          pellentesque sapien.
        </p>
        <ol className="ui-ordered-list">
          <li>
            <p>
              Pellentesque consequat elit eget tristique sagittis. Etiam et erat
              et lorem elementum commodo. Aenean congue diam a nibh accumsan
              tincidunt.
            </p>
            <ol>
              <li>
                <p>
                  In id ante quis quam sodales auctor in a ante. Maecenas
                  faucibus, diam sit amet sollicitudin pellentesque, est nulla
                  pellentesque sapien.
                </p>
                <ol>
                  <li>
                    <p>Etiam et erat et lorem elementum commodo.</p>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
        <p className="ui-text-p1 mb-6">
          This is the following paragraph sed nisl id lectus scelerisque
          facilisis consectetur eget nisl. Morbi scelerisque felis vel
          ullamcorper viverra. In id ante quis quam sodales auctor in a ante.
          Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla
          pellentesque sapien.
        </p>
      </div>
    </>
}`,...r.parameters?.docs?.source}}};const g=["Primary","Decorative","GUI","Code","Links","Lists"];export{l as Code,i as Decorative,t as GUI,n as Links,r as Lists,a as Primary,g as __namedExportsOrder,b as default};
