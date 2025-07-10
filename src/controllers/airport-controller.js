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
        const airport = await airportService.getAirport(req.query.cityId);
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

const update = async (req, res) => {
    try {
        const airport = await airportService.updateAirport(req.params.airportId, req.body);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Airport details updated successfully',
            error: {}
        });
    } catch (error) {
        console.log("Something went wrong in airport controller while updating airport details");
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}

const deleteAirport = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.airportId);
        return res.status(204).json({
            data: response,
            success: true,
            message: 'Airport Deleted Successfully',
            error: {}
        });
    } catch (error) {
        console.log("Something went wrong in airport controller while deleting airport details");
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}

module.exports = {
    createAirport,
    getAirportByCity,
    update,
    deleteAirport
}