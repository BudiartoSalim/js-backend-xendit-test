const express = require('express');
const router = express.Router();
const DisbursementRouter = require('./disbursement-router');

router.use('/disbursements', DisbursementRouter);
router.get('/', (req, res, next) => { res.status(200).json({ msg: "a" }) }); //helloworld

module.exports = router;