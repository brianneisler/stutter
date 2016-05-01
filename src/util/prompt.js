import Promise from 'bluebird';
import Prompt from 'prompt';

export default function prompt(schema) {
  return new Promise((resolve, reject) => {
    Prompt.start();
    Prompt.get(schema, (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });
}
