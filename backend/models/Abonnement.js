const mongoose = require('mongoose');

const AbonnementSchema = new mongoose.Schema({
  userId: { type: String },
  dateDebutAbonnement: { type: String },
  communityId: { type: String }
});

module.exports = mongoose.model('Abonnement', AbonnementSchema);
