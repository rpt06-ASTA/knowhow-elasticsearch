const express = require('express');

const app = express();

const PORT = 8080;
const search = require('./search');
const helpers = require('./helpers');

app.get('/api/search', (req, res) => {
  let term = req.query.term;
  let companyId = req.query.companyId;
  search.queryTerm(term, companyId, 0, (results) => {
    console.log('RESULTS', results)
    res.send(results);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})