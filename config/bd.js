//Set up mongoose connection
const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/medical";//nom de base de donnees qui se trouve fel robot 3t

mongoose.connect(mongoDB,{ usenewurlparser: true ,useunifiedtopology: true});
console.log('db connected')

mongoose.Promise = global.Promise;
module.exports = mongoose;