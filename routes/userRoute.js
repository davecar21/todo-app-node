const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userCtrl');

router.post('/auth', (req, res)=>{
    userCtrl.authUser(req, res);
});

router.post('/', (req, res)=>{
    userCtrl.postUser(req, res);
});

router.get('/', (req, res)=>{
    userCtrl.getUser(req, res);
});

router.get('/:id', (req, res)=>{
    userCtrl.filterUser(req, res);
});

router.put('/', (req, res)=>{
    userCtrl.updateUser(req, res);
});

router.delete('/', (req, res)=>{
    userCtrl.deleteUser(req, res);
});

module.exports = router;