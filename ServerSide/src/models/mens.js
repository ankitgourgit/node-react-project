const mongoose= require('mongoose');
const menSchema= new mongoose.Schema({
 
    fullname:{
        type:String,
        reuired:true,
    },
    
    phone:{
        type:Number,
        reuired:true,
    },
    email:{
        type:String,
        reuired:true,
    },
    msg:{
        type:String,
        reuired:true,
    }

})

//we are creating a new collection
const MensRanking = new mongoose.model("MensRanking",menSchema);

module.exports = MensRanking;
 