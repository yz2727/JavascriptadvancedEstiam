/* Creating a MongoClient object and connecting to the database. */
const express= require('express')
const app = express();


/* Connecting to the database. */
app.get('/home', (req,res) =>{
    const userId = req.query.id + req.query.name;
    // do something with userId
    res.send('User with id ' + userId + ' retrieved successfully');


});
app.listen(3000, () => console.log('Server running on port 3000'));