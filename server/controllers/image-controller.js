import File from "../models/file.js";

export const uploadImage  = async (request,response) => {

    const fileObject = {
        path: request.file.path,
        name:request.file.originalname
    }

    try{
        const file = await File.create(fileObject);
        // console.log(file);
        return response.status(200).json({path:`https://sharehub.onrender.com/file/${file._id}`});
    }catch(error){
        console.log(error.message);
        return response.status(500).json({error : error.message});
    }
}

export const downloadImage = async (request,response) => {
    try{
        const file = await File.findById(request.params.fileId);
        
        file.downloadContent++;

        await file.save();

        response.download(file.path,file.name);

    }catch(error){
        console.log(error.message);
        return response.status(500).json({error: error.message});
    }
}