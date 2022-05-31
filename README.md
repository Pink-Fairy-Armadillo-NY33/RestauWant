# RestauWant

# The Problem

You want to find a good restaurant in your area, but not waste your time and or your money.

# The Solution 
Restauwant allows you to query restaurants based on food preferences and locations and returns fun information (reviews and comments) about restaurants near you, so you can pick the best one for you.

test upload dev


User info we want to capture
	-Profile picture
	-List of past restaurants/reservations
	-Users comments and reviews
	-Name
	-Location

User Schema:
{
    name: {type: String, required: true},
    Pfp : {type: String, required: true},
    pastResturants: [{type: String}],
    location: {
        lat: type: Number
        long: type: Number,
    comments: [
        {
            user: {type: String}
            comment: {type: String}
            resturant_name: {type: String} 
        }
    ]
    
}
Restaurant Example Data:

{
    name: "Molinari Delicatessen",
    rating: 4.5,
    review_count: 910,
    price: "$$",
    coordinates: {
        latitude: 37.7983818054199,
        longitude: -122.407821655273
    }
    categories: [
        {
            alias: 'delis',
            title: 'Delis'
        }
    ]
}

Restaurant Schema: (modeled off of the data we anticipate receiving from the Yelp API)

{
    name: {type: String, required: true}
    rating: {type: Number, required: true}
    review_count: {type: Number, required: true}
    price: {type: String, required: true}
    coordinates: {
        latitude: {type: Number, required: true}
        longitude: {type: Number, required: true}
    }
    categories: [
        {
            alias: {type: String, required: true}
            title: {type: String, required: true}
        }
    ]
}

Redux Store:

{
  username: 'Pink Fairy Armadillo',
    // Buenos Aires
  homeLocation: coordinates: {
    latitude: '34.6037',
    longitute: '58.3816'
  },
  // Defaults to homeLocation
  searchLocation: coordinates: {
      latitute: '',
      longitute: ''
  }
  restaurantsToBeServed: [],
  cuisinePreference: '',
  // loggedIn: 'true'
 }


Landing page:



MainContainer (cuisine/location toggle OR search bar)      ---          Head
               |                    
    
        DisplayContainer
    /               |             \
    Search      DisplayContainer    Filter
(mapstatetoProps)     
                    |
            Restaurant  
            (mapStatetoProps)


             
