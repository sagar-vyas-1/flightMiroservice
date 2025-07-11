const express = require('express');
const { cityController, airportController, airplaneController, flightController } = require('../../controllers/index');
const { flightMiddleware, cityMiddleware, airportMiddleware, airplaneMiddleware } = require('../../middlewares/index');
const router = express.Router();

// city routes
router.post('/cities', cityMiddleware.validateCreateCity, cityController.create);
router.get('/cities/:cityId', cityController.getCity);
router.get('/cities', cityController.getAll);
router.delete('/cities/:cityId', cityController.deleteCity);

// airport routes
router.post('/airports', airportMiddleware.validateCreateAirport, airportController.createAirport);
router.get('/airports', airportController.getAirportByCity); // by cityId in query
router.patch('/airports/:airportId', airportController.update);
router.delete('/airports/:airportId', airportController.deleteAirport);

// airplane routes
router.post('/airplanes', airplaneMiddleware.validateCreateAirplane, airplaneController.airplane);
router.get('/airplanes', airplaneController.getAirplanes);
router.get('/airplanes/:airplaneId', airplaneController.getAirplane);
router.delete('/airplans/:airplaneId', airplaneController.deleteAirplane);

// flight routes
router.post('/flights', flightMiddleware.validateCreateFlight, flightController.create);
router.get('/flights', flightController.getAll); // has filter of arrivalAirportId, departureAirportId and maxPrice
router.patch('/flights/:flightId', flightController.update);
router.delete('/flights/:flightId', flightMiddleware.validateDeleteFlight, flightController.deleteFlight);

module.exports = router;