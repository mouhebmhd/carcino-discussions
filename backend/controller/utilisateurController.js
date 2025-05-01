const UtilisateurSchema=require("../models/Utilisateur");
const bcrypt=require("bcrypt");
const jsonwebToken=require("jsonwebtoken")
const secretKey="3493eb041692ecfe5ca21a854a5641a6d32c4bf0849141552ef62920664e5e4b";
const Publication=require("../models/Publication")
const Interaction=require("../models/Interaction")
const Comments=require("../models/Commentaire")
const CommunitiesSubs=require("../models/Abonnement")
const getAllUtilisateur=async (req,res)=>{ 

    try
    {
        const Utilisateur=await UtilisateurSchema.find();
        res.status(200).json(Utilisateur);
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }

}
// get utilisateur by id 
const getUtilisateurById = async (req, res) => {
    try {
      var { id } = req.params;
      const Utilisateur = await UtilisateurSchema.findById(id);
     
      res.status(200).json(Utilisateur);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  }
// add utilisateur
const addUtilisateur = async (req, res) => {
    try {
      const users = await UtilisateurSchema.find();
      const userId = users.length + 1; 

      var userData=req.body;
      userData["userId"]=userId
      userData["aboutMe"]="this description is automatically generated . You can Update it as you want ! "
      userData["motDePasse"]=bcrypt.hashSync(userData["motDePasse"],10);
      
      const newUtilisateur = new UtilisateurSchema(userData);
  
      const savedUtilisateur = await newUtilisateur.save();
      res.status(200).json(savedUtilisateur);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // update  utilisateur
  const updateUtilisateur = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(req.body)
      const updatedUtilisateur = await UtilisateurSchema.findOneAndUpdate({_id:{$eq:id}}, req.body, { new: true });
      if (!updatedUtilisateur) return res.status(404).json({ error: "Utilisateur not found" });
      res.status(200).json(updatedUtilisateur);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // delete  Utilisateur
  const deleteUtilisateur = async (req, res) => {
    try {
     
      const { id } = req.params;
      console.log(id)
      const deleted = await UtilisateurSchema.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ error: "Utilisateur not found" });
      res.status(200).json({ message: " deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // login utilisateur
  const loginUtilisateur = async (req, res) => {
    try {
      const { email, password } = req.body;
      const Utilisateur = await UtilisateurSchema.findOne({ email });
      if (!Utilisateur ) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const isPasswordValid=await bcrypt.compare(password,Utilisateur.motDePasse);
      if(Utilisateur.accountStatus=="waiting" )
        {
          res.status(500).json({ message: "Login Error ! Your Account is Blocked",  Utilisateur });
        }
      if(isPasswordValid)
      {
        const generatedToken=jsonwebToken.sign({Utilisateur},secretKey,{expiresIn:"24h"})
        res.status(200).json({ message: "Login successful", userData:Utilisateur,token:generatedToken });
      }
      else 
      {
        res.status(200).json({ message: "Login error", Utilisateur });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  // login utilisateur
  const getUserRole = async (req, res) => {
    try {
      const email = req.params.email.substring(1);
      const Utilisateur = await UtilisateurSchema.findOne({ email });
      if (!Utilisateur ) {
        return res.status(401).json({ error: "user not found" });
      }
      return res.status(200).json({ userRole: Utilisateur.role });
    } 
    catch (error) {
      res.status(400).json({ error: "user not found" });
    }
  }
  const logoutUtilisateur = async (req, res) => {
    try {
      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  const getUtilisateurStats=async (req,res)=>{
    try 
    {
    const publicationsCount=await Publication.find({publisherId:req.params.id})
    const interactionsCount=await Interaction.find({interactorId:req.params.id})
    const commentsCount=await Comments.find({authorId:req.params.id})
    const subsCount= await CommunitiesSubs.find({userId:req.params.id})
    res.status(200).json({ 
      "pubCount":publicationsCount.length,
      "interactionsCount": interactionsCount.length,
      "commentsCount":commentsCount.length,
      "subscribtionsCount":subsCount.length,
      })
    }
    catch(error)
    {
      res.status(500).json({message:"an error occured . please try againt "})
    }
  }
  module.exports =
  {
    getUtilisateurById,
    getAllUtilisateur,
    addUtilisateur,
    updateUtilisateur,
    deleteUtilisateur,
    loginUtilisateur,
    logoutUtilisateur,
    getUserRole,
    getUtilisateurStats
  };