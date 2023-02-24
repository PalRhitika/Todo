const express= require("express");
const app=express();
const mongoose=require("mongoose")

//connection to the database
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/todoDB',{family:4}).then(()=>console.log('connected to db'))
.catch((e)=> console.log('error',e));


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

//configuration of server
app.listen(3000, ()=>{
    console.log('server listening at port:3000');

})