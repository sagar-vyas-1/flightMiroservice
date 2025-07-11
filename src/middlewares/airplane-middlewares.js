const { ClientErrorCode } = require("../utils/error-codes");

const validateCreateAirplane = (req, res, next) => {

    if ( !req.body.airplaneName || !req.body.modelNumber || !req.body.capacity) {
        return res.status(ClientErrorCode.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for creating airplane',
            error: 'Missing fields for creating airplane'
        });
    }

    next();
}

module.exports = {
    validateCreateAirplane
}