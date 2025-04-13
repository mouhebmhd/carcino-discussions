const express=require("express"); // create a server 
const dotenv=require("dotenv"); // read config file 
dotenv.config()
const cors=require("cors")
const portPrimary=process.env.portPrimary;
const portSecondary=process.env.portSecondary;
const portTertiary=process.env.portTertiary;

const server=express();

const port=portPrimary || portSecondary || portTertiary;

//connect to database 
const connectToDatabase=require("./database/connectDatabase");
connectToDatabase();
// importing routers
// import user Router
const userRoute=require("./routes/userRoute");
server.use("/",userRoute)
server.use(cors())
//import communauty Router 
const communityRoute=require("./routes/communauteRoute");
server.use("/",communityRoute)
server.listen(port,()=>{
    console.log(`the server is running on port ${port}`)
})
