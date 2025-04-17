const express=require("express");
const router=express.Router();
const { getAllPublication,
    getPublicationById,
    addPublication,
    updatePublication,
    deletePublication,} =require("../controller/publicationController.js")

/**************** GET ROUTES  ************/
// get all publication
router.get("//getAllPublication/",getAllPublication);
//get publication by ID 
router.get("/Publication/getPublicationById/:id",getPublicationById);

/**************** DELETE ROUTES  ************/
//delete publication
router.delete("/Publication/deletePublication/:id",deletePublication);
/**************** UPDATE ROUTES  ************/
router.put("/Publication/updatePublcation/:id",updatePublication)

/**************** POST ROUTES  ************/
router.post("/Publication/postPublication/",addPublication)




module.exports=router;