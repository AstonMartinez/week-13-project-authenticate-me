const { validationResult } = require('express-validator');

const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = {};
        validationErrors.array().forEach(error => errors[error.path] = error.msg);

        const err = new Error();
        err.errors = errors;
        err.status = 400;
        err.message = "Bad Request";
        _res.status(400)
        return _res.json({ message: "Bad Request", errors: errors})
        next(err);
    }
    next();
}

module.exports = {
    handleValidationErrors
};
