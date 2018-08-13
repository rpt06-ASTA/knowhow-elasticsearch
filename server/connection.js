const esconfig = require('../config.js').ES;

// elasticsearch variables - index and type
const index = 'articles';
const type = 'documents';

const port = 9200;

// create an instance of Elasticsearch client on localhost
var client = new require('elasticsearch').Client({
  host: `localhost:${port}`,
  apiVersion: '6.2',
  log: 'trace'
  // log: 'error'
});

// create an elasticsearch client for your Amazon ES
// let client = new require('elasticsearch').Client({
//   hosts: [esconfig.url],
//   connectionClass: require('http-aws-es'),
//   // log: 'trace'
// });

// let AWS = require('aws-sdk');
// AWS.config.update({
//   credentials: new AWS.Credentials(esconfig.accessKeyId, esconfig.secretAccessKey),
//   region: esconfig.region
// });

client.ping({
  requestTimeout: 3000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});