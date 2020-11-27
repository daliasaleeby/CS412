const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const configure = require('../configs/openWeatherMapAPI');
const redis = require('redis');
const cl = redis.createClient();

/* GET users listing. */
router.route('/weather').post(async (req, res) => {
  let dogResult = await fetch(configure.dog);
  let dog = await dogResult.json();
  if(cl.exists(req.body.city)){//if data exists in cache
    let weather = cl.get(req.body.city);//get data from cache
    res.render('weather',{cached:'cached',title:'Today in '+weather.name+':',weather: weather,dog:dog[0]});

  }else{
    let weatherResult = await fetch(configure.url+'?q='+req.body.city+'&units=metric&appid='+configure.key);
    let weather = await weatherResult.json();
    cl.set(weather.name, 15,weather);
    res.render('weather',{cached:'not cached',title:'Today in '+weather.name+':',weather: weather,dog:dog[0]});
  }

});

module.exports = router;
