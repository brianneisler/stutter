import _ from 'lodash';
import StackParser from 'error-stack-parser';

export default _.memoize((key) => {
  return (...args) => {
    Error.stackTraceLimit = 2;
    const stack = StackParser.parse(new Error(''));
    Error.stackTraceLimit = Infinity;
    const stackFrame = stack[1];
    const code = { [key]: args };
    Object.defineProperty(code, '_meta', {
      enumerable: false,
      configurable: false,
      writeable: false,
      value: { file: stackFrame.getFileName(), lineNumber:stackFrame.getLineNumber() }
    });
    return code;
  };
});
