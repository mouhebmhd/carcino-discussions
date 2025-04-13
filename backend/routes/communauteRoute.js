const express=require("express");
const router=express.Router();
const {  getAllCommunities,
    getCommunityById,
    getCommunityByName,
    addCommunity,
    updateCommunity,
    deleteCommunity} =require("../controller/communauteController.js")

/**************** GET ROUTES  ************/
// get all communities 
router.get("/communitiy/getAllCommunities/",getAllCommunities);
// get community by name  
router.get("/community/getCommunityByName/:name",getCommunityByName);
//get community by ID 
router.get("/community/getCommunityById/:id",getCommunityById);

/**************** DELETE ROUTES  ************/
//delete community 
router.delete("/community/deleteCommunity/:id",deleteCommunity);
/**************** UPDATE ROUTES  ************/
router.put("/community/updateCommunity/:id",updateCommunity)

/**************** POST ROUTES  ************/
router.post("/community/postCommunity/",addCommunity)




module.exports=router;