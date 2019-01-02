const mongoose = require('./db');
const Schema = mongoose.Schema;

let UserMethod = {}

let userSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    username: {type: String, required: true},
    password: {type: String, required: true}
});

let User = mongoose.model('User', userSchema); 

UserMethod.authUser = async (user)=>{
    const checkUser = await User.findOne({
        username: user.username,
        password: user.password
    });
    
    console.log(checkUser);
    if(checkUser) return "Auth Success!";
}

UserMethod.postUser = async (user)=>{
    user._id = new mongoose.Types.ObjectId();
    const userData = new User(user);
    const result = await userData.save();
    console.log(result);
    return result;
}

UserMethod.getUser = async ()=>{
    const result = await User.find();
    return result;
}

UserMethod.filterUser = async (userId)=>{
    const result = await User.find({_id: userId});
    return result;
}

UserMethod.updateUser = async (user)=> {
    const result = await User.findOneAndUpdate(user.id, user, {new: true});
    return result;
}

UserMethod.deleteUser = async (id)=> {
    const result = await User.findOneAndDelete(id);
    return result;
}

UserMethod.User = User;
module.exports = UserMethod;
