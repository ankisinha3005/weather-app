const request=require('request')

const forecast = (longitude,latitute,callback) =>{
 const url='https://api.darksky.net/forecast/132f42797fa2810a1722a584ec6fe6f4/37.8267,-122.4233'
request({url:url,json:true},(error,response)=>{
    
if(error){
    callback('Unable to connect to server !',undefined)
}else if(response.body.error){
    callback('Unable to find the  location !',undefined)
}else{
    callback(undefined,{longitude:longitude,latitute:latitute})
}

})


}
forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })