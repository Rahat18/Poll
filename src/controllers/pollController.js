const pollService = require('../services/pollService');

const createPoll = async(req , res) => {
    try{
        const response = await pollService.createPoll(req.body);
        return res.status(200).json({
            message: 'Created the Poll' ,
            success: true ,
            data: response
        }) 
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong' ,
            success: false
        }) ;

    }
}

const destroyPoll = async(req , res) => {
    try{
        const response = await pollService.destroyPoll(req.params.id);
        return res.status(200).json({
            message: 'Deleted the Poll' ,
            success: true ,
            data: response
           
        })  
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong' ,
            success: false
        }) ;

    }
}

const updatePoll = async(req , res) => {
    try{
        const response = await pollService.updatePoll(req.body);
        return res.status(200).json({
            message: 'Updated the Poll' ,
            success: true ,
            data: response
        }) 
        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong' ,
            success: false
        }) ;

    }
}


const getPoll = async(req , res) => {
    try{
        const response = await pollService.getPoll(req.params.id);
        return res.status(200).json({
            message: 'Fetched a Poll' ,
            success: true ,
            data: response
        })     
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong' ,
            success: false
        }) ;

    }
}

const getAllPoll = async(req , res) => {
    try{
        const response = await pollService.getAllPoll();
        return res.status(200).json({
            message: 'Fetched All Polls' ,
            success: true ,
            data: response
        }) 
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'Something went wrong' ,
            success: false
        }) ;

    }
}


module.exports = {
    createPoll,
    destroyPoll,
    updatePoll,
    getPoll,
    getAllPoll
}