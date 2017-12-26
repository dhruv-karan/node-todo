//const MongoClient =require('mongodb').MongoClient;

const {MongoClient,ObjectID} =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
  if(err){
   return  console.log('unable to connect to mongo dsp')
  }
   console.log("connected");
   db.collection('users').deleteMany({name:'karan',
    _id: new ObjectID('5a3c12496a0c49145cd2e85a')
 }).then((result)=>{
     console.log(result);
   })



db.close();
});
