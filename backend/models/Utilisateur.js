const mongoose = require('mongoose');

const UtilisateurSchema = new mongoose.Schema({
  userId: { type: String },
  nom: { type: String },
  prénom: { type: String },
  dateNaissance: { type: String },
  âge: { type: String },
  email: { type: String },
  motDePasse: { type: String },
  numéroTéléphone: { type: String },
  rôle: { type: String, enum: ["membre", "modérateur", "administrateur"], default: "membre" }
});

module.exports = mongoose.model('Utilisateur', UtilisateurSchema);
