const PermissionSchema=require("../models/Permission.js");





const getAllPermissions=async (req,res)=>{ 

    try
    {
        const Permission=await PermissionSchema.find();
        res.status(200).json(Permission);
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }

}
// get Permission by id 
const getPermissionById = async (req, res) => {
    try {
      const { id } = req.params;
      const Permission = await Permission.findOne({permissionId:id});
      if (!Permission) return res.status(404).json({ error: "Permission not found" });
      res.status(200).json(Permission);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  }
// add Permission
const addPermission = async (req, res) => {
    try {
      const newPermission = new Permission(req.body);
  
      const savedPermission = await newPermission.save();
      res.status(200).json(savedPermission);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // update  Permission
  const updatePermission = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const updatedPermission = await Permission.findOneAndUpdate({permissionId:{$eq:id}}, req.body, { new: true });
      if (!updatedPermission) return res.status(404).json({ error: "Permission not found" });
      res.status(200).json(updatedPermission);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // delete  Permission
  const deletePermission = async (req, res) => {
    try {
     
      const { id } = req.params;
      console.log(id)
      const deleted = await Permission.findOneAndDelete({permissionId:{$eq:id}});
      if (!deleted) return res.status(404).json({ error: "Permission not found" });
      res.status(200).json({ message: "Permission deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  module.exports =
  {
    getAllPermissions,
    getPermissionById,
    addPermission,
    updatePermission,
    deletePermission,
  };