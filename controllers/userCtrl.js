const UserModel = require('../models/userModel');

let userCtrl = {};

userCtrl.authUser = async(req, res) => {
    try{
        const result = await UserModel.authUser(req.body);
        if(!result) res.status(400).send('Auth Failed!');
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send('Auth Failed!', err);
    }
}

userCtrl.postUser = async(req, res) => {
    try{
        const result = await UserModel.postUser(req.body);
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send('Bad Request: ', err);
    }
}


userCtrl.getUser = async(req, res) => {
    try{
        const result = await UserModel.getUser();
        console.log(UserModel.User);
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send('Bad Request: ', err);
    }
}

userCtrl.filterUser = async(req, res) => {
    try{
        const result = await UserModel.filterUser(req.params.id);
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send('Bad Request: '+ err);
    }
}

userCtrl.updateUser = async(req, res) => {
    try{
        const result = await UserModel.updateUser(req.body);
        if (result) return res.status(200).send(result);
        else throw new Error(result);
    }
    catch(err){
        res.status(400).send('Bad Request: '+ err);
    }
}

userCtrl.deleteUser = async() => {
    try{
        const result = await UserModel.deleteUser(req.body);
        if (result) return res.status(200).send(result);
        else throw new Error(result);
    }
    catch(err){
        res.status(400).send('Bad Request: '+ err);
    }
}


module.exports = userCtrl;