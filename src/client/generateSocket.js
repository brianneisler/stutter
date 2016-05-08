import _ from 'lodash';
import io from 'socket.io-client';

const sockets = {};
export default function generateSocket(url) {
  if (_.has(sockets, url)) {
    return _.get(sockets, url);
  }
  const socket = io(url);
  _.set(sockets, url, socket);
  return socket;
}
