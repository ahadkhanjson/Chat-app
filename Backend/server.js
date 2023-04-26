const express = require('express');
const data = require('./Data/data')

const port = 5000;


const app = express();

var cors = require('cors')

 
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(cors(corsOptions))


app.get('/chat', (req,res)=>{

  res.status(200).json({ data})

})




app.listen(port,()=>{
    console.log("listening on Port " + port);
})