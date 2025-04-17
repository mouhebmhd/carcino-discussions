const express=require("express");
const router=express.Router();
const {getAllAbonnement,
    getAbonnementById,
    addAbonnement,
    updateAbonnement,
    deleteAbonnement,} =require("../controller/abonnementsController.js")

/**************** GET ROUTES  ************/
// get all abonnement
router.get("//getAllAbonemment/",getAllAbonnement);
//get abonnement by ID 
router.get("/Abonnement/getAbonnementById/:id",getAbonnementById);

/**************** DELETE ROUTES  ************/
//delete abonnement
router.delete("/Abonnement/deleteAbonnement/:id",deleteAbonnement);
/**************** UPDATE ROUTES  ************/
router.put("/Abonnement/updateAbonnement/:id",updateAbonnement)

/**************** POST ROUTES  ************/
router.post("/Abonnement/postAbonnement/",addAbonnement)




module.exports=router;