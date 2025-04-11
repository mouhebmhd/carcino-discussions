const mongoose = require('mongoose');

const CommunauteSchema = new mongoose.Schema({
  communauteId: { type: String },
  nomCommunauté: { type: String },
  descriptionCommunauté: { type: String }
});

module.exports = mongoose.model('Communaute', CommunauteSchema);
