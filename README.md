# Fetching Data API

## Description
API is used for fetching data from collection in DB.



#### Add .env Variables
```
PORT=YOUR_APP_PORT_NO
DB_URL=YOUR_MONGODB_DATABASE__URL
```

#### Install Dependencies
```
npm install
```

#### Install CLI Packages
```
npm install pm2@latest -g
```
```
npm install jest --global
```
#### Run Test
```
npm run test
```

#### Run App
```
npm run start
```

#### Stop App
```
npm run stop
```

#### See Logs
```
npm run log
```

## REST API

#### Endpoint
```
POST: localhost/api 
```

#### Success

Request
```javascript
{
    "startDate": "2017-01-26",
    "endDate": "2018-02-02",
    "minCount": 2500,
    "maxCount": 3000
}
```
Response
 ```javascript
 {
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "8oDJX4FosoHgkUUz",
            "createdAt": "2017-02-07T13:23:38.320Z",
            "totalCount": 2800
        },
        {
            "key": "jy9J2HJL7B5v0xsV",
            "createdAt": "2017-02-08T19:02:14.943Z",
            "totalCount": 2700
        }
    ]
}
```

#### Fail

Request
```javascript
{
    "startDate": "2017-01-26",
    "endDate": "2018-02-02",
    "minCount": "2500",
    "maxCount": 3000
}
```

Response
```javascript
{
    "code": -1,
    "msg": "minCount must be a number"
}
```
