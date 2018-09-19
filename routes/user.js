const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

router.post('/', (req, res)=>{
    (async() => {
        try{
            const result = await userModel.postUser(req.body);
            return res.status(200).send(result);
        }
        catch(err){
            res.status(400).send('Bad Request: ', err);
        }
    })();
});

router.get('/', (req, res)=>{
    (async() => {
        try{
            const result = await userModel.getUser();
            return res.status(200).send(result);
        }
        catch(err){
            res.status(400).send('Bad Request: ', err);
        }
    })();
});

router.get('/:id', (req, res)=>{
    (async() => {
        try{
            const result = await userModel.filterUser(req.params.id);
            return res.status(200).send(result);
        }
        catch(err){
            res.status(400).send('Bad Request: '+ err);
        }
    })();
});

router.put('/', (req, res)=>{
    (async() => {
        try{
            const result = await userModel.updateUser(req.body);
            if (result) return res.status(200).send(result);
            else throw new Error(result);
        }
        catch(err){
            res.status(400).send('Bad Request: '+ err);
        }
    })();
});

router.delete('/', (req, res)=>{
    (async() => {
        try{
            const result = await userModel.deleteUser(req.body);
            if (result) return res.status(200).send(result);
            else throw new Error(result);
        }
        catch(err){
            res.status(400).send('Bad Request: '+ err);
        }
    })();
});

module.exports = router;