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
const UtilisateurRoute=require("./routes/UtilisateurRoute");
server.use("/",UtilisateurRoute)

/* Abonnement ROUTE */
const AbonnementRoute=require("./routes/AbonnementRoute");
server.use("/",AbonnementRoute)

/* commentaire ROUTE */
const CommentaireRoute=require("./routes/CommentaireRoute");
server.use("/",CommentaireRoute)

/* Interaction ROUTE */
const InteractionRoute=require("./routes/InteractionRoute");
server.use("/",InteractionRoute)

/* permission ROUTE */
const PermissionRoute=require("./routes/PermissionRoute");
server.use("/",PermissionRoute)

/* PieceJointe ROUTE */
const PieceJointeRoute=require("./routes/PieceJointeRoute");
server.use("/",PieceJointeRoute)

/* Publication ROUTE */
const PublicationRoute=require("./routes/PublicationRoute");
server.use("/",PublicationRoute)


server.listen(port,()=>{
    console.log(`the server is running on port ${port}`)
})
