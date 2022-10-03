# Scryll
JavaScript library for syncing two scrollbars with clear API

# How to install
```bash
npm install git+https://github.com/the94air/scryll.git
```
# How to install
```js
import scryll from 'scryll'
// or
const scryll = require('scryll');
```

# How to use
```js
const myScryll = scryll(".element1", ".element2")

// to stop sync scrolling
myScryll.kill()
```

```js
const myScryll = scryll(".element1", ".element2", { init: false })

// to start sync scrolling
myScryll.init()

// to stop sync scrolling
myScryll.kill()
```

```js
// You can use two values to control the scroll direction, vertical or horizontal
const myScryll = scryll(".element1", ".element2", { direction: "horizontal" }) // default is vertical
```
# How to run
```bash
# clone repo
# install dependencies
# development build
npm start # or yarn start

# production build
npm run build
```

## License
[MIT](https://github.com/the94air/scryll/blob/main/LICENSE) Copyright © 2022 - present, [Abdalla Arbab](https://abdalla.js.org) and [contributors](https://github.com/the94air/scryll/graphs/contributors)
