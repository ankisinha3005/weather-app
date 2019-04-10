const express=require('express')
const path=require('path')
const hbs=require('hbs')
const geocode=require('./utilities/geocode.js')
const forecast=require('./utilities/forecast.js')

const app=express();

const publicDirectory=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',viewsPath)
app.use(express.static(publicDirectory))
hbs.registerPartials(partialsPath)
app.get('',(req,res) => {
    res.render('index',{
      title:'My title',
      name:'Ankit Sinha'
    })

})

app.get('/help',(req,res)=>{
      res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Ankit Sinha'
    })
})

app.get('/about',(req,res)=>{
      res.render('about', {
        title: 'About Me',
        name: 'Ankit Sinha'
    })
})

app.get('/weather',(req,res)=>{
  if(!req.query.address){
     return res.send({error:'You must provide an address'})
  }
  geocode(req.query.address, (error, {latitude,longitude,location}) => {
    if(error){
        return res.send({error})
    }

    forecast(longitude, latitude, (error, forecastData) => {
        if(error){
           return  res.send({error})
        }
        res.send({
                location:location,
                forecast:forecastData,
                address:req.query.address,
            })
      })

})
  
  
})

app.get('/help/*', (req, res) => {
  res.render('404', {
      title: '404',
      name: 'Ankit Sinha',
      errorMessage: 'Help article not found.'
  })
})

app.get('*',(req,res) =>{
  res.render('404',{
    title:'404',
    name:'Ankit Sinha',
    errorMessage:'Page not found'
  })
})










app.listen(3000,()=>{
    console.log("server running on port 3000")
})