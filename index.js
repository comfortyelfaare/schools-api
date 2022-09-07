const express = require("express");
const morgan = require("morgan");
require ("dotenv").config();
const connectDB= require("./config/connectDB")
const userRoutes =require("./routes/userRouter")
const app = express();
connectDB()
//middlewares
app.use(express.json())
app.use(morgan ("dev"))
app.use('./users', userRoutes)

//home route
app.get("/", (req, res)=>{
    res.json("<H1>ELCOME TO OUR SCHOOL API</H1>")

})
const PORT=process.env.PORT||6000

app.listen(PORT, ()=>{
console.log("server is active")
})

