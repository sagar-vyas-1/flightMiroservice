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

module.exports = {
    create,
}