const express = require('express')
const app = express();
// const cors= require('cors');
const connectMongoose= require('./connection.js')
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json());
const router=express.Router();


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

//stores foodData here
// connectMongoose();

app.listen(3000,()=>{
    console.log("server is runnning at port 3000");


})