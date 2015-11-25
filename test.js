const asyncify = require('./index.js');

function fib(num) {
    if (num === 0) return 0;
    else if (num === 1) return 1;
    else return fib(num - 1) + fib(num - 2);
}

const fibAsync = asyncify(fib);

fibAsync(20).then(function (res) {
    console.log('The result is', res);
});

fibAsync(10).then(function (res) {
    console.log('The result is', res);
});


// Using callback

fibAsync(32, function (res) {
    console.log('2. The result is', res);
});

fibAsync(15, function (res) {
    console.log('2. The result is', res);
});
