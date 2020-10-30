**_Note:_** this project is documentation-driven, meaning most features described here are not yet implemented. Anything marked as ⚠️ is still WIP.

# ably-ui

`ably-ui` is the of home of the Ably design system library ([design.ably.com](https://design.ably.com)) ⚠️ . It provides a showcase, development/test environment and a publishing pipeline for different distributables.

## Getting started

`ably-ui` is a library built in mind with supporting a variety of websites/apps based on core web technologies. That's why where possible we build based on those but publish in a way that is easy to consume for frameworks we use across our properties.

In a couple of cases, this is not practical. Some components will be more specialized and take advantage of a given framework, making it an explicit dependency. Check the dependencies section of a given module/component docs to see what is required.

### Guiding principles

1. Provide easy access to common patterns, from brand colors to navigation
2. Use the web platform as much as possible without relying on frameworks
3. Be flexible in how the library can be integrated

### Library structure

The library is built out of modules and components. A module contains assets and/or components (which can have their own assets too, like additional stylesheets or images) that are meant to help you construct a given type of UI.

For example, the `core` module provides the most general elements one can build the "chrome" of a web based interface - typography, colors, spacing (ie. containers) etc. The components within the module support our most common needs to build that "chrome", like navigation, footer, hero sections, code samples etc. ⚠️

### Installation

### CDN ⚠️

You can access all assets directly on the CDN:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ably/ably-ui@1.0.0/core/styles.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/@ably/ably-ui@1.0.0/core/global.min.js"></script>
```

The above includes all the global CSS classes and variables from the `core` module and the `ablyUi.core` javascript namespace.

If needed, component HTML can be accessed as well:

```http
https://cdn.jsdelivr.net/npm/@ably/ably-ui@1.0.0/core/meganav/index.html
```

### NPM

This type of installation gives you access to `HTML` and `React` components.

⚠️ This works currently only through our private GitHub registry, so you will need a [Github Access Token in an `.npmrc` at the root of your project](https://docs.github.com/en/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#installing-a-package).

```bash
npm install @ably/ably-ui

# or

yarn add @ably/ably-ui
```

**_Note:_** Following examples assume an `es6` modules Javascript environment.

To attach the imported javascript from the `core` module to the `window` object: ⚠️

```js
import "@ably/ably-ui/core/global";

// ablyUi.core is now available on window
```

To import an es6 `core` module and expose nothing to window: ⚠️

```js
import ablyUiCore from "@ably/ably-ui/core";
```

To import the javascript for an `Accordion` component: ⚠️

```js
import Accordion from "@ably/ably-ui/core/accordion";
```

If your bundler supports HTML/CSS/etc importing you can import the module assets: ⚠️

```js
import "@ably/ably-ui/core/styles.css";
```

And components assets: ⚠️

```js
import megaNavHTML from "@ably/ably-ui/core/meganav/index.html";
```

#### Importing React components

If you are using [React](https://reactjs.org/), the import is different and the imported component will include all of its required assets (ie. styles unique to that component):

```js
import { Meganav } from "@ably/ably-ui/core/components/react";
```

#### Importing ViewComponent (Rails) components ⚠️

To use `ably-ui` with [Ruby on Rails](https://rubyonrails.org/) add the `ably-ui` gem to your `Gemfile`:

```ruby
gem 'ably-ui'
```

Components are exposed as [View Components](https://github.com/github/view_component) and should be available in any view:

```erb
<%= render(AblyUi::Core::Meganav.new) %>
```

See the [sidecar instructions](https://github.com/github/view_component#sidecar-assets-experimental) for how to load CSS/javascript assets included with components.

## Usage

### Fonts ⚠️

Fonts are loaded as part of the `core` module, but also accessible directly:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@ably/ably-ui@1.0.0/core/fonts.css"
/>
```

### Images ⚠️

Some images are part of modules and/or components and you might need to load them separately:

```html
<img
  src="https://cdn.jsdelivr.net/npm/@ably/ably-ui@1.0.0/core/images/logo.svg"
  alt="Ably logo"
/>
```

When using npm:

```js
import ablyLogo from "@ably/ably-ui/core/images/logo.svg";
```

## Development ⚠️

`ably-ui` is meant to be developed in separation by building and testing its elements first and foremost in a dedicated environment and only after in consumers.

See `package.json` for the minimum required node/yarn versions and then install dependencies with: `yarn`.

To start the server, run `yarn start` and go to `http://localhost:9000`. When changes are made to any files the server will refresh the page automatically.

### Adapted components

Adapted components are HTML components which have been wrapped into `React` or `Rails` compatible wrappers during build time. Details depend on the wrapper, but these components still can have an external JS and/or CSS file.

In some cases, these components will not work as intended - for example, if we have a component that needs to remove/add many DOM nodes as part of it's functionality. This would break `React` rendering. For these cases, add an exception to the build script for the given framework and create a dedicated component for that framework. ⚠️

### Publishing ⚠️

We use [Semantic Versioning 2.0.0](https://semver.org/) to version different library versions.

Publishing is done by tagging a release in Github. This triggers a Github action that pushes to the private npm and gem registries as well as publishing new artifacts in the CDN, with the version taken from the tag of the Github release.

### Running tests ⚠️

Unit tests (using [Jest](https://jestjs.io/)):

```bash
yarn jest

// or, to rerun tests on changes
yarn jest:watch
```

To run integration tests (using [Cypress](https://www.cypress.io/)), you'll need to first start a dedicated test server with:

```bash
yarn cy:server
```

And then run the test app with:

```bash
yarn cy:run
```

To run visual tests:

```bash
yarn viz
```

This will then open a results window.
