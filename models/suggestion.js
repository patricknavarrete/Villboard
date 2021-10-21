var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var suggestionSchema = new Schema({
    name:{
        type: String,
    },
    suggestions: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Suggestion', suggestionSchema)
