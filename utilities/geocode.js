const request=require('request')

const getGeoCode =(address,callback) => {
 const geoUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoiYW5raXRzaW5oYTMwMDUiLCJhIjoiY2p1NHhweW4wMHppMjQ0dGFvMnZ0cmxvayJ9.zKunhgyPFqtT1jsHQGtR9A'
        
    request({url:geoUrl,json:true},(error,{body}) => { //Either response gets a value or the error
     if(error){
        callback('Unable to Connect the Server !',undefined)
     }else if (body.features.length===0){
        callback('No such location found',undefined)
     }else{
        callback(undefined,{
           latitude: body.features[0].center[1],
           longitude: body.features[0].center[0],
           location: body.features[0].place_name
       })
     }
   
    })
}

module.exports=getGeoCode