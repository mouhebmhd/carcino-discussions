const express=require("express");
const router=express.Router();
const { getAllPermissions,
    getPermissionById,
    addPermission,
    updatePermission,
    deletePermission,} =require("../controller/permissionController.js")

/**************** GET ROUTES  ************/
// get all permissions 
router.get("//getAllPermission/",getAllPermissions);
//get permission by ID 
router.get("/Permission/getPermissionById/:id",getPermissionById);

/**************** DELETE ROUTES  ************/
//delete permission 
router.delete("/Permission/deletePermission/:id",deletePermission);
/**************** UPDATE ROUTES  ************/
router.put("/Permission/updatePermission/:id",updatePermission)

/**************** POST ROUTES  ************/
router.post("/Permission/postPermission/",addPermission)




module.exports=router;