const storage = new Storage();
storage.get()

const weather = new Weather(storage.city);
const ui = new UI();

function getWeather(){
    weather.getWeather()
    .then((weather)=>{
        console.log(weather)
        ui.displayWeather(weather)  
    })
}

getWeather()


const changeLocation = document.getElementById('w-change-btn')

changeLocation.addEventListener('click', (e)=>{
    let newCity = document.getElementById('city').value
    if (newCity !== ''){
        weather.changeCity(newCity)
        storage.set(newCity)
        getWeather()

        $('#locModal').modal('hide')
    } else {
        $('#locModal').modal('hide')
    }
})