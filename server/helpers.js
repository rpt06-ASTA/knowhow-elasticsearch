const { client, index, type } = require('./connection');

// delete an article from elasticsearch index
const deleteArticle = (articleId, callback) => {
  client.deleteByQuery({
    index: index,
    type: type,
    body: {
      query: {
        match: { id: articleId }
      }
    }
  }, function (error, response) {
      // console.log(error, response);
      callback(!error);
  });
};

// update an article in elasticsearch index
const updateArticle = (article, callback) => {
  var id = article.id;
  var title = article.title;
  var description = article.description;
  var content = article.content;
  var categoryid = article.categoryId;
  var theScript = {
    "source": `ctx._source.title = '${title}'; ctx._source.description = '${description}'; ctx._source.content = '${content}'; ctx._source.categoryid = ${categoryid};`
  }
  client.updateByQuery({
    index: index,
    type: type,
    body: {
      "query": { "term": { id: id } },
      "script": theScript
    }
  }, function(error, response) {
    // console.log('in update article', error, response);
    callback(!error);
  });
};

// add an article to ES index
const addArticle = (article, callback) => {
  client.index({
    index: index,
    type: type,
    id: article.id,
    body: {
      id: article.id,
      title: article.title,
      description: article.description,
      content: article.content,
      categoryid: article.categoryId,
      companyid: article.companyId
    }
 }, function(error, response) {
    // console.log('in add article', error, response);
    callback(!error);
 });
};

module.exports = {
  addArticle, updateArticle, deleteArticle
};