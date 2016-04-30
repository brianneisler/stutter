import { EXPRESSION } from '../defines';

export default function expression(expect, method) {
  return {
    type: EXPRESSION,
    expect,
    method
  };
}
