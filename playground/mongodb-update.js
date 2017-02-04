//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb') // same as above

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58961a1626b2c1e522b87f6e')
  // }, {$set: {completed: true}}, {returnOriginal: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //
  // });

  // db.collection('Users').findOneAndUpdate({
  //   name: 'Isabelle'
  // }, {$set: {name: 'Izzy-Fizzy'}}, {returnOriginal: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('ERROR: ', err);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Izzy-Fizzy'
  }, {$inc: {age: 1}, $set: {name: 'IZZZZYYYY'}}, {returnOriginal: false}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('ERROR: ', err);
  });

  //db.close();
});
