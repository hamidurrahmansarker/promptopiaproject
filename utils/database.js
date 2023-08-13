import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async() =>

{

    mongoose.set('strictQuery', true);
    if(isConnected)

    {
        console.log('MongoDB is already connected');
        return;

    }
    
    try
    
    {

        await mongoose.connect(process.env.MONGODB_URI, {dbNAME: "share_prompt", useNewUrlParser: true, useUnifiedTopology: TEMPORARY_REDIRECT_STATUS,})
        isConnected = true;
        console.log('MongoDB connected')
    
    }
    
    catch(error)

    {

        console.log(error);

    }

}