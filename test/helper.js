const axios = require('axios');

const helper = {

    request: (body) =>

        axios({
            method: 'post',
            url: 'http://localhost/api',
            data: body
        })

            .then(resp => resp.data)

            .catch(err => err.response.data),

}

module.exports = helper;