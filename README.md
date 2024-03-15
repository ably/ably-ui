# ably-ui

`ably-ui` is the of home of the Ably design system library ([https://ably-ui.herokuapp.com/](https://ably-ui.herokuapp.com/)). It provides a showcase, development/test environment and a publishing pipeline for different distributables.

## Getting started

`ably-ui` is a library built in mind with supporting a variety of websites/apps based on core web technologies. That's why where possible we build based on those but publish in a way that is easy to consume for frameworks we use across our properties.

As an example, the `Logo` component has two templates, for a [React](https://reactjs.org/) component and [view-component](https://viewcomponent.org/) but uses the same CSS classes and same JavaScript hooks (`data-id`).

In some cases, this is impractical. Some components will be more specialized and take advantage of a given framework, and we will have no need to make it available in multiple frameworks (for example, something that is only used within signed in, SPA like areas).

### Guiding principles

1. Provide easy access to common patterns and assets, from brand colours to navigation.
2. Use the web platform as much as possible without relying on frameworks.
3. Be flexible in how the library can be integrated.

### Library structure

The library is built out of modules, assets, and JavaScript components. A module is a container for all of those.

For example, the `core` module provides the most general elements one can build the “chrome” of a web-based interface — typography, colours, spacing (i.e., containers) etc. The components within the module support our most common needs to build that “chrome”, like navigation elements, footer, hero sections, code samples etc. Assets, and JavaScript are all shared between the components in the module.

Components do not require assets directly — instead, it's up to the consumer to load the assets and pass them to the components. This ensures flexibility in terms of URLs.

Each module, apart from components, exposes a `scripts.js` and `styles.css`. `scripts.js` contains helper functions. `styles.css` contains CSS that does not belong to any module in particular.

### Installation

### NPM

This type of installation gives you access to module/components assets as well as React components.

```bash
npm install @ably/ui

# or

yarn add @ably/ui # Preferred
```

To attach the imported JavaScript from the `Core` module to the `window` object:

```js
import "@ably/ui/core/scripts";

// AblyUi.Core is now available on window
```

To import an es6 `core` module and expose nothing to window:

```js
import ablyUiCore from "@ably/ui/core/scripts";
```

To import the JavaScript for an `Accordion` component:

```js
import Accordion from "@ably/ui/core/accordion/component";
```

If your bundler supports CSS importing, you can import it as well:

```js
import "@ably/ui/core/styles.css";
```

### Setting up TailwindCSS

Currently, AblyUI CSS is built to work with TailwindCSS. To integrate it into your app:

1. Add AblyUI to your project
2. Add TailwindCSS to your project
   1. By project type:
      1. In [HTML](https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin)
      2. In [Gatsby](https://tailwindcss.com/docs/guides/gatsby)
         1. Add postCSS import with `npm install postcss-import`
   1. Further to the instructions, if installation is hanging for over 5 minutes or otherwise problematic, try installing the libraries one at a time
   1. Make sure you are installing v2 with `npm install -D tailwindcss@2.X`
3. Make sure you are using the format `@import 'tailwindcss/base';...` in your `global.css` file rather than the `@tailwind/base` format from Tailwind v3
4. Add the following to your `tailwind.config.js`. Note how different config properties are always extended by the `ablyUIConfig`:

```js
const extendConfig = require("@ably/ui/tailwind.extend.js");

module.exports = extendConfig((ablyUIConfig) => ({
  ...ablyUIConfig,
  purge: {
    content: [
      ...(relative - globbed - paths - to - your - templates),
      ...ablyUIConfig.purge.content,
    ],
    options: {
      ...ablyUIConfig.purge.options,
    },
  },
}));
```

1. In the CSS file you added your tailwind declarations to, import the CSS for the modules and components you need:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@import "@ably/ui/reset/styles.css"; /* needed as we disable the default Tailwind reset */
@import "@ably/ui/core/styles.css"; /* styles for core module components and more */
@import "@ably/ui/core/Meganav/component.css";
@import "@ably/ui/core/ContactFooter/component.css";
```

#### Importing React components

Note that depending on the component, you might still need to include CSS & JS for it:

```js
import Meganav from "@ably/ui/core/Meganav";
```

## Usage

### Icons

Putting SVG files inside a`src/MODULE_NAME/icons` folder will add them to a per-module sprites file that will be available at the root of the module (e.g., `core/sprites.svg`). This file can be loaded with the `loadSprites` helper available in the `core` module or include in the page directly.

Usage with the `Icon` React component:

```tsx
<Icon name="icon-display-live-chat" size="3rem" additionalCSS="block mb-16" />
```

Usage without a component:

```html
<!-- The width and height are required for correct sizing. The actual color class might depend on the svg and whether it uses strokes, fills etc. Note as well xlink:href, which is xlinkHref in react. -->
<svg class="w-12 h-12 text-cool-black">
  <use xlink:href="#sprite-disclosure-arrow" />
</svg>
```

Usage without a component, in React, with hover states. Note the [group](https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover) class:

```tsx
<a
  href="{url}"
  className="text-gui-default hover:text-gui-hover focus:text-gui-focus group"
>
  {children}
  <svg className="w-12 h-12 transform -rotate-90 align-top ui-icon-dark-grey group-hover:icon-gui-hover group-focus:icon-gui-focus ml-4">
    <use xlinkHref="#sprite-disclosure-arrow" />
  </svg>
</a>
```

See https://ably-ui.herokuapp.com/components/icon for more details.

### Fonts

Font assets are not included automagically but are part of the repo, together with an example of font-face file; see `src/core/fonts` for examples. Make sure to include the licence file declaration on usage.

### Accessibility

An important part of ably-ui is ensuring the produced UI is accessible to as wide range of users as possible. All components should adhere to at least AA accessibility standards. In most cases, this can be accomplished by following a few simple rules:

— use the correct [HTML elements](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML): anchors for navigation, buttons for interacting, lists for lists etc

- test using a screen reader (for example [Voice Over on a Mac OSX with Web rotor](https://support.apple.com/en-gb/guide/voiceover/welcome/mac))
  — confirm designs have appropriate tap targets, contrast
  — use [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) where you reach the limits of what you can do with HTML
  — don't break the web platform (i.e., don't break the behaviour of a back button, scrolling, in-page links etc)

## Development

To visualise the assets in `ably-ui`, there is a Storybook instance, which serves as both a showcase and a development environment.

Firstly, ensure you have all of the required project dependencies by running `yarn` in the project root.

Then, to run Storybook, run `yarn storybook` in the project root - it should open automatically in your browser.

To build Storybook as if it was a statically built site (i.e. what it looks like when deployed), run `yarn build-storybook` from the project root, go to the generated directory with `cd preview`, and then run `npx http-server` (accepting the prompt to install that package if you haven't done already). The built site will be available at the listed local URL.

#### Publishing pre-release packages for review apps

Make sure you commit & push your work before doing this.

You will need to authenticate with [npmjs](https://docs.npmjs.com/creating-and-viewing-access-tokens) to publish.

After the above, you should have:

- NPM_TOKEN set in your environment
- `.npmrc` file to read NPM_TOKEN from your environment like this:
  ```
  //registry.npmjs.org/:_authToken=${NPM_TOKEN}
  ```

To deploy a review app with your in-progress code, you can use the `pre-release` script:

```bash
# in root
scripts/pre-release.sh
```

This script is a combination of two scripts:

1. Pre-Release:

- update your local dependencies for ably-ui and run a production build
- release an NPM package with the version built from your current SemVer but adding a pre-release tag based on a short SHA of your HEAD commit

2. Update Pre-Release Version:

- commit all the above and push to origin

This will trigger a build of the review app.

### Components

Components and modules contain JS and CSS files, but no templates. Instead, for each framework that a given component supports, a separate "framework template" is created. A component can still be used in any other framework by just using it's required assets.

All components live in `src` and follow a directory and filename convention:

- module directory (TitleCase)
  - module asset files: `scripts.js` for JavaScript and `styles.css` for CSS
  - component directory (TitleCase)
    - `component.js` - this is the entry file for a component and is the only required file
    - `components.css` - additional CSS
    - for react, `components.tsx`

For example:

```
- Core
  - script.js
  - styles.css
  - Accordion
    - component.js
    - component.css
    - component.tsx
```

#### CSS

##### z-index and positioning

If using positioning any other than static, be mindful of creating stacking contexts. In `properties.css` you'll find the `z-index` values for the HTML stacking context (used by components like the meganav). When creating a new one within your component, hoist the z-index values to the selector that creates the stacking context and define `z-index` values there for easy scanning (see https://www.oreilly.com/library/view/developing-web-components/9781491905685/ch04.html for a good write-up on stacking contexts and z-index.).

### Formatting & linting files

By default, [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/) will handle most of the frontend files. You can use them through your editor (which should pick up the relevant config files) or on the command line (see `scripts` in package.json).

### Adding a new component

#### To add a new component:

1. Create a folder in `src`, in the module of your choice (i.e. `core`). The folder name should be TitleCase.
2. Add a `component.tsx`

- also add an empty `component.js` file (current legacy requirement)
- if the component has custom CSS, add a `component.css` file as well.

#### To see this component in Storybook:

Create a `[COMPONENT_NAME].stories.tsx` file alongside your `component` assets, following the examples of other Storybook stories, or their online documentation for guidance. When running Storybook, the story should be picked up and rendered in place automatically.

### Publishing

We use [Semantic Versioning 2.0.0](https://semver.org/) to version different library versions.

Packages are published to the [GitHub private registry](https://github.com/features/packages).

Publishing is done by tagging a release in GitHub. This triggers a GitHub action that pushes to the private NPM registry as well as publishing new artefacts in the CDN, with the version taken from the tag of the GitHub release.

This will trigger GitHub actions in supported apps (currently [Voltaire](http://github.com/ably/voltaire) & [Website](http://github.com/ably/website)) to create a PR with an ably-ui version update.

**To trigger a release:**

- Make sure you have run pre-release script `./pre-release.sh` (This updates the npm package version for ably-ui in `package.json`).
- Merge your PR into `main` after it has been approved.
- On the Github [Ably-UI](http://github.com/ably/ably-ui) repo, [create a new release](https://github.com/ably/ably-ui/releases/new) tag.
- Create a new tag with the new version number for the release.
  - _Do not prefix the tag with a `v`_
- Add a meaningful title for the Release.
- Click on the Autogenerate release notes button.
- Publish Release.
- Check the Github `Actions` tab in the repo to make sure the release is green.
- Upon successful release, a compiled version of the Storybook site will be deployed to Github Pages.

This will release the packages and update library and create & push the commit & tag, and also create corresponding PRs in Voltaire & Website. It will also deploy a new Storybook site to [https://ably.github.io/ably-ui/](https://ably.github.io/ably-ui/).

### Running tests

The repo includes [Cypress](https://www.cypress.io/) for snapshot, screenshot, parity and behaviour testing. Cypress runs against the "preview" server (e.g. the same server used for development).

**Snapshot testing** takes saves the DOM and compares it between runs - updating of snapshots can be done in the Cypress UI.

**Screenshot testing** takes a screenshot of a component and compares it between runs. Diffs are located in `cypress/screenshots`. To update a screenshot, delete it.

**Parity testing** checks VW/React components; screenshots are taken of both versions and fail if they are different.

**Behaviour testing** clicks around the DOM and checks for singular elements on the page to be updated.

To run integration tests (using [Cypress](https://www.cypress.io/)), you'll need to have the "preview app" running on port 5000, then run:

```bash
yarn cy:open
```

This will open the UI for Cypress, from which you can run the tests. Screenshots are saved in `cypress/screenshots`.
