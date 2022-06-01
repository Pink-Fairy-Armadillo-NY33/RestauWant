const fetch = require('node-fetch');

const restaurantController = {};

restaurantController.searchApi = (req, res, next) => {
  console.log('Entered the searchApi method within restaurantController');
  const arr = [];
  // getting parameters from GET request
  const params = req.query;
  for (const key in params){
    arr.push(`${key}=${params[key]}`);
  }

  const searchTerms = arr.join('&');
  const url = `https://api.yelp.com/v3/businesses/search?${searchTerms}`;
  console.log('url ', url);
  //Query the yelp API using a fetch request
  fetch(url, {
    headers: {
      'Authorization': 'Bearer tDSCrb4Pqxqnh_b7UQ_XTWjmuBww3FMpQSTkqTEkR67zcr2xAFSZl9Pa-WDNGCRQ-HB2CzuxtYgFjIYLuCt_QXGO1aLtCgawaCuyRJ_TTyQOI2srIAE0-mQUajmSYnYx'
    }
  })
    // Parse the returned data into a JS object
    .then((rawData) => rawData.json())
    .then((data) => {
      console.log('Received data back from the Yelp API');
      res.locals.yelpResults = [];
      //Iterate over the business property on the object and push the first 5 results into res.locals
      let i = 0;
      while(data.businesses[i]){
        res.locals.yelpResults.push(data.businesses[i]);
        i++;
      }
      return next();
    });  
};

module.exports = restaurantController;