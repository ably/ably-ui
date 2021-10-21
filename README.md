**_Note:_** some features are still in development and their documentation might be incomplete. Lookout for the ⚠️ icon.

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

The library is built out of modules, assets, JavaScript & ruby modules and components. A module is a container for all of those.

For example, the `core` module provides the most general elements one can build the “chrome” of a web-based interface — typography, colours, spacing (i.e., containers) etc. The components within the module support our most common needs to build that “chrome”, like navigation elements, footer, hero sections, code samples etc. Assets, JavaScript & ruby modules are all shared between the components in the module.

Components do not require assets directly — instead, it's up to the consumer to load the assets and pass them to the components. This ensures flexibility in terms of URLs.

Each module, apart from components, exposes a `scripts.js`, `styles.css` and `MODULE_NAME.rb` files. `scripts.js` contains helper functions, `MODULE_NAME.rb` contains modules that components can include. `styles.css` contains CSS that does not belong to any module in particular.

### Installation

### NPM

This type of installation gives you access to module/components assets as well as React components.

Note, the package is currently hosted in our private GitHub registry, so you will need a `GITHUB_REGISTRY_TOKEN` environment variable in your shell to be able to install it. See [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) for instructions on obtaining one.

```bash
npm install @ably/ui

# or

yarn add @ably/ui
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
1. Add TailwindCSS to your project https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin
1. Add the following to your `tailwind.config.js`. Note how different config properties are always extended by the `ablyUIConfig`:

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

1. In the CSS file you added your tailwind declarations too, import the CSS for the modules and components you need:

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

#### Importing ViewComponent (Rails) components

To use `ably-ui` with [Ruby on Rails](https://rubyonrails.org/) add the `ably-ui` gem to your `Gemfile`:

```ruby
gem 'ably-ui',
    '1.0.0',
    require: 'ably_ui',
    source: 'https://rubygems.pkg.github.com/ably'
```

And then run:

```bash
bundle config https://rubygems.pkg.github.com/ably USERNAME:TOKEN
```

Where `USERNAME` is your GitHub username (without the `@`) and TOKEN is your [GitHub access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token). This is required because the gem is downloaded from a private gem registry on GitHub.

Components are exposed as [View Components](https://github.com/github/view_component) and should be available in any view:

```erb
<%= render(AblyUi::Core::Meganav.new) %>
```

Note that this loads neither CSS nor JS — these need to still be loaded by a bundler like webpack.

## Usage

### Icons

Putting SVG files inside and `src/MODULE_NAME/icons` folder will add them to a per-module sprites file that will be available at the root of the module (e.g., `core/sprites.svg`). This file can be loaded with the `loadSprites` helper available in the `core` module or include in the page directly.

Usage with the `Icon` React component:

```jsx
<Icon name="icon-display-live-chat" size="3rem" additionalCSS="block mb-16" />
```

Usage with `Icon` VW component:

```rb
<%= render(AblyUi::Core::Icon.new(name: "icon-gui-disclosure-arrow", size: "1rem", additional_css: "align-middle transform rotate-180 mr-4")) %>
```

Usage without a component:

```html
<!-- The width and height are required for correct sizing. The actual color class might depend on the svg and whether it uses strokes, fills etc. Note as well xlink:href, which is xlinkHref in react. -->
<svg class="w-12 h-12 text-cool-black">
  <use xlink:href="#sprite-disclosure-arrow" />
</svg>
```

Usage without a component, in React, with hover states. Note the [group](https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover) class:

```jsx
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

See `preview/app/javascript/styles/application.css` for an example when using webpacker/rails.

#### Rails

Because the gem directories are on the asset path (see [Importing ViewComponent (Rails) components](#user-content-importing-viewcomponent-rails-components) section), they will work with standard asset helpers (i.e., `asset_path`).

### Accessibility

An important part of ably-ui is ensuring the produced UI is accessible to as wide range of users as possible. All components should adhere to at least AA accessibility standards. In most cases, this can be accomplished by following a few simple rules:

— use the correct [HTML elements](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML): anchors for navigation, buttons for interacting, lists for lists etc

- test using a screen reader (for example [Voice Over on a Mac OSX with Web rotor](https://support.apple.com/en-gb/guide/voiceover/welcome/mac))
  — confirm designs have appropriate tap targets, contrast
  — use [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) where you reach the limits of what you can do with HTML
  — don't break the web platform (i.e., don't break the behaviour of a back button, scrolling, in-page links etc)

## Development

The repository includes a “preview” app, which is serves both as a showcase and development environment.

To use, first make sure you install dependencies both for the library and the “preview” app:

```bash
yarn && bundle
cd preview
yarn && bundle
```

Then, from the root of the repository, run:

```bash
yarn dev
```

This will run the app and use the published versions of the `ably-ui`, specified in `preview/Gemfile` and `preview/package.json` NPM package.

### Using the local ably-ui in the preview app

It's possible to use the local version of ably-ui in the “preview” app. Enabling this, requires separate steps for the `npm` and `ruby` packages.

For `npm`:

```bash
# in the root directory
yarn link
# in the the "preview" directory
yarn link @ably/ui
```

For `ruby`:

In `preview/Gemfile` replace `source: "https://rubygems.pkg.github.com/ably"` with `path: '../'` and run:

```bash
# in preview
bundle --no-cache
```

Why not `bundle config set local.ably-ui ../`? Because that feature is built around the local gem being a separate repo, and works poorly with our config.

A caveat of this approach is that the change `preview/Gemfile` should not be committed, as it will cause the remote app to not build.

### Using a deployed package of ably-ui in the preview app

If at anytime you don't want to use the local NPM package and/or gems any more, you can do:

```bash
# in "preview" directory
yarn unlink @ably/ui
```

Then change back `path` to source `source` in the `Gemfile`. If you need to update `Gemfile.lock` without installing gems, you can run `bundle lock`.

#### Publishing pre-release packages for review apps

Make sure you commit & push your work and remove the [development-specific config](#using-the-development-build-of-ably-ui-in-the-preview-app) before doing this.

You will need to authenticate with the GitHub [NPM registry](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages) and [gem registry](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages#authenticating-with-a-personal-access-token) to publish.

After the above, you should have:

- GITHUB_REGISTRY_TOKEN set in your environment (`.npmrc` will read from it)
- you should do registry login as described in the above docs with your GitHub username and password
- a `~/.gem/credentials` file with a `:github: Bearer TOKEN` (replace GITHUB_REGISTRY_TOKEN with your token - interpolation does not work here)

To deploy a review app with your in-progress code, you can use the `pre-release` script:

```bash
# in root
./pre-release
```

This will do a couple of things:

— update your local dependencies for ably-ui and run a production build
— release a gem and a NPM package with the version built from your current SemVer but adding a pre-release tag based on a short SHA of your HEAD commit

- update the preview app
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
    - for ruby components, you need `component.rb` and `component.html.erb`
    - for react, `components.jsx`

For example:

```
- Core
  - script.js
  - styles.css
  - Accordion
    - component.rb
    - component.html.erb
    - component.js
    - component.css
    - component.jsx
```

#### CSS

##### z-index and positioning

If using positioning any other than static, be mindful of creating stacking contexts. In `properties.css` you'll find the `z-index` values for the HTML stacking context (used by components like the meganav). When creating a new one within your component, hoist the z-index values to the selector that creates the stacking context and define `z-index` values there for easy scanning (see https://www.oreilly.com/library/view/developing-web-components/9781491905685/ch04.html for a good write-up on stacking contexts and z-index.).

### Formatting & linting files

By default, [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/) will handle most of the frontend files. You can use them through your editor (which should pick up the relevant config files) or on the command line (see `scripts` in package.json).

Neither handles `erb` and `rb` files. The only config for those files is at the moment in `editorconfig`.

#### Note

Until we have set up formatting scripts for `erb` it's worth setting up [htmlbeautifier](https://github.com/threedaymonk/htmlbeautifier) for your editor (for example with https://github.com/aliariff/vscode-erb-beautify if you use VS Code) and tracking [this issue in Prettier](https://github.com/prettier/plugin-ruby/issues/371), as Prettier is much faster and hopefully will get support for `erb`.

### Adding a new component

#### To add a new component:

1. Add it in `modules-config.js`
2. Create a folder in `src`, in the module of your choice. The folder name should be TitleCase.
3. Add a `component.js`

- if the component has custom CSS, add a `component.css` file as well. Add `@layer components {}` to its contents. Import the CSS file in `component.js`
- if you need a VW component, add `component.rb` and `component.html.erb`
- if you need a React component, add a `components.jsx`

#### To see this component in the preview app:

##### For React components:

1. Import the file into `preview/app/javascript/packs/application.js` and add as input to the `reactRenderer`
2. If it contains custom CSS, import it into `preview/app/javascript/styles/application.css`
3. Add a template in `preview/app/views/components`, with a `_react` suffix, i.e. `my_component_react.html.erb`

##### For VW components:

1. You will need to restart the server for Rails to load the component (this will also need to happen after any changes to `component.rb`)
1. If it contains custom CSS, import it into `preview/app/javascript/styles/application.css`
1. Add a template in `preview/app/views/components`, with a `_vw` suffix, i.e. `my_component_vw.html.erb`
1. If the component has any JavaScript, import it in the view (`preview/app/views/components/my_component_vw.html.erb`) and initialize:

```rb
<% content_for :component do %>
  <%= javascript_include_tag 'ably_ui/core/my_component/component' %>
  <script type="text/javascript">
    document.addEventListener("DOMContentLoaded", () => {
      const container = document.querySelector("[data-id=my_component]");
      AblyUI.Core.MyComponent(container);
    });
  </script>
<% end %>
```

### Publishing

We use [Semantic Versioning 2.0.0](https://semver.org/) to version different library versions.

Packages are published to the [GitHub private registry](https://github.com/features/packages).

Publishing is done by tagging a release in GitHub. This triggers a GitHub action that pushes to the private NPM and gem registries as well as publishing new artefacts in the CDN, with the version taken from the tag of the GitHub release. ⚠️

This will trigger GitHub actions in supported apps (currently [Voltaire](http://github.com/ably/voltaire) & [Website](http://github.com/ably/website)) to create a PR with an ably-ui version update.

**To trigger a release:**

- Merge your PR into `main`.
- On the Github [Ably-UI](http://github.com/ably/ui) repo, [create a new release](https://github.com/ably/ui/releases/new) tag.
- Create a new tag with the new version number for the release.
  - _Do not prefix the tag with a `v`_
- Add a meaningful title for the Release.
- Click on the Autogenerate release notes button.
- Publish Release.

This will release the packages, update library & preview app and create & push the commit & tag, and also create corresponding PRs in Voltaire & Website.

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
