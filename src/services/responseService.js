const Response = require('../models/response');
const Poll = require('../models/poll');

const createResponse = async(data) => {
    try{
        const response = await Response.create({
            user:data.user,
            poll:data.poll,
            selectedOption:data.option
        });
        return response;

    }catch(err){
        console.log(err);
        return err ;

    }
}


const getAllResponse= async(pollId) => {
    try{
        const Poll = await Poll.findById(pollId);
        const responses = await Response.find({poll: pollId})
        return responses;

    }catch(err){
        console.log(err);
        return err ;

    }
}







module.exports = {
    createResponse ,
    getAllResponse
}