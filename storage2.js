class Storage {
    constructor(){
        this.city;
        this.defaultCity = 'Miami'
    }
    
    set(city){
        localStorage.setItem('weatherStorage', city)
    }
    
    get(){
        if (localStorage.getItem('weatherStorage') === null){
            this.city = this.defaultCity 
        } else {
            this.city = localStorage.getItem('weatherStorage')
        }
    }
}