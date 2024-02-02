

function fetchData() {
    let cityName = document.getElementById('cityName').value;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=09a03050c5fe26cbc384ac55c76cfe62`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById('place').innerHTML = `<h3>${data.name}, ${data.sys.country}</h3>`;
            document.getElementById('temp').innerHTML = `<p>${data.main.temp} &deg;C </p>`;
            document.getElementById('skyies').innerHTML = `<img src="./CLoud.png" alt="A Single Cloud" height="60px" width="60px"><h5> Cloud coverage: ${data.clouds.all} %</h5>`;
            document.getElementById('minTemp').innerHTML = `Min Temp: ${data.main.temp_min} &deg;C`;
            document.getElementById('highTemp').innerHTML = `Max Temp: ${data.main.temp_max} &deg;C`;

            // Skjuller elementene før man skriver sted
            document.getElementById('skyies').style.display = 'block';
            document.getElementById('minTemp').style.display = 'block';
            document.getElementById('highTemp').style.display = 'block';
        })
    
}

document.getElementById('enterBtn').addEventListener('click', fetchData);

// Gjør at man kan bruke enter tasten på keyboard
document.getElementById('cityName').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        fetchData();
    }
});