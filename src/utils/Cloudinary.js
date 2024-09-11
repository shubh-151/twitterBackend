import { v2 } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        //upload the file on cloudinary
        const responce = await cloudinary.uploader.upload(localFilePath,{resource_type:"auto"})
        // file has been uploaded successfully
        console.log("file is uploaded on cloudinary",responce.url)
        return responce
    } catch (error) {
        fs.unlinkSync(localFilePath)// remove the locally save temporarily as the operation got failed
        return null;                
    }
}

cloudinary.v2.uploader.upload(
  "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
  { public_id: "shoes" },
  function (error, result) {
    console.log(result);
  }
);


export {uploadOnCloudinary}
