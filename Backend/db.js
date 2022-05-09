const mongoose = require("mongoose")
const uri = "mongodb+srv://saadb112:saadbhaizindabaad1@cluster0.vbcrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connecttoMongoose = ()=>{
    mongoose.connect(uri, ()=>{
        console.log("connected to mongoose")
    })
}
module.exports = connecttoMongoose