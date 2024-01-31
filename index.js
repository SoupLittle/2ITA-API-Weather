let myCity = "Oslo"
let myCountry = "Norway"
let myKey = "09a03050c5fe26cbc384ac55c76cfe62"
let myAPI = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=${myKey}`

fetch(myAPI)
.then (Response => Response.json())
.then( data => {
    console.log(data)
    console.log(data.main.temp)
    })