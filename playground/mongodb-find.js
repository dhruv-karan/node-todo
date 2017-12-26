//const MongoClient =require('mongodb').MongoClient;

const {MongoClient,ObjectID} =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
  if(err){
   return  console.log('unable to connect to mongo dsp')
  }
   console.log("connected");
     db.collection('Todos').find({
      _id:new ObjectID('5a3bfc55856add1280250e30')
    }).toArray().then((docs)=>{
      console.log('todos');
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log('unable to fetch todos',err);
    });

db.collection('users').find({name:'dhruv'}).toArray().then((docs)=>{
  console.log('users');
  console.log(JSON.stringify(docs,undefined,2))
})
db.close();
});
