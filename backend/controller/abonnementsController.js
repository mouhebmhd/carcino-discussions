const Abonnement = require("../models/Abonnement.js");
const abonnementSchema=require("../models/Abonnement.js");
const User=require("../models/Utilisateur.js")
const Community=require("../models/Communaute.js")

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
const deleteAbonnementUserCommunity = async (req, res) => {
  const { userId, communityId } = req.params;  // Corrected: directly get from req.params
  console.log({ userId, communityId });
  
  try {
    // Corrected: Make sure to use userId and communityId from req.params
    const abonnement = await Abonnement.findOneAndDelete({ userId, communityId });

    if (abonnement) {
      res.status(200).json({ message: "Subscription deleted successfully" });
    } else {
      res.status(404).json({ message: "Subscription not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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
      newAbonnement["abonnementStatus"]="waiting"
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
      const updatedAbonnement = await Abonnement.findByIdAndUpdate(id, req.body, { new: true });
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
      const deleted = await Abonnement.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ error: "Abonnement not found" });
      res.status(200).json({ message: "Abonnement deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  const getAllSubscriptionsWithDetails = async (req, res) => {
      
      try {
      const abonnements = await Abonnement.find();
      const detailedSubscriptions = await Promise.all(abonnements.map(async (sub) => {
        const user = await User.findOne({_id:sub.userId});
        const community = await Community.findById({_id:sub.communityId});

        return {
          ...sub._doc,
          userInfo: user ,
          communityInfo: community 
        };
      }));
  
      res.status(200).json(detailedSubscriptions);
    } catch (error) {
      console.error('Error retrieving subscription details:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } 
  };
  

  module.exports =
  {
    getAllAbonnement,
    getAbonnementById,
    addAbonnement,
    updateAbonnement,
    deleteAbonnement,
    deleteAbonnementUserCommunity,
    getAllSubscriptionsWithDetails
  };