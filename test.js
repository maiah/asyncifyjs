const asyncify = require('./index.js');

const computeAsync = asyncify(function (num) {
    'use strict';
    let result = 0;
    for (let i = 0; i < num; i++) {
        result = result + (num * 3);
    }
    return result;
});

const p1 = computeAsync(4134123);
p1.then(function (res) {
    console.log('The result is', res);
});

const p2 = computeAsync(10);
p2.then(function (res) {
    console.log('The result is', res);
});
