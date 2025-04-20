const mongoose = require('mongoose');

const InteractionSchema = new mongoose.Schema({
  interactionId: { type: String },
  typeInteraction: { type: String },
  dateInteraction: { type: String },
  interactorId: { type:String },
  publicationId: { type:String},
});

module.exports = mongoose.model('Interaction', InteractionSchema);
