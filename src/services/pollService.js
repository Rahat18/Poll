const Poll = require('../models/poll');

const createPoll = async(data) => {
    try{
        const response = await new Poll(data).save();
        return response;

    }catch(err){
        console.log(err);
        return err ;

    }
}


const destroyPoll = async(id) => {
    try{
        const response = await Poll.findByIdAndDelete(id);
        return response;

    }catch(err){
        console.log(err);
        return err ;

    }
}

const updatePoll = async(data) => {
    try{
        const response = await Poll.findByIdAndUpdate(data.id , {status: data.status} , {new: true});
        return response;

    }catch(err){
        console.log(err);
        return err ;

    }
}

const getPoll = async(id) => {
    try{
        const response = await Poll.findById(id);
        return response;


    }catch(err){
        console.log(err);
        return err ;

    }
}

const getAllPoll= async() => {
    try{
        const response = await Poll.find();
        return response;

    }catch(err){
        console.log(err);
        return err ;

    }
}







module.exports = {
    createPoll ,
    updatePoll ,
    destroyPoll ,
    getPoll ,
    getAllPoll
}