const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema({
  permissionId: { type: String },
  nomPermission: { type: String },
  typePermission: { type: String }
});

module.exports = mongoose.model('Permission', PermissionSchema);
