const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());

const PORT = 8080;
const search = require('./search');
const helpers = require('./helpers');

app.get('/api/search', (req, res) => {
  let term = req.query.term;
  let companyId = req.query.companyId;
  search.queryTerm(term, companyId, 0, (results) => {
    res.send(results);
  });
});

app.post('/api/addarticle', (req, res) => {
  let article = req.body;
  helpers.addArticle(article, (done) => {
    if (done) {
      res.send('success');
    }
  })
});

app.patch('/api/updatearticle', (req, res) => {
  let article = req.body;
  helpers.updateArticle(article, (done) => {
    res.send(done);
  });
})

app.delete('/api/deletearticle/:id', (req, res) => {
  let articleId = req.params.id;
  helpers.deleteArticle(articleId, (done) => {
    res.send(done);
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})