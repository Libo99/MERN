const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
{
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    mail:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    created: Date
}, 
{versionKey: false}
    
);

module.exports = User = mongoose.model('user', UserSchema);

