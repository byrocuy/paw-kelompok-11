const mongoose = require('mongoose');
let mahasiswaSchema = new mongoose.Schema({
    name:{
        type:String,
        required: "This field is required."
    },
    nim:{
        type:String
    },
    jurusan:{
        type:String
    },
    email:{
        type:String
    },
    nohp:{
        type:String
    }
});
// Custom validation for email
mahasiswaSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

module.exports = mongoose.model('Mahasiswa', mahasiswaSchema);