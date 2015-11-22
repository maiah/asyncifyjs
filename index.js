'use strict';

const Worker = require('tiny-worker');

const workify = function (fn) {
    'use strict';

    const work = function (param, cb) {
        const worker = new Worker(function () {
            'use strict';
            const vm = require('vm');

            self.onmessage = function (ev) {
                'use strict';
                const stringFn = 'result = ' + ev.data.fn + '(' + ev.data.param + ')';
                const ctx = { 'result': null };
                vm.createContext(ctx);
                vm.runInContext(stringFn, ctx);
                postMessage(ctx.result);
            };
        });

        worker.postMessage({
            'fn': fn.toString(),
            'param': param
        });

        worker.onmessage = function (ev) {
            cb(ev.data);
            worker.terminate();
        };
    };

    return work;
};

const promisify = function (work) {
    return function(param) {
        const p = new Promise(function (resolve, reject) {
            work(param, function (res) {
                resolve(res);
            });
        });
        return p;
    };
};

const asyncify = function (fn) {
    return promisify(workify(fn));
};

module.exports = asyncify;
