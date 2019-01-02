const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/orderCtrl');


router.post('/', (req, res)=>{
    orderCtrl.postOrder(req, res);
});

router.get('/', (req, res)=>{
    orderCtrl.getOrder(req, res);
});

router.get('/:id', (req, res)=>{
    orderCtrl.filterOrder(req, res);
});

router.put('/', (req, res)=>{
    orderCtrl.updateOrder(req, res);
});

router.delete('/', (req, res)=>{
    orderCtrl.deleteOrder(req, res);
});

module.exports = router;