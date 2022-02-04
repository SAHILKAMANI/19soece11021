var mongoose = require('mongoose');

var normalSchema = mongoose.Schema({
    name:String,
    rating:Number
})

module.exports = mongoose.model("normals",normalSchema)
