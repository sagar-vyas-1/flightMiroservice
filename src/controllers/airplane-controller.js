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

module.exports = {
    airplane,
}