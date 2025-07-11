const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightData = {
            flightNumber,
            airplaneId,
            departureAirportId,
            arrivalAirportId,
            departureTime,
            arrivalTime,
            price
        } = req.body;

        const flight = await flightService.createFlight(flightData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Flight details created successfully',
            error: {}
        });
    } catch (error) {
        console.log("Something went wrong while creating flight");
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightService.getFlights(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Flights details fetch successfully',
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await flightService.updateFlight(req.params.flightId, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Flights details updated successfully',
            error: {},
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Internal Server Error',
            error: error
        });
    }
}

const deleteFlight = async (req, res) => {
    try {
        const response = await flightService.deleteFlight(req.params.flightId);
        return res.status(204).json({   // code 204 for delete message with no return content
            data: response,
            success: true,
            message: 'Flight deleted successfully',
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Internal Server Error',
            error: error
        });
    }
}

module.exports = {
    create,
    getAll,
    update,
    deleteFlight
}