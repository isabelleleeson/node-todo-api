//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb') // same as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne only deletes first one

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete

  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Toni'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('58926a8023147f4d1f94e18a')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
