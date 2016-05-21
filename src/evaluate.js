import { evaluateCode } from './evaluator';

export default async function evaluate(context, namespace, scope, code) {
  return await evaluateCode(context, namespace, scope, null, code);
}
