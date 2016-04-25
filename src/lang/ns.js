import _ from 'lodash';
import Immutable from 'immutable';

export function interpret(expression, process) {
    const ns = expression.get('ns');
    const identifier = ns.get(0);
    let identifierFunc = null;
    if (_.isString(identifier)) {
        identifierFunc = () => { return identifier };
    } else {
        identifierFunc = process(identifier);
    }
    const expressions = ns.rest().map((value) => {
        return process(value);
    });
    return (scope) => {
        const namespace = identifierFunc(scope);
        if (!_.isString(namespace)) {
            throw new Error(`UnexpectedValue - expected string`);
        }
        const newScope = {};
        scope = scope.setIn(namespace, newScope);
        expressions.map((expression) => {
            return expression(scope);
        });
    }
}
