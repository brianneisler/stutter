import * as _ from '../util';
import StackParser from 'error-stack-parser';
import resolve from './resolve';

export default _.memoize((key) => {
  return (...args) => {
    Error.stackTraceLimit = 2;
    const stack = StackParser.parse(new Error(''));
    Error.stackTraceLimit = Infinity;
    const stackFrame = stack[1];
    const code = {
      '@key': key,
      '@children': resolve(args)
    };
    Object.defineProperty(code, '_meta', {
      enumerable: false,
      configurable: false,
      writeable: false,
      value: { file: stackFrame.getFileName(), lineNumber:stackFrame.getLineNumber() }
    });
    return code;
  };
});
