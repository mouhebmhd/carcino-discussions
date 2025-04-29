const mongoose = require('mongoose');

const UtilisateurSchema = new mongoose.Schema({
  userId: { type: String },
  nom: { type: String },
  prenom: { type: String },
  dateNaissance: { type: String },
  age: { type: String },
  accountStatus: { type: String },
  email: { type: String },
  motDePasse: { type: String },
  aboutMe: { type: String },
  numeroTelephone: { type: String },
  role: { type: String, enum: ["membre", "moderateur", "administrateur"], default: "membre" }
});

module.exports = mongoose.model('Utilisateur', UtilisateurSchema);
