const request=require('request')

const url='https://api.darksky.net/forecast/132f42797fa2810a1722a584ec6fe6f4/37.8267,-122.4233'

request({url:url,json:true},(error,response) => {
   if(error){
 console.log('There are some error')
 }
   else if(response.body.error) {
     console.log('No response received')
 } else{
  console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
 }

 })
 // to get the co-ordinate of the system
 const geoUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5raXRzaW5oYTMwMDUiLCJhIjoiY2p1NHhweW4wMHppMjQ0dGFvMnZ0cmxvayJ9.zKunhgyPFqtT1jsHQGtR9A'
 








































































































































































































































































































































































































