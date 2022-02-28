const mongoose=require("mongoose")
const connectDb =async()=>{
    try {
        await mongoose.connect(process.env.DB_PASS)
        console.log("db connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports =connectDb