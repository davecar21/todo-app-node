const mongoose = require('./db');
const Schema = mongoose.Schema;

const UserModel = require('./userModel')

let OrderMethod = {}

let ItemModel = new Schema({
    name: String,
    quantity: Number
})

let orderSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    items: [ItemModel]
});

let Order = mongoose.model('Order', orderSchema); 

OrderMethod.postOrder = async (order)=>{
    order._id = new mongoose.Types.ObjectId();
    const orderData = new Order(order);
    const result = await orderData.save();
    return result;
}

OrderMethod.getOrder = async ()=>{
    const result = await Order.find().populate('user');
    return result;
}

OrderMethod.filterOrder = async (orderId)=>{
    const result = await Order.findOne({user: orderId}).populate('user');
    return result;
}

OrderMethod.updateOrder = async (order)=> {
    const result = await Order.findOneAndUpdate(order.id, order, {new: true});
    return result;
}

OrderMethod.deleteOrder = async (id)=> {
    const result = await Order.findOneAndDelete(id);
    return result;
}

OrderMethod.Order = Order;
module.exports = OrderMethod;