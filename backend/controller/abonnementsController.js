const Abonnement = require("../models/Abonnement.js");
const abonnementSchema=require("../models/Abonnement.js");


const getAllAbonnement=async (req,res)=>{ 

    try
    {
        const Abonnement=await abonnementSchema.find();
        res.status(200).json(Abonnement);
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }

}
// get abonnement by id 
const getAbonnementById = async (req, res) => {
    try {
      const { id } = req.params;
      const Abonnement = await Abonnement.findOne({abonnementId:id});
      if (!Abonnement) return res.status(404).json({ error: "Abonnement not found" });
      res.status(200).json(Abonnement);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  }
// add abonnement
const addAbonnement = async (req, res) => {
    try {
      const newAbonnement = new abonnementSchema(req.body);
  
      const savedAbonnement = await newAbonnement.save();
      res.status(200).json(savedAbonnement);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // update  abonnement
  const updateAbonnement = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const updatedAbonnement = await Abonnement.findOneAndUpdate({abonnementIdId:{$eq:id}}, req.body, { new: true });
      if (!updatedAbonnement) return res.status(404).json({ error: "Abonnement not found" });
      res.status(200).json(updatedAbonnement);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // delete abonnement
  const deleteAbonnement = async (req, res) => {
    try {
     
      const { id } = req.params;
      const deleted = await Abonnement.findOneAndDelete({abonnementId:{$eq:id}});
      if (!deleted) return res.status(404).json({ error: "Abonnement not found" });
      res.status(200).json({ message: "Abonnement deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  module.exports =
  {
    getAllAbonnement,
    getAbonnementById,
    addAbonnement,
    updateAbonnement,
    deleteAbonnement,
  };