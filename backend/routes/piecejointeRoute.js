const express=require("express");
const router=express.Router();
const { getAllPieceJointe,
    getPieceJointeById,
    addPieceJointe,
    updatePieceJointe,
    deletePieceJointe,} =require("../controller/pieceJointeController.js")

/**************** GET ROUTES  ************/
// get all pieceJointe 
router.get("//getAllPieceJointe/",getAllPieceJointe);
//get piecejointe by ID 
router.get("/PieceJointe/getPieceJointeById/:id",getPieceJointeById);

/**************** DELETE ROUTES  ************/
//delete pieceJointe
router.delete("/PieceJointe/deletePieceJointe/:id",deletePieceJointe);
/**************** UPDATE ROUTES  ************/
router.put("/PieceJointe/updatePieceJointe/:id",updatePieceJointe)

/**************** POST ROUTES  ************/
router.post("/PieceJointe/postPieceJointe/",addPieceJointe)




module.exports=router;