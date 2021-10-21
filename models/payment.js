var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var paymentSchema = new Schema ({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        email: true,
    },
    phoneNumber:{
        type: String,
        require: true,
    },
    refNumber: {
        type: String,
        require: true,
        unique: true,
    },
    typeTransaction: {
        type: String,
        require: true,
    },
    proofPayment: {
        type: String,
    },

}, 

{timestamps:true
    
})


module.exports = mongoose.model('Payment', paymentSchema)

