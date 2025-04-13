const express=require("express");
const router=express.Router();

const getAllUsers=require("../controller/userController");

/*
HTTP Requests 
select GET
supprimer DELETE
modifier  PUT
create  POST
*/

router.get("/users/getAllUsers",getAllUsers);

module.exports=router;