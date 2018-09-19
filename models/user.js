const mongoose = require('./db');

let UserModel = {}

let userSchema = new mongoose.Schema({
    name: String,
    gender: String,
});

let User = mongoose.model('User', userSchema); 

UserModel.postUser = async (user)=>{
    const userData = new User(user);
    const result = await userData.save();
    return result;
}

UserModel.getUser = async ()=>{
    const result = User.find();
    return result;
}

UserModel.filterUser = async (userId)=>{
    const result = User.find({_id: userId});
    return result;
}

UserModel.updateUser = async (user)=> {
    const result = User.findOneAndUpdate(user.id, user, {new: true});
    return result;
}

UserModel.deleteUser = async (id)=> {
    const result = User.findOneAndDelete(id);
    return result;
}

module.exports = UserModel;