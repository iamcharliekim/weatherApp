const storage = new Storage();
let weatherLocation;

if (storage.getStorage() === null){
    weatherLocation = []
    storage.setStorage()
} else {
    weatherLocation = storage.getStorage();
    storage.setStorage();
}

// Init Weather Object
const weather = new Weather(weatherLocation[0]);
const ui = new UI();


function getWeather(){
    weather.getWeather()
    .then(weather =>{
        ui.paint(weather)
        console.log(weather)
    })
    .catch(error => console.log(error))
}

getWeather();

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    // get new City Value
    const city = document.getElementById('city').value
    // Change Location
    weather.changeLocation(city)
    weatherLocation = []
    weatherLocation.push(city)
    storage.setStorage()
    // Get/display weather
    getWeather()
    // Close modal
    $('#locModal').modal('hide')
})