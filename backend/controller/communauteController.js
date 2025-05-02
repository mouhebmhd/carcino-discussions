const communauteSchema=require("../models/Communaute.js");

const getAllCommunities=async (req,res)=>{ 

    try
    {
      console.log(req.cookies.auth_token)
        const communities=await communauteSchema.find();
        res.status(200).json(communities);
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }

}
// get community by id 
const getCommunityById = async (req, res) => {
    try {
      const { id } = req.params;
      const community = await communauteSchema.findOne({communauteId:id});
      if (!community) return res.status(404).json({ error: "Community not found" });
      res.status(200).json(community);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // get community by name 
  const getCommunityByName = async (req, res) => {
    try {
      const { name } = req.params;
      const community = await communauteSchema.findOne({nomCommunaute:{$eq:name}});
      if (!community) return res.status(404).json({ error: "Community not found" });
      res.status(200).json(community);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
// add community
const addCommunity = async (req, res) => {
    try {
      const newCommunity = new communauteSchema(req.body);
  
      const savedCommunity = await newCommunity.save();
      res.status(200).json(savedCommunity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // update  community
  const updateCommunity = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const updatedCommunity = await communauteSchema.findByIdAndUpdate({_id:id}, req.body, { new: true });
      if (!updatedCommunity) return res.status(404).json({ error: "Community not found" });
      res.status(200).json(updatedCommunity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // delete  community
  const deleteCommunity = async (req, res) => {
    try {
     
      const { id } = req.params;
      console.log(id)
      const deleted = await communauteSchema.findByIdAndDelete({_id:id});
      if (!deleted) return res.status(404).json({ error: "Community not found" });
      res.status(200).json({ message: "Community deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  module.exports =
  {
    getAllCommunities,
    getCommunityById,
    getCommunityByName,
    addCommunity,
    updateCommunity,
    deleteCommunity
  };