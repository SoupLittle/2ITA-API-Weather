var myCity = "Oslo"
var myCountry = "Norway"
var myKey = "09a03050c5fe26cbc384ac55c76cfe62"
var myAPI = 'https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=${myKey}'

fetch(myAPI)
.then (Response => Response.json())
.then( data => {
    console.log("Temperature: ", data.main.temp);
    document.getElementById('city').innerHTML = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').innerHTML = `${Math.round(data.main.temp)} &#176;`;
    })