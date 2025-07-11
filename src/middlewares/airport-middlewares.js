const { ClientErrorCode } = require("../utils/error-codes");

const validateCreateAirport = (req, res, next) => {
    if (
        !req.body.name ||
        !req.body.cityId
    ) {
        return res.status(ClientErrorCode.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for create airport',
            error: 'Missing fields for creating airport'
        });
    }

    next();
}

module.exports = {
    validateCreateAirport
}