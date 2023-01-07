const mongoose = require("mongoose");


const responseSchema = new mongoose.Schema({

    user: {
        type:mongoose.Schema.Types.ObjectId ,
        ref: 'User' ,
        required : true
    },

    poll:{
        type:mongoose.Schema.Types.ObjectId ,
        ref: 'Poll' ,
        required : true
    },
    selectedOption:{
        type:String ,
       // required: true
    }

}, {timestamps: true});




const Response = mongoose.model('Response' , responseSchema);

module.exports = Response;
