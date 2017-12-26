//const MongoClient =require('mongodb').MongoClient;

const {MongoClient,ObjectID} =require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
  if(err){
   return  console.log('unable to connect to mongo dsp')
  }
   console.log("connected");

  /*db.collection('Todos').findOneAndUpdate({
    _id:new ObjectID('5a3bfc55856add1280250e30')
  },{
    $set:{
      completed:true
    }
      },{
      returnOriginal:false

  }).then((result)=>{
    console.log(result);
  });*/
  db.collection('users').findOneAndUpdate({
    _id : new ObjectID('5a3bffc84f3b410e24dedaff')
  },{
    $inc:{
      age:1
    },
    $set:{
      name:'dhruv'
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result)
  })


//db.close();
});
