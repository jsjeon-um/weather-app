let weather = {
    "apiKey" : "a15d07cc9f7bf96096607860cd50a3ef",
    
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
            + "&units=imperial&appid=" 
            + this.apiKey
        ).then((response) => response.json()).then((data) => console.log(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, }
    }
};