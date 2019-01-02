const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('./models/db');

const userRouter = require('./routes/userRoute');
const orderRouter = require('./routes/orderRoute');

app.use('/user', userRouter);
app.use('/order', orderRouter);

app.listen(process.env.PORT || 3100, ()=> console.log('connected: listen 3100'));