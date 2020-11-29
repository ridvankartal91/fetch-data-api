const express = require('express');
const Record = require('../models/Record');
const Request = require('../models/Request');
const router = express.Router();
const validator = require('../middlewares/validator');

// Create resource and post method for api
router.post('/', validator(Request, 'body'), async (req, res, next) => {
    console.info('Request Body: ', req.body);

    // Create pipeline for aggreagating record data
    const pipeline = [
        {
            $project: {
                _id: 0,
                key: 1,
                createdAt: 1,
                totalCount: { $sum: '$counts' }
            },
        },
        {
            $match: {
                createdAt: {
                    $gte: new Date(req.body.startDate),
                    $lt: new Date(req.body.endDate)
                },
                totalCount: {
                    $gte: req.body.minCount,
                    $lt: req.body.maxCount
                }
            }
        }
    ];

    // Aggregate data according to pipeline and return result as api response
    await Record

        .aggregate(pipeline)

        .then(resp => {
            console.info('Response Body: ', resp);

            res.status(200)

                .json({
                    code: 0,
                    msg: 'Success',
                    records: resp
                });
        })

        .catch(err => {
            console.error(err);
            next(err);
        });

})

module.exports = router;