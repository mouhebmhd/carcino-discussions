const express=require("express");
const router=express.Router();
const { getAllPublication,
    getPublicationById,
    addPublication,
    updatePublication,
    deletePublication,getPublicationByUserId} =require("../controller/publicationController.js")

/**************** GET ROUTES  ************/
// get all publication
router.get("/Publication/getAllPublication/",getAllPublication);
//get publication by ID 
router.get("/Publication/getPublicationById/:id",getPublicationById);
//get publication by user ID 
router.get("/Publication/getPublicationByUserId/:id",getPublicationByUserId);

/**************** DELETE ROUTES  ************/
//delete publication
router.delete("/Publication/deletePublication/:id",deletePublication);
/**************** UPDATE ROUTES  ************/
router.put("/Publication/updatePublication/:id",updatePublication)

/**************** POST ROUTES  ************/
router.post("/Publication/postPublication/",addPublication)




module.exports=router;