const interactionSchema=require("../models/Interaction.js");
const { deletePermission } = require("./permissionController.js");

const getAllInteraction=async (req,res)=>{ 

    try
    {
        const Interaction=await interactionSchema.find();
        res.status(200).json(Interaction);
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }

}
// get interaction by id 
const getInteractionById = async (req, res) => {
    try {
      const { id } = req.params;
      const Interaction = await Interaction.findOne({interactionId:id});
      if (!Interaction) return res.status(404).json({ error: "interaction not found" });
      res.status(200).json(Interaction);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  }
// add interaction
const addInteraction = async (req, res) => {
    try {
      const newInteraction = new interactionSchema(req.body);
  
      const savedInteraction = await newInteraction.save();
      res.status(200).json(savedInteraction);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // update  Interaction
  const updateInteraction = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const updatedInteraction = await Interaction.findOneAndUpdate({interactionId:{$eq:id}}, req.body, { new: true });
      if (!updatedInteraction) return res.status(404).json({ error: "Interaction not found" });
      res.status(200).json(updatedInteraction);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // delete  interaction
  const deleteInteraction = async (req, res) => {
    try {
     
      const { id } = req.params;
      console.log(id)
      const deleted = await Interaction.findOneAndDelete({interactionId:{$eq:id}});
      if (!deleted) return res.status(404).json({ error: "Interaction not found" });
      res.status(200).json({ message: "interaction deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  module.exports =
  {
    getAllInteraction,
    getInteractionById,
    addInteraction,
    updateInteraction,
    deleteInteraction,
  };
  
 
