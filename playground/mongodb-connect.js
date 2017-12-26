//const MongoClient =require('mongodb').MongoClient;
const (MongoClient,ObjectId) =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
  if(err){
   return  console.log('unable to connect to mongo dsp')
  }
    console.log("connected");
/*
db.collection('Todos').insertOne({
  text:'something to do',
  completed:false
},(err,result)=>{
  if(err){
   return  console.log('an able to insert todo',err)
  }
  console.log(JSON.stringify(result.ops,undefined,2));
})*/

db.collection('users').insertOne({
  name:'dhruv',
  age:19,
  location:'delhi'
},(err,any)=>{
  if(err){
   return  console.log('successfull added',err);
  }
  console.log(JSON.stringify(any.one,undefined,2))
})
db.close();
});
