const PieceJointe = require("../models/PieceJointe.js");
const pieceJointeSchema=require("../models/PieceJointe.js");



const getAllPieceJointe=async (req,res)=>{ 

    try
    {
        const pieceJointe=await pieceJointeSchema.find();
        res.status(200).json(pieceJointe);
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }

}
// get pieceJointe by id 
const getPieceJointeById = async (req, res) => {
    try {
      const { id } = req.params;
      const pieceJointe = await pieceJointe.findOne({pieceJointeId:id});
      if (!pieceJointe) return res.status(404).json({ error: "Permission not found" });
      res.status(200).json(pieceJointe);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  }
// add pieceJointe
const addPieceJointe = async (req, res) => {
    try {
      const newPieceJointe = new pieceJointeSchema(req.body);
  
      const savedPieceJointe = await newPieceJointe.save();
      res.status(200).json(savedPieceJointe);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // update  piecejointe
  const updatePieceJointe = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const updatedPieceJointe = await Permission.findOneAndUpdate({pieceJointeId:{$eq:id}}, req.body, { new: true });
      if (!updatedPermission) return res.status(404).json({ error: "pieceJointe not found" });
      res.status(200).json(updatedPieceJointe);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // delete  PieceJointe
  const deletePieceJointe = async (req, res) => {
    try {
     
      const { id } = req.params;
      console.log(id)
      const deleted = await PieceJointe.findOneAndDelete({pieceJointeId:{$eq:id}});
      if (!deleted) return res.status(404).json({ error: "PieceJointe not found" });
      res.status(200).json({ message: "PieceJointe deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  module.exports =
  {
    getAllPieceJointe,
    getPieceJointeById,
    addPieceJointe,
    updatePieceJointe,
    deletePieceJointe,
  };