const express = require('express');
const { cityController, airportController, airplaneController, flightController } = require('../../controllers/index');

const router = express.Router();

// city routes
router.post('/city', cityController.create);
router.get('/city/:id', cityController.getCity);
router.get('/cities', cityController.getAll);

// airport routes
router.post('/airport', airportController.createAirport);
router.get('/airports', airportController.getAirportByCity); // by cityId in query
router.patch('/airports/:airportId', airportController.update);

// airplane routes
router.post('/airplane', airplaneController.airplane);
router.get('/airplanes', airplaneController.getAirplanes);
router.get('/airplane/:id', airplaneController.getAirplane);

// flight routes
router.post('/flights', flightController.create);
router.get('/flights', flightController.getAll);

module.exports = router;