const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')
const NumberSchema = new mongoose.Schema({
    numero: {
        type:Number,
        required:true,
    },
    tipo:{
        type:String,
        required:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});

NumberSchema.plugin(mongoosePaginate)

mongoose.model('Number',NumberSchema)