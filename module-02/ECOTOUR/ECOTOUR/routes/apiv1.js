var express = require('express');
var router = express.Router();
var countryController = require('../models/countryController');

router.get('/countries', countryController.all);

router.route('/country/:countryId')
    .get(countryController.read)
    .put(countryCountroller.update)
    .delete(countryCountroller.delete);


module.exports = router;