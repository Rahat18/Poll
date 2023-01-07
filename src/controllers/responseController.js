const responseService = require('../services/responseService');

const createResponse = async(req , res) => {
    try{
        const response = await responseService.createResponse(req.body);
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

const getAllResponse = async(req , res) => {
    try{
        const responses = await responseService.getAllResponse(req.params.id);
        return res.status(200).json({
            message: 'Fetched All Responses' ,
            success: true ,
            data: responses
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
    createResponse,
    getAllResponse

}