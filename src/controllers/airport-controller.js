const { AirportService } = require('../services/index');

const airportService = new AirportService();

const createAirport = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Airport Created Successfully',
            error: {}
        });
    } catch (error) {
        console.log("Something went wrong in Airport controller", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not Able To Create Airport',
            error: error
        });
    }
}

const getAirportByCity = async (req, res) => {
    try {
        console.log(req.query);
        const airport = await airportService.getByCity(req.query.cityId);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Airport Fetched Successfully',
            error: {}
        }); 
    } catch (error) {
        console.log("Something went wrong in Airport controller", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not Able To fetch Airport',
            error: error
        });
    }
}

module.exports = {
    createAirport,
    getAirportByCity
}