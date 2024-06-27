const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")

//nfar9ou bin children w parents
const baseOptions = {
    discriminatorKey: 'itemtype',
    collection: 'users'
}


const userSchema = mongoose.Schema({
nom:{
    type:String,
    required:true,
    trim:true
},
prenom:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    trim:true,
    //pour valider email
    validator:[validator.isEmail,"please enter a valid eamil"]
},
password:{
    type:String,
    required:true,
    trim:true,
    maxlength:[12,"password should be at least 8 caharcters"],
    minlength:[6,"password should be more than 6 characters"]
},

loginStatus:{
    type:String,
    default:"active",
    trim:true
},
adresse:{
    type:String,
    required:true,
    trim:true
},
}, baseOptions,{timestamps:true})
userSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password,10)
    this.loginStatus= this.loginStatus.charAt(0).toUpperCase()+this.loginStatus.slice(1);
    next()
})

module.exports = mongoose.model("Users",userSchema)