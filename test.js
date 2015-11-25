const asyncify = require('./index.js');

function compute(num) {
    'use strict';
    let result = 0;
    for (let i = 0; i < num; i++) {
        result = result + (num * 3);
    }
    return result;
}
const computeAsync = asyncify(compute);

const p1 = computeAsync(4134123);
p1.then(function (res) {
    console.log('The result is', res);
});

const p2 = computeAsync(10);
p2.then(function (res) {
    console.log('The result is', res);
});


// Using callback

const computeAsync2 = asyncify(compute);

computeAsync2(4134123, function (res) {
    console.log('2. The result is', res);
});

computeAsync2(10, function (res) {
    console.log('2. The result is', res);
});
