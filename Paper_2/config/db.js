const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieDB');
const db = mongoose.connection;
db.on('err', console.error.bind("Error connecting database"))
module.exports = mongoose;