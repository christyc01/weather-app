// get key from accuweather (BRANDING REQUIREMENTS: You are required to display proper attribution when using AccuWeather APIs. Please include the AccuWeather logo, linked to our website (http://www.accuweather.com) in clear view on your app or product.)), make var
// async function getWeather - take in id
//   var = base = first part of url (current conditions)
//   var query = id & api key
//   await var response - fetch base + query combined
//   await var data - change to json
//   return data (1st element of array)

// async function getCity - take in city
//   var base - first part of url (cities/search)
//   var query = api key & city
//   await var response - fetch base + query combined
//   await var data- change to json
//   return 1st element of array data