'use strict';

const Worker = require('tiny-worker');

module.exports = function asyncify(fn) {
    'use strict';

    return function asyncified(param, cb) {
        const prmse = new Promise(function (resolve, reject) {
            const worker = new Worker(function job() {
                'use strict';
                const vm = require('vm');

                self.onmessage = function (ev) {
                    'use strict';
                    const stringFn = 'fn = ' + ev.data.fn;
                    const ctx = { 'fn': undefined };
                    vm.createContext(ctx);
                    vm.runInContext(stringFn, ctx);

                    const result = ctx.fn(ev.data.param);
                    postMessage(result);
                };
            });

            worker.postMessage({
                'fn': fn.toString(),
                'param': param
            });

            worker.onmessage = function (ev) {
                if (cb) {
                    cb(ev.data);
                } else {
                    resolve(ev.data);
                }

                worker.terminate();
            };

        });

        return prmse;
    };
};
