const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('59ac0b7efb3d224b2fcbe6ae')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Tom'}).toArray().then((docs) => {
    console.log(`Users:`);
    console.log(JSON.stringify(docs, undefined, 2))

  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();

});
