var mongoose = require('mongoose');
const mongodbUrl = 'mongodb://pwsameasuser:pwsameasuser@ds137435.mlab.com:37435/node-todo-app'

mongoose.Promise = global.Promise;
mongoose.connect(mongodbUrl);

module.exports = {
  mongoose: mongoose
};
