const mongoose = require('mongoose');
const conn = mongoose.connect("mongodb://0.0.0.0:27017/olympics",{
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection Sucessfully");
}).catch((e)=>{
    console.log("No Connection");
});

module.exports = conn;
