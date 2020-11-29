const helper = require('./helper');
require('dotenv').config();
const mongoose = require('mongoose');
const Record = require('../models/Record');

it(`POST@/api should return code: 0}`,
    () => {
        return helper.request({
            "startDate": "2017-02-02",
            "endDate": "2018-02-02",
            "minCount": 100,
            "maxCount": 300
        })
            .then(data => {
                expect(data.code).toEqual(0)
            })
    })

it(`POST@/api should return code: -1}`,
    () => {
        return helper.request({
            "startDate": "201702-02",
            "endDate": "2018-02-02",
            "minCount": 100,
            "maxCount": 300
        })
            .then(data => {
                expect(data.code).toEqual(-1)
            })
    })

it(`POST@/api should return code: -1, msg: "startDate must be in ISO 8601 date format"}`,
    () => {
        return helper.request({
            "startDate": "201702-02",
            "endDate": "2018-02-02",
            "minCount": 100,
            "maxCount": 300
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "startDate must be in ISO 8601 date format"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "endDate must be in ISO 8601 date format"}`,
    () => {
        return helper.request({
            "startDate": "2017-02-02",
            "endDate": "201802-02",
            "minCount": 100,
            "maxCount": 300
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "endDate must be in ISO 8601 date format"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "endDate must be greater than ref:startDate"}`,
    () => {
        return helper.request({
            "startDate": "2017-02-02",
            "endDate": "2015-02-02",
            "minCount": 100,
            "maxCount": 300
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "endDate must be greater than ref:startDate"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "startDate is required"}`,
    () => {
        return helper.request({
            "endDate": "2015-02-02",
            "minCount": 100,
            "maxCount": 300
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "startDate is required"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "endDate is required"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "minCount": 100,
            "maxCount": 5000
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "endDate is required"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "minCount must be a number"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "endDate": "2017-02-02",
            "minCount": "100L",
            "maxCount": 5000
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "minCount must be a number"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "maxCount must be a number"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "endDate": "2017-02-02",
            "minCount": 100,
            "maxCount": "5000L"
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "maxCount must be a number"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "maxCount must be greater than ref:minCount"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "endDate": "2017-02-02",
            "minCount": 100,
            "maxCount": 50
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "maxCount must be greater than ref:minCount"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "minCount is required"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "endDate": "2017-02-02",
            "maxCount": 50
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "minCount is required"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "maxCount is required"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "endDate": "2017-02-02",
            "minCount": 50
        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "maxCount is required"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "minCount must be a number"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "endDate": "2017-02-02",
            "minCount": "50",
            "maxCount": 50

        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "minCount must be a number"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "maxCount must be a number"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "endDate": "2017-02-02",
            "minCount": 50,
            "maxCount": "50"

        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "maxCount must be a number"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "minCount must be a positive number"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "endDate": "2017-02-02",
            "minCount": -50,
            "maxCount": "50"

        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "minCount must be a positive number"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "minCount must be a positive number"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "endDate": "2017-02-02",
            "minCount": -50,
            "maxCount": "50"

        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "minCount must be a positive number"
                })
            })
    })

it(`POST@/api should return code: -1, msg: "maxCount must be greater than ref:minCount"}`,
    () => {
        return helper.request({
            "startDate": "2016-02-02",
            "endDate": "2017-02-02",
            "minCount": 50,
            "maxCount": -50

        })
            .then(data => {
                expect(data).toEqual({
                    "code": -1,
                    "msg": "maxCount must be greater than ref:minCount"
                })
            })
    })

it(`POST@/api should return {
                    "code": 0,
                    "msg": "Success",
                    "records": [
                        {
                            "key": "TAKwGc6Jr4i8Z487",
                            "createdAt": "2017-01-28T01:22:14.398Z",
                            "totalCount": 310
                        },
                        {
                            "key": "TAKwGc6Jr4i8Z487",
                            "createdAt": "2017-01-28T01:22:14.398Z",
                            "totalCount": 170
                        }
                    ]
                }}`,
    () => {
        return helper.request({
            "startDate": "2017-01-02",
            "endDate": "2018-01-02",
            "minCount": 130,
            "maxCount": 500
        })
            .then(data => {
                expect(data).toEqual({
                    "code": 0,
                    "msg": "Success",
                    "records": [
                        {
                            "key": "TAKwGc6Jr4i8Z487",
                            "createdAt": "2017-01-28T01:22:14.398Z",
                            "totalCount": 310
                        },
                        {
                            "key": "TAKwGc6Jr4i8Z487",
                            "createdAt": "2017-01-28T01:22:14.398Z",
                            "totalCount": 170
                        }
                    ]
                })
            })
    })

it(`Should failed when env not test`, () => {
    expect(process.env.NODE_ENV).toEqual('test');
});

it(`Should failed when property not true`, async () => {
    const result = await Record.findOne().exec();
    expect(result.key).toBeTruthy();
    expect(result.createdAt).toBeTruthy();
    expect(result.counts).toBeTruthy();
});

beforeAll(async () => {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
});

afterAll(async (done) => {
    await mongoose.disconnect(done, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
});