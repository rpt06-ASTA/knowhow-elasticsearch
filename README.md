# knowhow-elasticsearch

> Search service for Knowhow app and widget - Update elasticsearch index on add/update/delete articles; search ES index for all articles with a given search term and companyId.

## Usage

> Create a config.js file in the root directory.

> Create an Elasticsearch domain on AWS, configure a cluster and set up access.

Add the following code in the config.js file.

module.exports = {
  ES: {
    url: 'AWS-ES-endpoint',
    region: 'region',
    accessKeyId: 'access-key',
    secretAccessKey: 'secret-access-key'
  }
};

> To use a local elasticsearch cluster, download Elasticsearch. Run bin/elasticsearch.

## Requirements

> Node

> Express

## Development

### Installing Dependencies

From within the root directory:

> npm install

> npm start