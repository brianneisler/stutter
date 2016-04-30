import vm from 'vm';
import fs from 'fs';

export default function parse(path, keywords) {
  const data = fs.readFileSync(path);
  return vm.runInNewContext(data, keywords, path);
}
