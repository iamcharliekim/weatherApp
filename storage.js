class Storage {
    getStorage(){
        return JSON.parse(localStorage.getItem('weatherLocation'))
    }
    
    setStorage(){
        localStorage.setItem('weatherLocation', JSON.stringify(weatherLocation))
    }
    
}