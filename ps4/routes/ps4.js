const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const FETCHCONFIG = require('../config/fetchConfigs');

router.post('/',
    async (req, res) => {
        {
            const raw = await fetch(FETCHCONFIG.url + FETCHCONFIG.api_type + '?key=' + FETCHCONFIG.key + '&q=' + req.body.city,
                {method: FETCHCONFIG.method});
            const data = await raw.json();

            res.render('api',{title: 'Weather', city: data.location.name, temp_f: data.current.temp_f, isNotEmpty: true});
            console.log(`API data: ${JSON.stringify(data)}`);
        }
    });

//empty ps4 route so 404 error doesn't throw
router.get('/',(req, res) => {
    res.render('api',{title: 'Weather'});
});

//use GET to enter city directly in URL
router.get('/:city', async (req, res, next) => {
    {
        const raw = await fetch(FETCHCONFIG.url + FETCHCONFIG.api_type + '?key=' + FETCHCONFIG.key + '&q=' + req.params.city,
            {method: FETCHCONFIG.method});
        const data = await raw.json();

        res.render('api',{title: 'Weather', city: data.location.name, temp_f: data.current.temp_f, isNotEmpty: true});
        console.log(`API data: ${JSON.stringify(data)}`);
    }
})

module.exports = router;