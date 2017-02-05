const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result); //doesnt return the removed
// });

//Todo.findOneAndRemove()

// Todo.findOneAndRemove({_id: '5897680426b2c1e522b8eb1c'}).then((todo) => {
//   
// })

Todo.findByIdAndRemove('5897680426b2c1e522b8eb1c').then((todo) => {
  console.log(todo);
});
