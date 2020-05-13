class UI {
    displayWeather(city){
        document.getElementById('w-location').textContent = `${city.name}, ${city.sys.country}`
        
        document.getElementById('w-desc').textContent = city.weather[0].description    
        
        document.getElementById('w-string').textContent = `${city.main.temp}˚F`
        
        document.getElementById('w-icon').setAttribute('src',`http://openweathermap.org/img/w/${city.weather[0].icon}.png`) 
            
        document.getElementById('w-humidity').textContent = `Humidity: ${city.main.humidity}%`
        
        document.getElementById('w-dewpoint').textContent = 
        `High: ${city.main.temp_max}˚F`
            
        document.getElementById('w-feels-like').textContent = 
        `Low: ${city.main.temp_min}˚F`
        document.getElementById('w-wind').textContent = 
        `Winds: ${city.wind.speed}MPH @ ${city.wind.deg}˚` 
    }
    
}