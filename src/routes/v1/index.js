const express = require('express');
const { cityController, airportController } = require('../../controllers/index');

const router = express.Router();

// city routes
router.post('/city', cityController.create);
router.get('/city/:id', cityController.getCity);
router.get('/cities', cityController.getAll);

// airport routes
router.post('/airport', airportController.createAirport);
router.get('/airports', airportController.getAirportByCity);


module.exports = router;