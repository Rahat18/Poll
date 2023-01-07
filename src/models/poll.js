const mongoose = require("mongoose");


const pollSchema = new mongoose.Schema({

    description: {
        type: String ,
        required: true 
    },

    options:[
        {
            type:String
        }
    ] ,
    status:{
        type: String
    }

}, {timestamps: true});




const Poll = mongoose.model('Poll' , pollSchema);

module.exports = Poll;
