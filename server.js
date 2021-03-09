const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = 5000;

// Read the host address and the port from the environment
// const hostname =require(file.env.HOST) ;
// const port = file.env.PORT;
// const mongoURL = file.env.MONGO_URI;

//connection DB to server
const mongoURL = 'mongodb+srv://aymenby:aymenby123@cluster0.zbckh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Parse data
app.use(express.json())
app.use('/person', require('./Routes/personRoute'))

mongoose.connect(mongoURL,{ useUnifiedTopology: true, useNewUrlParser: true },(err)=>{
    err ? console.log(err) : console.log('DB is connected')
})
app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server running`)
})