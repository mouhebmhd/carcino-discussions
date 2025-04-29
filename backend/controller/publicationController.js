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
      const Publication = await PublicationSchema.findOne({publicationId:id});
      if (!Publication) return res.status(404).json({ error: "publication not found" });
      res.status(200).json(Publication);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  }
// get publication by id 
const getPublicationByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const Publication = await PublicationSchema.find({publisherId:id});
    if (!Publication) return res.status(404).json({ error: "publications not found" });
    res.status(200).json(Publication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

}
// add Publication
const addPublication = async (req, res) => {
    try {
      const pubs = await PublicationSchema.find();
      const pubId = pubs.length + 1;
      var newPublication = (req.body);
      newPublication["publicationId"]=pubId;
      newPublication["posttatus"]="waiting";
      newPublication=new PublicationSchema(newPublication)
      const savedPublication = await newPublication.save();
      res.status(200).json(savedPublication);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // update  publication
  const updatePublication = async (req, res) => {
    try {
      const  post  = req.body;
      console.log(post)
      const updatedPublication = await PublicationSchema.findByIdAndUpdate({_id:req.params.id}, req.body, { new: true });
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
      const deleted = await PublicationSchema.findByIdAndDelete({_id:req.params.id});
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
    getPublicationByUserId
  };