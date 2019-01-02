const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/ecom', { useNewUrlParser: true })
.then(()=> console.log('DB connected'))
.catch( err => console.log('DB error connection: ', err));

module.exports = mongoose;
module.exports.Schema = Schema;