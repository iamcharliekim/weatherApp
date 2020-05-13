class UI {
    constructor(){
        this.location = document.getElementById('w-location');     
        this.desc = document.getElementById('w-desc');              
        this.temp = document.getElementById('w-string');        
        this.icon = document.getElementById('w-icon');              
        this.humidity = document.getElementById('w-humidity');     
        this.tempMax= document.getElementById('w-feels-like');   
        this.tempLow = document.getElementById('w-dewpoint');      
        this.wind = document.getElementById('w-wind');            
    }
    
    paint(weather) {
        // location
        this.location.textContent = `${weather.name}, ${weather.sys.country}`
        // description
        this.desc.textContent = weather.weather[0].description
        // temp 
        this.temp.textContent = `${weather.main.temp.toFixed(1)}˚F (${((weather.main.temp - -32)* (5/9)).toFixed(1)}˚C)   ` ;
        // icon
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
        // humidity
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`
        // tempMax
        this.tempMax.textContent = `High: ${weather.main.temp_max.toFixed(1)}˚F (${((weather.main.temp_max - -32)* (5/9)).toFixed(1)}˚C)`
        // tempLow
        this.tempLow.textContent = `Low: ${weather.main.temp_min.toFixed(1)}˚F (${((weather.main.temp_min - -32)* (5/9)).toFixed(1)}˚C)`
        // wind
        this.wind.textContent = `Wind: ${weather.wind.deg}˚, ${weather.wind.speed}mph`
    }
    
}
