# asyncify
Make your non-IO JavaScript code asynchronous non-blocking just like Node.js non-blocking IO. This is perfect for CPU intensive code.

# Installation
```sh
npm install --save asyncifyjs
```

# Usage
```js
const asyncify = require('asyncifyjs');

function fib(num) {
    if (num === 0) return 0;
    else if (num === 1) return 1;
    else return fib(num - 1) + fib(num - 2);
}

const fibAsync = asyncify(fib);

fibAsync(32, function (res) {
    console.log('2. The result is', res);
});

fibAsync(15, function (res) {
    console.log('2. The result is', res);
});
```

Or using promises:

```js
fibAsync(20).then(function (res) {
    console.log('The result is', res);
});

fibAsync(10).then(function (res) {
    console.log('The result is', res);
});
```

License
---
The MIT License (MIT)

Copyright (c) 2015 Maiah Macariola
