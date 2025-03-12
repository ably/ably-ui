# Ably Insights

The goal of the Ably Insights code is to help us get a better understanding of how our users use our web properties in a way that doesn't compromise their experience of our services.

## Overview

The two main interfaces for propagating event data into our analytics platforms are by calling a tracking function or by annotating DOM elements with `data-insight-*` attributes.

### The `track` function

The track function will emit an event into our analytics plaform.

Let's say we have a button, and we want to track interactions with it:

~~~html
<button id='use-case-chat'>Build a Chat app</button>
~~~

~~~ts
import { track } from '@ably/ui/core/insights';

const button = document.getElementById('use-case-chat');
button.addEventListener('click', (_event) => {
  track('chat-use-case-selected');

  // Or with additional properties
  track('use-case-selected', { useCase: 'chat' });
})
~~~

### Using `data-insight-*` attributes

When the insights client is loaded and configured it also attaches a click event listener on the `body` element, looking for `data-insight-` attributes and turning it into `track` calls.

The `track()` examples could be rewritten like this:

~~~html
<button data-insight-event="chat-use-case-selected">Build a Chat app</button>

<!-- or with additional properties -->
<button data-insight-event='use-case-selected' data-insight-use-case="chat">
  Build a Chat app
</button>
~~~

## Event naming conventions

_WIP_
