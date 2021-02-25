**_Note:_** this project is documentation-driven, meaning most features described here are not yet implemented. Anything marked as ⚠️ is still WIP.

# ably-ui

`ably-ui` is the of home of the Ably design system library ([https://ably-ui.herokuapp.com/](https://ably-ui.herokuapp.com/)). It provides a showcase, development/test environment and a publishing pipeline for different distributables.

## Getting started

`ably-ui` is a library built in mind with supporting a variety of websites/apps based on core web technologies. That's why where possible we build based on those but publish in a way that is easy to consume for frameworks we use across our properties.

As an example, the `Logo` component has two templates, for a [react](https://reactjs.org/) component and [view-component](https://viewcomponent.org/) one but uses the same CSS classes and same Javascript hooks (`data-id`).

In a some cases, this is not practical. Some components will be more specialized and take advantage of a given framework and we will have no need to make it available in multiple frameworks (for example, something that is only used within signed in, SPA like areas). Check the dependencies section of a given module/component docs to see what is required. ⚠️

### Guiding principles

1. Provide easy access to common patterns, from brand colors to navigation
2. Use the web platform as much as possible without relying on frameworks
3. Be flexible in how the library can be integrated

#### Accessibility

An important part of ably-ui is ensuring the produced UI is accessible to as wide range of users as possible. All components should adhere to at least AA accessiblity standards. In most cases this can be accomplished by following a few simple rules:

- use the correct [HTML elements](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML): anchors for navigation, buttons for interacting, lists for lists etc
- test using a screen reader (for example [Voice Over on a Mac OSX with Web rotor](https://support.apple.com/en-gb/guide/voiceover/welcome/mac))
- confirm designs have appropriate tap targets, contrast
- use [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) where you reach the limits of what you can do with HTML
- don't break the web platform (ie. don't break the behaviour of a back button, scrolling, in-page links etc)

### Library structure

The library is built out of modules and components. A module contains assets and/or components (which can have their own assets too, like additional stylesheets or images) that are meant to help you construct a given type of UI.

For example, the `core` module provides the most general elements one can build the "chrome" of a web based interface - typography, colors, spacing (ie. containers) etc. The components within the module support our most common needs to build that "chrome", like navigation, footer, hero sections, code samples etc. ⚠️

### Installation

### CDN ⚠️

You can access all assets directly on the CDN:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ably/ably-ui@1.0.0/core/styles.css"
/>
<script src="https://cdn.jsdelivr.net/npm/@ably/ably-ui@1.0.0/core/scripts.js"></script>
```

The above includes all the CSS from the `Core` module and the `AblyUi.Core` Javascript namespace.

### NPM

This type of installation gives you access to module/components assets as well as React components.

Note the package is currently hosted in our private GitHub registry, so you will need a `GITHUB_REGISTRY_TOKEN` environment variable in your shell to be able to install it. See [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) for instructions on obtaining one.

```bash
npm install @ably/ably-ui

# or

yarn add @ably/ably-ui
```

To attach the imported Javascript from the `Core` module to the `window` object:

```js
import "@ably/ably-ui/core/scripts";

// AblyUi.Core is now available on window
```

To import an es6 `core` module and expose nothing to window:

```js
import ablyUiCore from "@ably/ably-ui/core/scripts";
```

To import the Javascript for an `Accordion` component:

```js
import Accordion from "@ably/ably-ui/core/accordion/component";
```

If your bundler supports CSS importing you can import it as well:

```js
import "@ably/ably-ui/core/styles.css";
```

#### Importing React components

If you are using [React](https://reactjs.org/), the import is different. Note that depending on the component, you might still need include CSS & JS for it:

```js
import Meganav from "@ably/ably-ui/core/Meganav";
```

#### Importing ViewComponent (Rails) components

To use `ably-ui` with [Ruby on Rails](https://rubyonrails.org/) add the `ably-ui` gem to your `Gemfile`:

```ruby
gem "ably-ui", '~> 0.0.13', require: 'ably_ui', source: "https://rubygems.pkg.github.com/ably"
```

And then run:

```bash
bundle config https://rubygems.pkg.github.com/ably USERNAME:TOKEN
```

Where `USERNAME` is your Github username (without the `@`) and TOKEN is your [Github access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token). This is require because the gem is downloaded from a private gem registry on Github.

Components are exposed as [View Components](https://github.com/github/view_component) and should be available in any view:

```erb
<%= render(AblyUi::Core::Meganav.new) %>
```

To load CSS/JS, in `application.rb` add:

```
config.assets.paths << AblyUi::Integration.asset_paths
```

Then in files Javascript files loaded by Sprockets, you can do:

```js
//= require ably_ui/core/accordion/component
```

And in CSS files:

```css
/*
*=require ably_ui/core/meganav/component
*/
```

If you are using webpacker, install the npm module and import from there. (Note: it would obviously be better to have a single dependency but webpacker does not support dynamic path loading at the time of writing).

## Usage

### Icons

Putting svg files inside and `src/MODULE_NAME/icons` folder will add them to a per-module sprites file that will be available at the root of the module (eg. `core/sprites.svg`). This file can be loaded with the `loadSprites` helper available in the `core` module or include in the page directly. The only thing to remember here is that we use the `<use>` tag for loading icons which at the time of writing does not support CORS and so expects an identifier of a `symbol` already loaded on the page.

A simple example of using an icon directly would be:

```html
<!-- The width and height are required for correct sizing. The actual color class might depend on the svg and whether it uses strokes, fills etc. Note as well xlink:href, which is xlinkHref in react. -->
<svg class="w-12 h-12 text-cool-black">
  <use xlink:href="#sprite-disclosure-arrow" />
</svg>
```

A react example with hover states, note the [group](https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover) class:

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

### Fonts

Font assets are not included automagically but are part of the repo, together with an example of font-face file; see `src/core/fonts` for examples. Make sure to include the licence file declaration on usage.
See `preview/app/javascript/styles/application.css` for an example when using webpacker/rails.

#### Rails

Because the gem directories are on the asset path (see [Importing ViewComponent (Rails) components)]() section), they will work with standard asset helpers.

## Development

The repository includes a "preview" app which is serves both as a showcase and development environment. To start it, go into the preview directory and run:

```bash
# install dependecies
bundle
yarn

# run server
bin/rails server -p 5000
bin/webpack-dev-server
```

This will run the app but use the published versions of the `ably-ui` gem and npm package. To develop the package locally, you will need to do 2 things:

1. Make the app use local versions of the packages
2. Run a process to rebuild the packages

For `1`, do the following:

```bash
# in the root directory
yarn link
# in the the "preview" directory
yarn link @ably/ably-ui
```

For the gem, in the gemfile replace `source: "https://rubygems.pkg.github.com/ably"` with `path: '../'`. You might need to do `bundle clean --force` for bundler to start using the local version of the gem.

For `2`:

```
./scripts/webpack-watch.js
```

Alternatively, there is a `procfile` that can be used by [foreman](https://github.com/ddollar/foreman) and will run all 3 processes for you:

```bash
# install foreman gem
gem install foreman

foreman start
```

This will start webpack rebuild for the package, webpack-dev-server to observe these changes and the rails server to run the app.

If at anytime you don't want to use the local gems anymore, you can do:

```bash
# in "preview" directory
yarn unlink @ably/ably-ui
```

And change back `path` to source `source`. If this just for a review app deployment, you can rebuild the `Gemfile.lock` without installing packages with `bundle lock`.

#### Publishing packages for review apps

To deploy a review app with your in-progress code, you can use the `pre-release` script:

```bash
# in root
./pre-release 0.0.16 20
```

The first number should be the current semver and second should can be any identifier from the last `0.0.16.dev.xx` number. Note when we move to a public repo, this will be removed and replaced with a system where review apps can download directly from the repo.

### Components

Components and modules contain JS and CSS files but no templates. Instead, for each framework that a given component supports, a separate "framework template" is created. A component can still be used in any other framework by just using it's required assets.

All components live in `src` and follow a directory and filename convention:

- module directory (TitleCase)
  - module asset files: `scripts.js` for Javascript and `styles.css` for CSS
  - component directory (TitleCase)
    - entry asset, template and framework files (all named `component` but with adequate extensions)
    - other files ⚠️

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

If using positioning any other then static, be mindful of creating stacking contexts. In `properties.css` you'll find the `z-index` values for the html stacking context (used by components like the meganav). When creating a new one within your component, hoist the z-index values to the selector that creates the stacking context and define `z-index` values there for easy scanning (see https://www.oreilly.com/library/view/developing-web-components/9781491905685/ch04.html for a good write up on stacking contexts and z-index.).

#### Bundling

Run the `./build.sh` script. This will:

- remove all module directories at root and at `lib/ably_ui`
- run webpack to compile assets into module directories
- copy files that are compiled by webpack into `lib/ably_ui`
- copy files that do not need compilation from `src` to `lib/ably_ui`

### Formatting & linting files

By default, [Prettier](https://prettier.io/) & [Eslint](https://eslint.org/) will handle most of the frontend files. You can use them through you editor (which should pick up the relevant config files) or on the command line (see `scripts` in package.json).

Neither handles `erb` and `rb` files; in fact the only config for those files is at the moment in `editorconfig`.

#### Note

Until we have setup formatting scripts for `erb` it's worth setting up [htmlbeautifier](https://github.com/threedaymonk/htmlbeautifier) for your editor (for example with https://github.com/aliariff/vscode-erb-beautify if you use vscode) and tracking [this issue in Prettier](https://github.com/prettier/plugin-ruby/issues/371), as Prettier is much faster and hopefully will get support for `erb`.

### Adding a new component ⚠️

### Adding a new module ⚠️

### Publishing

We use [Semantic Versioning 2.0.0](https://semver.org/) to version different library versions.

Packages are published to the [Github private registry](https://github.com/features/packages).

Publishing is done by tagging a release in Github. This triggers a Github action that pushes to the private npm and gem registries as well as publishing new artifacts in the CDN, with the version taken from the tag of the Github release. ⚠️

#### Local publishing

You will need to authenticate with the Github [npm registry](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages) and [gem registry](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages#authenticating-with-a-personal-access-token) to publish.

To publish, run:

```
./release.sh VERSION_NUMBER
```

This will release the packages, update `package.json` and `version.rb` and create & push a new git tag.

### Running tests

Unit tests (using [Jest](https://jestjs.io/)): ⚠️

```bash
yarn jest

// or, to rerun tests on changes
yarn jest:watch
```

#### Integration & Visual testing

The repo includes [Cypress](https://www.cypress.io/) for integration and visual testing. The visual testing includes parity checking for vw/react components - screenshots are taken of both versions and fail if they are different. Note these screenshot only a given component but still navigate to the given pages to see them (ie. they don't load templates individually like unit tests would). The diff is

To run integration tests (using [Cypress](https://www.cypress.io/)), you'll need to have the preview app running on port 5000, then run:

```bash
yarn cy:open
```

This will open the UI for Cypress from which you can run the tests. Screenshots are saved in `cypress/screenshots`.
