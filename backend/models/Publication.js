const mongoose = require('mongoose');

const PublicationSchema = new mongoose.Schema({
  publicationId: { type: String },
  titrePublication: { type: String },
  contenuPublication: { type: String },
  tagPublication: { type: String }
});

module.exports = mongoose.model('Publication', PublicationSchema);
