const request=require('request')

const forecast = (longitude,latitute,callback) =>{
 const url='https://api.darksky.net/forecast/132f42797fa2810a1722a584ec6fe6f4/'+latitute +','+longitude
request({url:url,json:true},(error,{body})=>{
    
if(error){
    callback('Unable to connect to server !',undefined)
}else if(body.error){
    callback('Unable to find the  location !',undefined)
}else{
    callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
}

})


}


module.exports=forecast  