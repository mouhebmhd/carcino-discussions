
const express = require('express');
const router = express.Router();
const { getPlatformStatistics } = require('../controller/statisticsController');

router.get('/stats/getStats', getPlatformStatistics);

module.exports = router;
