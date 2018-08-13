const { index, type, client } = require('../server/connection');

// function to bulk insert data into elasticsearch cluster
const insertDataES = (data) => {
  let bulkBody = [];
  data.forEach(item => {
    bulkBody.push({
      index: { _index: index, _type: type, _id: item.id }
    });
    bulkBody.push({ id: item.id, title: item.title, description: item.description, content: item.content, companyid: item.companyId, categoryid: item.categoryId });
  });
  client.bulk({body: bulkBody})
    .then(response => {
      console.log('response', response)
    })
};

// insertDataES(data)