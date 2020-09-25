var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/SoftwareLabs", { useNewUrlParser: true }, () => {
    console.log("db connected successfully");

});

module.exports = mongoose;