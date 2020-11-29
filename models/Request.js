const Joi = require('joi');

// Create schema for request body validation
const Request = Joi.object().keys({
    startDate: Joi.date().iso().required(),
    endDate: Joi.date().iso().greater(Joi.ref('startDate')).required(),
    minCount: Joi.number().required().positive().prefs({ convert: false }),
    maxCount: Joi.number().greater(Joi.ref('minCount')).required().positive().prefs({ convert: false })
});    

module.exports = Request;