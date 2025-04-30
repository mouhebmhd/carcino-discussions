const mongoose = require('mongoose');

const AbonnementSchema = new mongoose.Schema({
  userId: { type: String },
  dateDebutAbonnement: { type: String },
  communityId: { type: String },
  abonnementStatus: { type: String,default:"waiting" }
});

module.exports = mongoose.model('Abonnement', AbonnementSchema);
