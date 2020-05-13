class Weather {
    constructor(city){
        this.key = '3df5e3cb936985be70ed3a06b4df61b9'
        this.city = city;
    }
    
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&units=imperial`)
        
        const responseData = await response.json()
        
        return responseData
    }
    
    changeCity(city){
        this.city = city
    }
    
}