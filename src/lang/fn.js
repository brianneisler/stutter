import { FUNCTION } from '../defines';
import * as _ from '../util';

export const lang = FUNCTION;
export const keywords = {
  fn: lang
};

export function generate(expression, process) {
    const fn = expression.get('fn');
    const name = call.get(0);
    let nameFunc = null;
    if (_.isString(name)) {
        nameFunc = () => { return name };
    } else {
        nameFunc = process(name);
    }
    const args = call.rest().map((value) => {
        return process(value);
    });
    return (scope) => {
        const callFn = scope.get(nameFunc());
        if (!_.isFunction(callFn)) {
            throw new Error(`${callFn} is not a function`);
        }
        callFn(scope, args);
    }
}
