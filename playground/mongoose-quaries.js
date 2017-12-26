const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user}=require('./../server/models/user');
/*var id ="5a40847f67021638179f3525hfbdehgdfg";


if(!ObjectID.isValid(id)){
   console.log("not valid");
 }


Todo.find({
  _id:id
}).then((todos)=>{
  console.log('todos', todos);
})

Todo.findOne({
  _id:id
}).then((todo)=>{
  console.log('todo',todo);
})
Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('not founs with this id');
  }
  console.log('toso by Id', todo);
}).catch((e)=>console.log(e));
*/
  var id = "5a3cd98bd2d43d3411961a82";
if(!ObjectID.isValid(id)){
   return  console.log('not valid useer')
 }
 console.log("dshfcvjdsbgds");

user.findById(id).then((user)=>{
  if(!user){
  return  console.log('not found the user',user);
  }
  console.log(Json.stringify(user,undefined , 3));
}).catch((e)=>{
  console.log(e);
})
