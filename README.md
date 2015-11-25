# asyncify
Make CPU intensive code asynchronous non-blocking just like Node.js or Javascript IO call

# Installation
```sh
npm install --save asyncifyjs
```

# Usage
```js
const asyncify = require('asyncifyjs');

const computeAsync = asyncify(function (num) {
    'use strict';
    let result = 0;
    for (let i = 0; i < num; i++) {
        result = result + (num * 3);
    }
    return result;
});

computeAsync(4134123, function (res) {
    console.log('The result is', res);
});

computeAsync(10, function (res) {
    console.log('The result is', res);
});
```

Or using promises:

```js
const asyncify = require('asyncifyjs');

const computeAsync = asyncify(function (num) {
    'use strict';
    let result = 0;
    for (let i = 0; i < num; i++) {
        result = result + (num * 3);
    }
    return result;
});

const promise1 = computeAsync(4134123);
promise1.then(function (res) {
    console.log('The result is', res);
});

const promise2 = computeAsync(10);
promise2.then(function (res) {
    console.log('The result is', res);
});
```

License
---
The MIT License (MIT)

Copyright (c) 2015 Maiah Macariola
