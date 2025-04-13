const mongoose=require("mongoose");

const databaseLink=process.env.databaseLink;

const connectToDatabase=async ()=>
{
try 
{
    await mongoose.connect(databaseLink,{
        useNewUrlParser:true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS:30000
    });
    console.log(databaseLink)
    console.log("Successfully connected to database ! ")
}
catch(error)
{
    console.log("Error connecting to database ",error);
    process.exit(1);
}

}
 
module.exports=connectToDatabase;