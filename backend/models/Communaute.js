const mongoose = require('mongoose');

const CommunauteSchema = new mongoose.Schema({
  nomCommunaute: { type: String },
  descriptionCommunaute: { type: String },
  nombreMembre: { type: String },
  imageCommunaute: { type: String },

});

module.exports = mongoose.model('Communaute', CommunauteSchema);
