const mongoose = require('mongoose');

const PublicationSchema = new mongoose.Schema({
  publicationId: { type: String },
  publisherId: { type:String },
  titrePublication: { type: String },
  contenuPublication: { type: String },
  tagPublication: { type: String },
  upVotes: { type: Number , default:0},
  downVotes: { type: Number , default:0},
  signals: { type: Number , default:0}
});

module.exports = mongoose.model('Publication', PublicationSchema);
