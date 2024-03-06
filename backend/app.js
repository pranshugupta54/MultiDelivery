const express = require('express')
const app = express();
// const cors= require('cors');
const {connectMongoose}= require('./connection.js')


app.use(express.json());

const router=express.Router();



//stores foodData here
connectMongoose();


app.listen(3000,()=>{
    console.log("server is runnning at port 3000");


})