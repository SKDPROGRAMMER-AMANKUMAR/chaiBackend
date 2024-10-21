import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

// Configuration
cloudinary.config({ 
    cloud_name: 'dziwuiut9', 
    api_key: '326727282986192', 
    api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    }catch (error) {
        fs.unlink(localFilePath)
        return null;
    }
}

export {uploadOnCloudinary}