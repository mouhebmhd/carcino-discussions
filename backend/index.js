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

server.use(express.json())

server.use(cors())

/***************** ADDING ROUTES ***********************/
/* COMMUNITY ROUTE */
const communityRoute=require("./routes/communauteRoute");
server.use("/",communityRoute)
/* USER ROUTE */
const userRoute=require("./routes/userRoute");
server.use("/",userRoute)




server.listen(port,()=>{
    console.log(`the server is running on port ${port}`)
})
