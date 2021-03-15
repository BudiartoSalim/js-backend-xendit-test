const express = require('express');
const router = express.Router();
const DisbursementController = require('../controllers/disbursement-controller');

router.get('/', DisbursementController.getDisbursementHandler);
router.post('/', DisbursementController.createDisbursementPostHandler);

module.exports = router;