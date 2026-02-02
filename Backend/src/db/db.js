const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect('mongodb://127.0.0.1:27017').
then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log("connection failed",err);
})
}