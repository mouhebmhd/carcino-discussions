const Abonnement = require("../models/Abonnement.js");
const abonnementSchema=require("../models/Abonnement.js");
const User=require("../models/Utilisateur.js")
const Community=require("../models/Communaute.js")
const {saveNotification} =require("../controller/notificationController.js")
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
  const { userId, communityId } = req.params;
  console.log({ userId, communityId });

  try {
    // Await and catch errors from saveNotification
    await saveNotification(
      new Date().toISOString(),
      "Subscription Deletion",
      "One of your subscriptions to communities has been deleted by a user. Please check the Communities window.",
      userId
    );

    const abonnement = await Abonnement.findOneAndDelete({ userId, communityId });

    if (abonnement) {
      res.status(200).json({ message: "Subscription deleted successfully" });
    } else {
      res.status(404).json({ message: "Subscription not found" });
    }

  } catch (error) {
    console.error("Error in deletion process:", error.message);
    res.status(500).json({ error: error.message });
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
      console.log(abonnementSchema(req.body));
      const newAbonnement = new abonnementSchema(req.body);
      newAbonnement["abonnementStatus"]="waiting"
      const savedAbonnement = await newAbonnement.save();
      res.status(200).json(savedAbonnement);
      await saveNotification(
        new Date().toISOString(),
        "Subscription Success",
        "One of your subscriptions to communities has successfully saved. Please check the Communities window.",
        newAbonnement.userId
      );
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // update  abonnement
  const updateAbonnement = async (req, res) => {
    try {
      await saveNotification(
        new Date().toISOString(),
        "Subscription Updated",
        "The status of One of your subscriptions to communities has successfully updated. Please check the Communities window.",
        req.body.userId
      );
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
      await saveNotification(
        new Date().toISOString(),
        "Subscription Deleted",
        "One of your subscriptions to communities has been deleted . Please check the Communities window.",
        newAbonnement.userId
      );
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