import { STRING } from '../defines';

export default function string(namespace, context, value) {
  return {
    type: STRING,
    value,
    method: () => value
  };
};
