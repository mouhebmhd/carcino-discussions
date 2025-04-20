const commentaireSchema=require("../models/Commentaire.js");

const getAllCommentaire=async (req,res)=>{ 

    try
    {
        const Commentaire=await commentaireSchema.find();
        res.status(200).json(Commentaire);
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }

}
// get commentaire by id 
const getCommentaireById = async (req, res) => {
    try {
      const { id } = req.params;
      const Commentaire = await commentaireSchema.findOne({commentaireId:id});
      if (!Commentaire) return res.status(404).json({ error: "Commentaire not found" });
      res.status(200).json(Commentaire);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  }
  const getCommentairesByPostId = async (req, res) => {
    try {
      const { id } = req.params;
      const Commentaires = await commentaireSchema.find({publicationId:id});
      if (!Commentaires) return res.status(404).json({ error: "Commentaires not found" });
      res.status(200).json(Commentaires);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  }
// add commentaire
const addCommentaire = async (req, res) => {
    try {
      const comments = await commentaireSchema.find();
      const commentId = comments.length + 1; 
      var newCommentaire = new commentaireSchema(req.body);
      newCommentaire["commentaireId"]=commentId;
      const savedCommentaire = await newCommentaire.save();
      res.status(200).json(savedCommentaire);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // update  Commentaire
  const updateCommentaire = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const updatedCommentaire = await commentaireSchema.findOneAndUpdate({commentaireId:{$eq:id}}, req.body, { new: true });
      if (!updatedCommentaire) return res.status(404).json({ error: "Comentaire not found" });
      res.status(200).json(updatedCommentaire);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // delete  commentaire
  const deleteCommentaire = async (req, res) => {
    try {
     
      const { id } = req.params;
      console.log(id)
      const deleted = await commentaireSchema.findOneAndDelete({commentaireId:{$eq:id}});
      if (!deleted) return res.status(404).json({ error: "Commentaire not found" });
      res.status(200).json({ message: "Commentaire deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  module.exports =
  {
    getAllCommentaire,
    getCommentaireById,
    addCommentaire,
    updateCommentaire,
    deleteCommentaire,getCommentairesByPostId
  };
 