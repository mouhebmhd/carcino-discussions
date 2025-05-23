const express=require("express");
const router=express.Router();
const {  getAllCommentaire,
    getCommentaireById,
    addCommentaire,
    updateCommentaire,
    deleteCommentaire,getCommentairesByPostId} =require("../controller/commentaireController.js")

/**************** GET ROUTES  ************/
// get all commentaire
router.get("/Commentaire/getAllCommentaire/",getAllCommentaire);
//get commentaire by ID 
router.get("/Commentaire/getCommentaireById/:id",getCommentaireById);
//get commentaire by postId 
router.get("/Commentaire/getCommentaireByPostId/:id",getCommentairesByPostId);

/**************** DELETE ROUTES  ************/
//delete commentaire
router.delete("/Commentaire/deleteCommentaire/:id",deleteCommentaire);
/**************** UPDATE ROUTES  ************/
router.put("/Commentaire/updateCommentaire/:id",updateCommentaire)

/**************** POST ROUTES  ************/
router.post("/Commentaire/postCommentaire/",addCommentaire)




module.exports=router;