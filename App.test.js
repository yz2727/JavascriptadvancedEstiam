const mongoose = require ("mongoose");

const studentSchema= new mongoose.Schema({
    name: String,
    age: Number,
    mail:String,
  },{
    capped: { size: 1024 },
   // bufferCommands: false,
   // autoCreate: false // disable `autoCreate` since `bufferCommands` is false
  
})
// Exportation de notre module nous permettant de definir les chemin d'accès
module.exports = mongoose.model("Student",studentSchema);