const express=require("express");
const router=express.Router();
const getAllCommunities=require("../controller/communauteController.js");


// get all communities 
router.get("/communitiy/getAllCommunities/",getAllCommunities);

module.exports=router;