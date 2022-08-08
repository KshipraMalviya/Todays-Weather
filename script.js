let weather={
    "apiKey": "d4348496011af70a1e1faafe7ca54794",
    fetchWeather: function(city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data)
    {
        const { name } =data;
        const { icon, description } =data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in "+name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".detail").innerText=description;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".humidity").innerHTML="Humidity : "+humidity+"%";
        document.querySelector(".wind").innerText="Wind Speed : "+speed+" km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?"+description+"')";
        i=1-i;
    },
    search: function(){
        this.fetchWeather(document.querySelector(".sbar").value);
    }
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".sbar").addEventListener("keydown",function(event){
    if(event.key=="Enter")
    {
        weather.search();
    }
});

weather.fetchWeather("Vrindavan");