const express=require("express");
const router=express.Router();
const {getAllAbonnement,
    getAbonnementById,
    addAbonnement,
    updateAbonnement,
    deleteAbonnement,deleteAbonnementUserCommunity,getAllSubscriptionsWithDetails} =require("../controller/abonnementsController.js")

/**************** GET ROUTES  ************/
// get all abonnement
router.get("/getAllAbonemment/",getAllAbonnement);
//get abonnement by ID 
router.get("/Abonnement/getAbonnementById/:id",getAbonnementById);
//get abonnement by ID 
router.get("/Abonnement/getAbonnementsByDetails/",getAllSubscriptionsWithDetails);
/**************** DELETE ROUTES  ************/
//delete abonnement
router.delete("/Abonnement/deleteAbonnement/:id",deleteAbonnement);
//delete abonnement
router.delete("/Abonnement/deleteAbonnementUserCommunity/:userId/:communityId",deleteAbonnementUserCommunity);
/**************** UPDATE ROUTES  ************/
router.put("/Abonnement/updateAbonnement/:id",updateAbonnement)

/**************** POST ROUTES  ************/
router.post("/Abonnement/postAbonnement/",addAbonnement)




module.exports=router;