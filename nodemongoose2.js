//exports.dbconnect =
//const express = require('express');
//const cors = require('cors')
//const app = express();

//exports.dbconnect =
//const express = require('express');
//const cors = require('cors')
//const app = express();

const Student = require('./schema');
var allstudents ={};
async function dbconnect(param,action,res){

const mongoose = require('mongoose');
//student schema should match the class object passed to nodejs from rest client
//and the underlying document structure also
// const studentSchema= new mongoose.Schema({
// name: String,
// age: Number,
// },{
// capped: { size: 1024 },
// bufferCommands: false,
// autoCreate: false // disable autoCreate since bufferCommands is false
// })
    
// errors check https://mongoosejs.com/docs/faq.html#callback_never_executes for docs
mongoose.connect('mongodb://localhost:27017/mydb', 
{ useNewUrlParser: true ,

})
.then(() => { console.log('Connected to database!')

if (action  == "create"){
 console.log(action);

createstudent(param,Student);
}   

if (action  == "update"){
 console.log(action);
 updatestudent(param,Student);
}  


if (action  == "getall"){
 console.log(action);
 getallstudents(Student,res);
}  


     

//exports.dbconnect =
//const express = require('express');
//const cors = require('cors')
//const app = express();

const Student = require('./schema');
var allstudents ={};
async function dbconnect(param,action,res){

const mongoose = require('mongoose');
//student schema should match the class object passed to nodejs from rest client
//and the underlying document structure also
// const studentSchema= new mongoose.Schema({
// name: String,
// age: Number,
// },{
// capped: { size: 1024 },
// bufferCommands: false,
// autoCreate: false // disable autoCreate since bufferCommands is false
// })


// errors check https://mongoosejs.com/docs/faq.html#callback_never_executes for docs
 mongoose.connect('mongodb://localhost:27017/mydb', 
 { useNewUrlParser: true ,

 })
 .then(() => { console.log('Connected to database!')
 
 if (action  == "create"){
  console.log(action);

createstudent(param,Student);
}   

if (action  == "update"){
  console.log(action);
  updatestudent(param,Student);
}  


if (action  == "getall"){
  console.log(action);
  getallstudents(Student,res);
}  
 
 
})
.catch(err => console.error('Connection error:', err));
}
// const Student = mongoose.model("student", studentSchema);
//use imported schema studentaction

// )
// .catch(err => console.error('Connection error:', err));
// }
    

let createstudent = (param,u) =>{


  const student = new u({ name: param.name, age: param.age, mail :param.mail });
  student.save()
  .then(() => console.log('Student record created in mongodb created!'))
 .catch(err => console.error('Error creating student:', err));
//}
}

let updatestudent =  async (param,u) => {


   const student1  = await  u.findByIdAndUpdate(param.id,{age:param.age, mail:param.mail});
   console.log('Student record updated in mongodb created!');
}

let getallstudents =  async (u,res) => {

   allstudents = await u.find();
  
   console.log('Students found in mongodb listed!' +allstudents+ 'json coming'+JSON.stringify(allstudents));
   res.send(allstudents);

}


module.exports ={dbconnect , allstudents}

})}
