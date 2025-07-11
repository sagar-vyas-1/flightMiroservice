const ClientErrorCode = Object.freeze({
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404
});

const ServerErrorCode = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501
});

const SuccessCode = Object.freeze({
    OK: 200,
    CREATED: 201
});

module.exports = {
    ClientErrorCode,
    ServerErrorCode,
    SuccessCode
}