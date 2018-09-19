const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('./models/db');


const userRouter = require('./routes/user');

app.use('/user', userRouter);

app.listen(process.env.PORT || 3100, ()=> console.log('connected: listen 3100'));