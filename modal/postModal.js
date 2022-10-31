const mongoose =require('mongoose')

const postSchema =mongoose.Schema({
    userName:{
        type: String,
        require: true,
    },
    title: {
        type: String,
        required :[true, 'pleas add title']
    },
    email: {
        type: String,
        required :[true, 'pleas add email']
    },
    text: {
        type: String,
        required :[true, 'pleas add text']
    },
    img: {
        type: String,
        required :[true, 'pleas add image']
    },
    category: {
        type: String,
        required :[true, 'pleas add image']
    }
},{
    timestamps:true
})
module.exports =mongoose.model('Post',postSchema)