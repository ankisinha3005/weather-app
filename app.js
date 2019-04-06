const geocode=require('./utilities/geocode.js')
const forecast=require('./utilities/forecast.js')

const address=process.argv[2]
if(!address){
    console.log('Please Enter an address')
}   
else{
    geocode(address, (error, {latitude,longitude,location}) => {
        if(error){
            return console.log(error)
        }
    
        forecast(longitude, latitude, (error, forecastData) => {
            if(error){
               return  console.log(error)
            }
            console.log(location)
            console.log('Data', forecastData)
          })
    
    })
    
}    

 




 




































































































































































































































































































































































































