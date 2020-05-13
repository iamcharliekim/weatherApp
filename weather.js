class Weather {
    constructor (city){
        this.apiKey = '3df5e3cb936985be70ed3a06b4df61b9';
        this.city = city;
    }
    
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`)
        
        const responseData = await response.json();
        
        return responseData;
    }
    
    changeLocation(city){
        this.city = city;
    }
    
}