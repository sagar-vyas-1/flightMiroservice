const { ClientErrorCode } = require("../utils/error-codes")

const validateCreateCity = (req, res, next) => {
    if (!req.body) {
        return res.status(ClientErrorCode.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for create city',
            error: 'Missing name field'
        });
    }
    next();
}

module.exports = {
    validateCreateCity
}