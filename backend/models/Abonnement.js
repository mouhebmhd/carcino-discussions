const mongoose = require('mongoose');

const AbonnementSchema = new mongoose.Schema({
  abonnementId: { type: String },
  descriptionAbonnement: { type: String },
  dateDebutAbonnement: { type: String },
  dateFinAbonnement: { type: String }
});

module.exports = mongoose.model('Abonnement', AbonnementSchema);
