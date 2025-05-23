const express=require("express");
const router=express.Router();
const { getUtilisateurById,
    getAllUtilisateur,
    addUtilisateur,
    updateUtilisateur,
    deleteUtilisateur,
    loginUtilisateur,
    logoutUtilisateur,
    getUserRole,
    getUtilisateurStats

} =require("../controller/utilisateurController.js")

/**************** GET ROUTES  ************/
// get all utilisateur
router.get("/Utilisateur/getAllUtilisateur/",getAllUtilisateur);
//get utilisateur by ID 
router.get("/Utilisateur/getUtilisateurById/:id",getUtilisateurById);
//get stats by userID 
router.get("/Utilisateur/getUtilisateurStats/:id",getUtilisateurStats);
//get utilisateur by ID 
router.get("/Utilisateur/getUserRole/:email",getUserRole);
/**************** DELETE ROUTES  ************/
//delete utilisateur
router.delete("/Utilisateur/deleteUtilisateur/:id",deleteUtilisateur);
/**************** UPDATE ROUTES  ************/
router.put("/Utilisateur/updateUtilisateur/:id",updateUtilisateur)

/**************** POST ROUTES  ************/
router.post("/Utilisateur/postUtilisateur/",addUtilisateur)

//login utilisateur
router.post("/utilisateur/login", loginUtilisateur);
//login utilisateur
router.post("/utilisateur/logout", logoutUtilisateur);


module.exports=router;