const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

const airplane = async (req, res) => {
    try {
        const airplane = await airplaneService.createAirplane(req.body);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: 'Airplane added successfully',
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

// fetch all airplanes
const getAirplanes = async (req, res) => {
    try {
        const response = await airplaneService.getAllAirplane();
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Airplanes fetched successfully',
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Internal Server Error',
            error: error
        })
    }
}

const getAirplane = async (req, res) => {
    try {
        const airplane = await airplaneService.getAirplane(req.params.id);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: 'Airplane details fetched successfully',
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

const deleteAirplane = async (req, res) => {
    try {
        const response = await airplaneService.deleteAirplane(req.params.airplaneId);
        return res.status(204).json({
            data: response,
            success: true,
            message: 'Airplane details deleted successfully',
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
module.exports = {
    airplane,
    getAirplanes,
    getAirplane,
    deleteAirplane
}