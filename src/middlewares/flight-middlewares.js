const { ServerErrorCode, ClientErrorCode } = require("../utils/error-codes");

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

const validateDeleteFlight = (req, res, next) => {
    const { flightId } = req.params;
    if (!flightId) {
        return res.status(ClientErrorCode.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'flightId is missing',
            error: 'Invalid request for delete flight'
        });
    }
    next();
}

module.exports = {
    validateCreateFlight,
    validateDeleteFlight
}