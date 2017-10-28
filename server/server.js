var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb')

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (err) => {
    res.status(400).send(err);
  })
});

// GET /todos/42
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    return;
  }
  // validate id
    // 404 - send empty body back

    // find by id
  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
      return;
    }
    res.send(todo);

  }).catch((err) => {
    res.status(400).send();
  })
  
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
