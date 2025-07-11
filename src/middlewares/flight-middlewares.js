const { ServerErrorCode } = require("../utils/error-codes");

const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ) {
        return res.status(ServerErrorCode.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight body',
            error: 'Missing fields for create flight'
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}