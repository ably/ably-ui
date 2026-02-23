> **This repository has been soft-archived.** The source code has moved to a
> private monorepo. This repo exists solely to host the GitHub Pages deployment.
> No new contributions are accepted.

# ably-ui

`ably-ui` is the of home of the Ably design system library ([https://ably-ui.herokuapp.com/](https://ably-ui.herokuapp.com/)). It provides a showcase, development/test environment and a publishing pipeline for different distributables.

### Library structure

The library is built out of modules, assets, and JavaScript components. A module is a container for all of those.

For example, the `core` module provides the most general elements one can build the “chrome” of a web-based interface — typography, colours, spacing (i.e., containers) etc. The components within the module support our most common needs to build that “chrome”, like navigation elements, footer, hero sections, code samples etc. Assets, and JavaScript are all shared between the components in the module.

Components do not require assets directly — instead, it's up to the consumer to load the assets and pass them to the components. This ensures flexibility in terms of URLs.

### Installation

### NPM

This type of installation gives you access to module/components assets as well as React components.

```bash
pnpm add @ably/ui # Preferred
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
@import "@ably/ui/core/Flash/component.css";
```

#### Importing React components

Note that depending on the component, you might still need to include CSS & JS for it:

```js
import Meganav from "@ably/ui/core/Meganav";
```

## Usage

### Icons

Icons are available in two formats to support different application types:

1. **React Component Imports** (recommended for React apps)
2. **SVG Spritesheets** (fallback for non-React apps)

We provide access to both custom local assets hosted in the repo and the third-party [Heroicons](https://heroicons.com/) library.

#### For React Applications (Recommended)

**Using the Icon React Component**

The `Icon` component is the preferred method for React applications, providing automatic fallback and consistent sizing:

```tsx
// Local custom icon
<Icon name="icon-display-live-chat" size="3rem" additionalCSS="block mb-16" />

// Heroicon with explicit variant
<Icon name="icon-gui-arrow-long-right-outline" size="2rem" />

// Heroicon using variant prop (appends variant to name)
<Icon name="icon-gui-chevron-down" variant="solid" size="1.5rem" />
```

**How the React Component Works**

1. **First**: Attempts to load a local React component generated from your custom SVGs
2. **Fallback**: If no local component exists, dynamically imports the corresponding heroicon
3. **Graceful degradation**: If neither exists, returns null (no icon displayed)

#### For Non-React Applications

**Using SVG Spritesheets**

For applications that don't use React, icons are available as SVG sprites that can be referenced directly:

```html
<!-- The width and height are required for correct sizing. The actual color class might depend on the svg and whether it uses strokes, fills etc. Note as well xlink:href, which is xlinkHref in react. -->
<svg class="w-12 h-12 text-cool-black">
  <use xlink:href="#sprite-disclosure-arrow" />
</svg>
```

Even in React applications, you can use the sprite method for advanced use cases like hover states with the [group](https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover) class:

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

The sprites file can be loaded with the `loadSprites` helper available in the `core` module or included in the page directly.

#### Icon Sources

**Local Custom Icons**

Putting SVG files inside a `src/core/icons` folder will:

1. Generate React components that can be imported dynamically
2. Add them to a per-group sprites file (e.g., `core/sprites-gui.svg`) for non-React usage

**Heroicons Integration**

The system automatically falls back to [Heroicons](https://heroicons.com/) when a local icon isn't found, using this naming convention:

- `icon-gui-{heroicon-name}-{variant}`

Where `variant` can be:

- `outline` → 24px outline icons
- `solid` → 24px solid icons
- `mini` → 20px solid icons
- `micro` → 16px solid icons

This hybrid approach allows you to use custom brand icons while having access to the entire heroicons library as a fallback.

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

### Quick Start

The easiest way to get started is to use the development script:

```bash
./bin/dev
```

This script will:

- Check that all required tools (Node.js, pnpm) are installed at the correct versions via asdf
- Install all project dependencies
- Start Storybook automatically

### Manual Setup

If you prefer to run commands manually:

Firstly, ensure you have all of the required project dependencies by running `pnpm install` in the project root.

Then, to run Storybook, run `pnpm storybook` in the project root - it should open automatically in your browser.

To build Storybook as if it was a statically built site (i.e. what it looks like when deployed), run `pnpm build-storybook` from the project root, go to the generated directory with `cd preview`, and then run `npx http-server` (accepting the prompt to install that package if you haven't done already). The built site will be available at the listed local URL.

### SWC compile flags

We have a dynamic SWC configuration which allows us to support compile-time feature flags in the library. This allows us to change the behaviour of certain code paths during compilation time (not runtime), which is mostly useful in development mode.

For example, there could be a flag somewhere in our code that logs additional debug information in development that is useless in a released version. It could look like this:

```ts
// Example usage in api-client.ts
declare const __DEBUG_MODE__: boolean;

const api = createApiClient();
if (__DEBUG_MODE__) {
  console.log("Debug mode enabled");
}
```

The flag can be added to the list in `swc.config.ts`, and enabled with an environment variable:

```
$ DEBUG_MODE=true pnpm build
```

### Publishing pre-release packages for review apps

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
    - `component.js` - supporting JS script (legacy)
    - `component.css` - additional CSS (legacy)
    - `[ComponentName].stories.tsx` - if React, a Storybook presentation file
  - if React, `[ComponentName].tsx` at a sibling level to the component directory

For example:

```
- Core
  - script.js
  - styles.css
  - Accordion
    - component.js
    - component.css
    - Accordion.stories.tsx
  - Accordion.tsx
```

#### CSS

##### z-index and positioning

If using positioning any other than static, be mindful of creating stacking contexts. In `properties.css` you'll find the `z-index` values for the HTML stacking context (used by components like the meganav). When creating a new one within your component, hoist the z-index values to the selector that creates the stacking context and define `z-index` values there for easy scanning (see https://www.oreilly.com/library/view/developing-web-components/9781491905685/ch04.html for a good write-up on stacking contexts and z-index.).

### Formatting & linting files

By default, [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/) will handle most of the frontend files. You can use them through your editor (which should pick up the relevant config files) or on the command line (see `scripts` in package.json).

### Adding a new component

#### To add a new component:

Add a `[ComponentName].tsx` file in `src`, in the module of your choice (most likely `core`). Any supporting files, i.e. stylesheets, should be placed in a directory with the same name of the component.

#### To see this component in Storybook:

Create a `[ComponentName].stories.tsx` file alongside your `component` assets, following the examples of other Storybook stories, or their online documentation for guidance. When running Storybook, the story should be picked up and rendered in place automatically.

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

### Review Apps

Review apps allow you to create temporary deployments of Storybook for sharing UI changes with stakeholders without requiring local development setup.

To create a review app:

1. Create a pull request with your changes
2. Add the `review-app` label to your PR
3. A Heroku review app will be automatically created and deployed
4. The deployment will appear in the deployments section of your PR (basic auth is enabled - ask fellow contributors for credentials if needed)

Review apps are automatically cleaned up when the PR is closed or the label is removed. Only repository contributors can create review apps.

### Running tests

`ably-ui` uses [vitest](https://vitest.dev/) with the [Storybook addon for vitest](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon) to automatically turn all stories into executable tests. This means that we don't have to explicitly write tests for stories, though we have the ability to write [play functions](https://storybook.js.org/docs/writing-stories/play-function), which allow us to test more detailed interactions.

The tests run in a browser environment using Playwright, providing comprehensive visual regression testing and interaction testing capabilities.

You can run the tests locally using:

```bash
pnpm test
```

This will run all story tests using vitest in a headless browser environment.
