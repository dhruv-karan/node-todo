var express = require('express');
var bodyParser = require('body-Parser');
const {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} =  require('./models/user');


var app = express();
const post = process.env.PORT || 3000;
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
   var todo = new Todo({
     text:req.body.text,
     complete:req.body.complete
   });
    todo.save().then((doc)=>{
      res.send(doc);
    },(e)=>{
      res.status(200).send(e)
    })

});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos})
  },(e)=>{
    res.status(400).send(e);
  })
})















app.get('/todos/:id',(req,res)=>{
     var id = req.params.id;
  if(!ObjectID.isValid(id)){
  return  res.status(400).send();
  }

  Todo.findById(id).then((docs)=>{
    if(!docs){
      return res.status(400).send("not found such todo");
    }
    res.status(200).send({docs});
  },(e)=>{
    res.status(400).send(e)
  })

});























app.listen(port,()=>{
  console.log(`started at port ${port}`);
})
module.exports ={app}
