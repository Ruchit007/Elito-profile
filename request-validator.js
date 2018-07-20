const validator = require('isvalid');

const validateRequest = (schema, errorCallback) => {
    return (request, response,  next) =>{
        validator((request.body || request.params),
        schema,
        (err) => {
            if (!err) {
                next();
            } else {
                if (errorCallback !== undefined) {
                    errorCallback(request, response);
                }
                response.send({error: (err && err.message && err.message.message) || 'something went wrong'});
            }
        }
    );
    };
};

module.exports = validateRequest;