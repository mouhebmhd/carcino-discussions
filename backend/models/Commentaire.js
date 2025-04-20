const mongoose = require('mongoose');

const CommentaireSchema = new mongoose.Schema({
  commentaireId: { type: String },
  contenuCommentaire: { type: String },
  dateCommentaire: { type: String },
  authorId: { type:String  },
  publicationId: { type: String},
});

module.exports = mongoose.model('Commentaire', CommentaireSchema);
