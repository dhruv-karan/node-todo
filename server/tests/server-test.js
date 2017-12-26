const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');
const{app} = require('./../server');
const{Todo}=require('./../models/todo');

/*beforeEach((done)=>{
  Todo.remove({}).then(()=>done())
});

describe('POST/todos',()=>{
  it('should crearte a new node',(done)=>{
    var text ='test todo test';

    request(app)
    .post('/todos')
    .send({text})
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=>{
        expect(todos.length)toBe(1);
        expect(todos[0].text.toBe(text);
        done();
      })catch( (e)=> done(e))
    })
  })
  it('should pass no data',(done)=>{
    var text ='test to do test'
request(app)
.post('/totos')
.send({})
//.expect((res)=>{
  //expect(res.body.text).toBe(" ");
})
    end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(0);
        //expect(todos[0].text.toBe(" "));
        done();
      })catch((e)=>data(e))
    })
  })
})*/

const todos =[{
  _id:new ObjectID(),
  text:"first test Todo"
},{
  _id:new ObjectID(),
  text:"second test to do"
}];


describe('GET /todos/:id',()=>{
  it('should get all todos',(done)=>{
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect((res)=>{
      expect(res.body.todo.text).toBe(todos[0].text);
    })
    .end(done);
  })
})
