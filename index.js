const Worker = require('webworker-threads').Worker;

module.exports = function asyncify(fn) {
    return function asyncified(param, cb) {
        const prmse = new Promise(function (resolve, reject) {

            const worker = new Worker(function job() {
                this.onmessage = function (ev) {
                    // TODO: need to find good solution to avoid this 'evil'
                    const result = eval(ev.data.fn + '(' + ev.data.param + ')');
                    postMessage(result);
                    self.close();
                };
            });

            worker.onmessage = function (ev) {
                if (cb) {
                    cb(ev.data);
                } else {
                    resolve(ev.data);
                }
            };

            worker.postMessage({
                'fn': fn.toString(),
                'param': param
            });
        });

        return prmse;
    };
};
