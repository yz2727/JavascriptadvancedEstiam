exports.dbconnect =async function(param){
// async function dbconnect(param){
const mongoose = require('mongoose');
mongoose.set('bufferCommands', false);
//const contactSchema = {
  
 //}; 
 const contactSchema= new mongoose.Schema({
  name: String,
  age: Number,
},{
  capped: { size: 1024 },
  bufferCommands: false,
  autoCreate: false // disable `autoCreate` since `bufferCommands` is false
})
 
//install mongoose dependencies
//npm install mongoose
// Connect to database
// errors check https://mongoosejs.com/docs/faq.html#callback_never_executes for docs
 await mongoose.connect('mongodb://127.0.0.1:27017/mydb', { useNewUrlParser: true ,

 })
  .then(() =>  console.log('Connected to database!'))
  .catch(err => console.error('Connection error:', err));
  const User = mongoose.model("user", contactSchema);
// Create a new user
//const user = new User({ name: 'Virat1', age: 30 });
const user = new User({ name: param.name, age: param.age });
user.save()
  .then(() => console.log('User record created in mongodb created!'))
 .catch(err => console.error('Error creating user:', err));
//}
}
//dbconnect("test");

