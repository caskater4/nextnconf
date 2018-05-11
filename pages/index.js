import nconf from 'nconf';

const conf = nconf.argv().env();

export default () => <div>Hello World!</div>