<p align="center">
  <img src="assets/logo.svg?raw=true" alt="Scryll" title="Scryll" height="100" />
</p>

<p align="center">
  <a href="www.npmjs.com/package/scryll"><img src="https://img.shields.io/npm/v/scryll" alt="Version"></a>
  <a href="www.npmjs.com/package/scryll"><img src="https://img.shields.io/npm/dm/scryll" alt="Downloads"></a>
  <a href="https://github.com/the94air/scryll/blob/master/LICENSE"><img src="https://img.shields.io/github/license/the94air/scryll.svg?sanitize=true" alt="License"></a>
  <a href="https://discord.gg/rtFnkyY5Cy"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg?sanitize=true" alt="Chat"></a>
</p>

## Introduction
JavaScript library for syncing two scrollbars with clear API

## Demo
https://stackblitz.com/edit/js-43xuy6

## How to install
```bash
npm install scryll
```

## How to setup
```js
import scryll from "scryll";
// or
const scryll = require("scryll");
```

## Examples
```js
const myScryll = scryll(".element1", ".element2");

// stop sync scrolling
myScryll.kill()
```

```js
const myScryll = scryll(".element1", ".element2", { init: false });

// start sync scrolling
myScryll.init();

// stop sync scrolling
myScryll.kill();
```

```js
// You can use two values to control the scroll direction, vertical or horizontal
const myScryll = scryll(".element1", ".element2", { direction: "horizontal" }); // default is vertical
```

## Methods

### `scryll(element1, element2, options)`
The main function for making Scryll objects

#### Returns: `Object`

#### Parameters:

`element1: String`

The CSS selector of the first scroll element

`element2: String`

The CSS selector of the second scroll element

`options: Object`

#### Options:

Defaults

```js
{
  init: true,
  direction: "vertical",
}
```

`init: Boolean`

Initialize the scroll events on scryll creation

`direction: String`

Select the direction of sync scrolling. Accepts two values `vertical` or `horizontal`

Example:
```js
const myScryll = scryll(".element1", ".element2");

console.log(myScryll)
// {
//   init(),
//   kill(),
// }
```

### `init()`
The function that responsible of starting sync scroll events when setting the `init` option to `false`

### `kill()`
The function that responsible of stopping the sync scroll events

## How to run
```bash
# clone repo
# install dependencies
npm run dev # or yarn dev

# production build
npm run build
```

## License
[MIT](https://github.com/the94air/scryll/blob/main/LICENSE) Copyright © 2022 - present, [Abdalla Arbab](https://abdalla.js.org) and [contributors](https://github.com/the94air/scryll/graphs/contributors)

*Name thought of by the amazing [japser](https://github.com/jxpsert)*
