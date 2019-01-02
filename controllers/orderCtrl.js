const orderModel = require('../models/orderModel');

let orderCtrl = {};

orderCtrl.postOrder = async(req, res) => {
    try{
        const result = await orderModel.postOrder(req.body);
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send('Bad Request: ', err);
    }
}


orderCtrl.getOrder = async(req, res) => {
    try{
        const result = await orderModel.getOrder();
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send('Bad Request: ', err);
    }
}

orderCtrl.filterOrder = async(req, res) => {
    try{
        const result = await orderModel.filterOrder(req.params.id);
        return res.status(200).send(result);
    }
    catch(err){
        return res.status(400).send('Bad Request: '+ err);
    }
}

orderCtrl.updateUser = async(req, res) => {
    try{
        const result = await orderModel.updateUser(req.body);
        if (result) return res.status(200).send(result);
        else throw new Error(result);
    }
    catch(err){
        res.status(400).send('Bad Request: '+ err);
    }
}

orderCtrl.deleteUser = async() => {
    try{
        const result = await orderModel.deleteUser(req.body);
        if (result) return res.status(200).send(result);
        else throw new Error(result);
    }
    catch(err){
        res.status(400).send('Bad Request: '+ err);
    }
}


module.exports = orderCtrl;