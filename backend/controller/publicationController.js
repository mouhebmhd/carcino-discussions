const PublicationSchema=require("../models/Publication.js");





const getAllPublication=async (req,res)=>{ 

    try
    {
        const Publication=await PublicationSchema.find();
        res.status(200).json(Publication);
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }

}
// get publication by id 
const getPublicationById = async (req, res) => {
    try {
      const { id } = req.params;
      const Publication = await Publication.findOne({publicationId:id});
      if (!Publication) return res.status(404).json({ error: "publication not found" });
      res.status(200).json(Publication);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  }
// add Publication
const addPublication = async (req, res) => {
    try {
      const newPublication = new PublicationSchema(req.body);
  
      const savedPublication = await newPublication.save();
      res.status(200).json(savedPublication);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // update  publication
  const updatePublication = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const updatedPublication = await Publication.findOneAndUpdate({publicationIdId:{$eq:id}}, req.body, { new: true });
      if (!updatedPublication) return res.status(404).json({ error: "Publication not found" });
      res.status(200).json(updatedPublication);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // delete  Publication
  const deletePublication = async (req, res) => {
    try {
     
      const { id } = req.params;
      console.log(id)
      const deleted = await Permission.findOneAndDelete({publicationId:{$eq:id}});
      if (!deleted) return res.status(404).json({ error: "Publication not found" });
      res.status(200).json({ message: "Publication deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  module.exports =
  {
    getAllPublication,
    getPublicationById,
    addPublication,
    updatePublication,
    deletePublication,
  };