const express=require("express");
const router=express.Router();
const {  getAllInteraction,
    getInteractionById,
    addInteraction,
    updateInteraction,
    deleteInteraction,} =require("../controller/interactionController.js")

/**************** GET ROUTES  ************/
// get all interaction 
router.get("/Interaction/getAllInteraction/",getAllInteraction);
//get interaction by ID 
router.get("/Interaction/getInteractionById/:id",getInteractionById);

/**************** DELETE ROUTES  ************/
//delete interaction 
router.delete("/Interaction/deleteInteraction/:id",deleteInteraction);
/**************** UPDATE ROUTES  ************/
router.put("/Interaction/updateInteraction/:id",updateInteraction)

/**************** POST ROUTES  ************/
router.post("/Interaction/postInteraction/",addInteraction)




module.exports=router;