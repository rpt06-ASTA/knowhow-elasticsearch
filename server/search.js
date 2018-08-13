const { client, index, type } = require('./connection');

// search function for all articles with a given search term and companyId
const queryTerm = (term, companyId, offset, callback) => {
  const body = {
    // from allows us to paginate the results
    from: offset,
    query: {
      bool: {
        must: {
          'multi_match': {
            query: term,
            // 'and' operator is used to prioritize results that contain all of the tokens in the query
            operator: 'and',
            type: "most_fields",
            fields: ['title', 'description', 'content'],
            // fuzziness adjusts tolerance for spelling mistakes, higher fuzziness will allow for more corrections in result hits
            fuzziness: 'auto'
          }
        },
        filter: [{
          term: { companyid: companyId }
        }]
      }
    },
    size: 100
  };
  client.search({index, type, body})
    .then(results => {
      callback(results.hits);
    });
};

module.exports = queryTerm;