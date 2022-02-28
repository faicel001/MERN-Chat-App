const express=require("express")
const app=express()
const cors=require("cors")
const  helmet = require("helmet")
const morgan = require("morgan")
require("dotenv").config()
const ConnectDb = require("./config/ConnectDb.js")
const UserRouter=require("./routes/Users.js")
const AuthRouter=require("./routes/Auth.js")
const MessageRouter=require("./routes/Message.js")
const ConversationRouter=require("./routes/Conversation.js")

//midelwers
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use(cors())

//connection to data base
ConnectDb()

const port=process.env.PORT||7000
app.use("/api/auth",AuthRouter)
app.use("/api/users",UserRouter)
app.use("/api/conv",ConversationRouter)
app.use("/api/msg",MessageRouter)


app.listen(port,(err)=>{
    err?console.log(err):console.log(`serveur is runing at ${port}`)}
)