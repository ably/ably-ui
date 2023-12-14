import React from 'react';

export const TypographyPage = () => {
  return (<section id="section-typography" class="mb-64">
    <h2 class="ui-text-h1 mb-40">Typography</h2>
    <p class="ui-text-p1 mb-32">Type definitions do not include margin as it can be contextual. Figma and the below list include recommended margins.</p>
    <p class="ui-text-p1 mb-32">The below list is created with ui-text-* helpers which include properties beyond the standard <code class="ui-inline-code">font-size</code> and <code class="ui-inline-code">line-height</code> that text-* includes.</p>
    <div class="mb-40">
      <hr class="m-0" />
      <p class="ui-text-title mt-64 mb-40 xs:mt-80 xs:mb-32 xl:mt-96 xl:mb-32">Title - this is a title</p>
      <hr class="m-0" />
      <p class="ui-text-h1 mb-40">H1 - this is an h1</p>
      <hr class="m-0" />
      <p class="ui-text-h2 mb-36">H2 - this is an h2</p>
      <hr class="m-0" />
      <p class="ui-text-h3 mb-24">H3 - this is an h3</p>
      <hr class="m-0" />
      <p class="ui-text-h4 mb-16">H4 - this is an h4</p>
      <hr class="m-0" />
      <p class="ui-text-h5 mb-16">H5 - this is an h5</p>
      <hr class="m-0" />
      <p class="ui-text-p1 mb-32">Paragraph 1</p>
      <hr class="m-0" />
      <p class="ui-text-p1 font-bold mb-32">Paragraph 1 (strong)</p>
      <hr class="m-0" />
      <p class="ui-text-p2 mb-24">Paragraph 2</p>
      <hr class="m-0" />
      <p class="ui-text-p2 font-bold mb-24">Paragraph 2 (strong)</p>
      <hr class="m-0" />
      <p class="ui-text-p3 mb-24">Paragraph 3</p>
      <hr class="m-0" />
      <p class="ui-text-p3 font-bold mb-24">Paragraph 3 (strong)</p>
      <hr class="m-0" />
      <p class="ui-figcaption mb-16">This is a figure caption style</p>
      <hr class="m-0" />

      <p class="ui-text-quote mb-24">Quote</p>
      <hr class="m-0" />
      <p class="ui-text-sub-header mb-40 xs:mb-48">Sub-header</p>
      <hr class="m-0" />
      <p class="ui-text-overline1 mb-12">Overline 1</p>
      <hr class="m-0" />
      <p class="ui-text-overline2 mb-8">Overline 2</p>
      <hr class="m-0" />
      <p class="ui-text-menu1">Menu label 1</p>
      <hr class="m-0" />
      <p class="ui-text-menu1 font-bold">Menu label 1 (strong)</p>
      <hr class="m-0" />
      <p class="ui-text-menu2">Menu label 2</p>
      <hr class="m-0" />
      <p class="ui-text-menu2 font-bold">Menu label 2 (strong)</p>
      <hr class="m-0" />
      <p class="ui-text-menu3">Menu label 3</p>
      <hr class="m-0" />
      <p class="ui-text-menu3 font-bold">Menu label 3 (strong)</p>
      <hr class="m-0" />
      <p class="ui-text-code">Code 1 font for code blocks</p>
      <hr class="m-0" />
      <p class="ui-text-code2">Code 2 font for code blocks</p>
      <hr class="m-0" />
      <p class="ui-text-p1 mt-12 mb-12">Text, then styling for <span class="ui-text-code-inline">inline code</span>, within paragraphs.</p>
      <hr class="m-0" />
    </div>

    <div class="mb-40">
      <h3 class="ui-text-h2 mb-24">Links</h3>
      <p class="ui-text-p1 mb-24">The default text color is inherited from the surrounding text.</p>
      <div class="flex flex-wrap">
        <div class="p-16 mb-16 mr-16 border rounded">
          <p class="ui-text-p1 text-charcoal-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, <a href="/xyz" class="ui-link">per inceptos himenaeos</a>.</p>
        </div>
        <div class="p-16 mb-16 mr-16 border rounded bg-cool-black">
          <p class="ui-text-p1 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, <a href="/123" class="ui-link">per inceptos himenaeos</a>.</p>
        </div>
        <div class="p-16 mb-16 mr-16 border rounded bg-jazzy-pink">
          <p class="ui-text-p1 text-charcoal-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, <a href="/123" class="ui-link-neutral">per inceptos himenaeos</a>.</p>
        </div>
      </div>
    </div>

    <div class="mb-40">
      <h3 class="ui-text-h2 mb-24">Lists</h3>
      <p class="ui-text-p1 mb-24">Note that lists support having li items and li items with children, while keeping the same margin (in these examples, the ordered list has paragraphs).</p>
      
      <div class="mb-40">
        <h4 class="ui-text-h3 mb-16">Unordered</h4>
        <p class="ui-text-p1">This is the preceding paragraph sed nisl id lectus scelerisque facilisis consectetur eget nisl. Morbi scelerisque felis vel ullamcorper viverra. In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien.</p>
        <ul class="ui-unordered-list">
          <li>Pellentesque consequat elit eget tristique sagittis. Etiam et erat et lorem elementum commodo. Aenean congue diam a nibh accumsan tincidunt.
            <ul>
              <li>In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien.
                <ul>
                  <li>Etiam et erat et lorem elementum commodo.</li>
                  <li>Etiam et erat et lorem elementum commodo.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Etiam et erat et lorem elementum commodo.</li>
        </ul>
        <p class="ui-text-p1 mb-24">This is the following paragraph sed nisl id lectus scelerisque facilisis consectetur eget nisl. Morbi scelerisque felis vel ullamcorper viverra. In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien.</p>
      </div>

      <div class="mb-40">
        <h4 class="ui-text-h3 mb-16">Ordered</h4>
        <p class="ui-text-p1">This is the preceding paragraph sed nisl id lectus scelerisque facilisis consectetur eget nisl. Morbi scelerisque felis vel ullamcorper viverra. In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien.</p>
        <ol class="ui-ordered-list">
          <li>
            <p>Pellentesque consequat elit eget tristique sagittis. Etiam et erat et lorem elementum commodo. Aenean congue diam a nibh accumsan tincidunt.</p>
            <ol>
              <li>
                <p>In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien.</p>
                <ol>
                  <li>
                    <p>Etiam et erat et lorem elementum commodo.</p>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
        <p class="ui-text-p1 mb-24">This is the following paragraph sed nisl id lectus scelerisque facilisis consectetur eget nisl. Morbi scelerisque felis vel ullamcorper viverra. In id ante quis quam sodales auctor in a ante. Maecenas faucibus, diam sit amet sollicitudin pellentesque, est nulla pellentesque sapien.</p>
      </div>
    </div>
  </section>)
}