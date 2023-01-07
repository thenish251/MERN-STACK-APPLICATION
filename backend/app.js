const express = require('express');
const mongoose = require ('mongoose');
const router = require("./routes/book-routes")
const cors = require('cors')
const app = express();


// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router);


mongoose.connect("mongodb+srv://admin:test123@cluster0.xeddxmf.mongodb.net/bookStore?retryWrites=true&w=majority"
)
.then(()=> console.log("connected to database"))
.then(()=> {
    app.listen(5000);
    console.log('server is up and running');
})
.catch((err)=> console.log(err));



