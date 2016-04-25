import _ from 'lodash';
import Immutable from 'immutable';

export function interpret(expression, process) {
    const call = expression.get('call');
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
