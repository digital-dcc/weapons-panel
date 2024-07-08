---
layout: page.11ty.cjs
title: <weapons-panel> ⌲ Home
---

# &lt;weapons-panel>

`<weapons-panel>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<weapons-panel>` is just an HTML element. You can it anywhere you can use HTML!

```html
<weapons-panel></weapons-panel>
```

  </div>
  <div>

<weapons-panel></weapons-panel>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<weapons-panel>` can be configured with attributed in plain HTML.

```html
<weapons-panel name="HTML"></weapons-panel>
```

  </div>
  <div>

<weapons-panel name="HTML"></weapons-panel>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<weapons-panel>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;weapons-panel&gt;</h2>
    <weapons-panel .name=${name}></weapons-panel>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;weapons-panel&gt;</h2>
<weapons-panel name="lit-html"></weapons-panel>

  </div>
</section>
