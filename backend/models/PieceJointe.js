const mongoose = require('mongoose');

const PieceJointeSchema = new mongoose.Schema({
  pieceJointeId: { type: String },
  typePieceJointe: { type: String },
  lienPieceJointe: { type: String }
});

module.exports = mongoose.model('PieceJointe', PieceJointeSchema);
