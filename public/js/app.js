const weatherForm=document.querySelector('form')
const searchInput=document.querySelector('input')
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location=searchInput.value
    const messageOne=document.querySelector('#message1')
    const messageTwo=document.querySelector('#message2')
    messageOne.textContent='Loading.....'
    messageTwo.textContent='' 

    fetch('http://localhost:3000/weather?address='+location).then((Response)=>{
    Response.json().then((data)=>{
        if(data.error){
            messageOne.textContent=data.error
        }else{
            messageOne.textContent=data.location
            messageTwo.textContent=data.forecast
          
        }
    })
})





})




