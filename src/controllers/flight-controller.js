const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
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

module.exports = {
    create,
    getAll,
    update
}