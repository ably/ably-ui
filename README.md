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
  href="https://cdn.jsdelivr.net/npm/@ably/ably-ui@1.0.0/core/styles.css"
/>
<script src="https://cdn.jsdelivr.net/npm/@ably/ably-ui@1.0.0/core/scripts.js"></script>
```

The above includes all the CSS from the `Core` module and the `AblyUi.Core` javascript namespace.

### NPM

This type of installation gives you access to module/components assets as well as React components.

Note the package is currently hosted in our private GitHub registry, so you will need a `GITHUB_REGISTRY_TOKEN` environment variable in your shell to be able to install it. See [here](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) for instructions on obtaining one.

```bash
npm install @ably/ably-ui

# or

yarn add @ably/ably-ui
```

To attach the imported javascript from the `Core` module to the `window` object:

```js
import "@ably/ably-ui/core/scripts";

// AblyUi.Core is now available on window
```

To import an es6 `core` module and expose nothing to window:

```js
import ablyUiCore from "@ably/ably-ui/core/scripts";
```

To import the javascript for an `Accordion` component:

```js
import Accordion from "@ably/ably-ui/core/accordion/component";
```

If your bundler supports CSS importing you can import is as well:

```js
import "@ably/ably-ui/core/styles.css";
```

#### Importing React components

If you are using [React](https://reactjs.org/), the import is different. Note that depending on the component, you might still need include CSS & JS for it:

```js
import Meganav from "@ably/ably-ui/core/Meganav";
```

#### Importing ViewComponent (Rails) components ⚠️

To use `ably-ui` with [Ruby on Rails](https://rubyonrails.org/) add the `ably-ui` gem to your `Gemfile`:

```ruby
gem "ably-ui", '~> 0.0.13', require: 'ably_ui', source "https://rubygems.pkg.github.com/ably"
```

And then run:

```
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

#### Bundling

Run the `./build.sh` script. This will:

- remove all module directories at root and at `lib/ably_ui`
- run webpack to compile assets into module directories
- copy files that are compiled by webpack into `lib/ably_ui`
- copy files that do not need compilation from `src` to `lib/ably_ui`

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
