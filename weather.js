const apikey ="7916332d81bf3fa69e1fbdbfc5f4d9cb";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button")
const weatherimages = document.querySelector(".weather-icon")

async function checkweather(city){

    const response = await fetch(apiurl+ city +  `&appid=${apikey}`)
    if(response.status == 404){
        document.querySelector(".error-msg").style.display ="block"
        document.querySelector(".weather").style.display = "none";
}
else{
    var data = await response.json()


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

if(data.weather[0].main == "Clouds"){
    weatherimages.src="images/clouds.png"
}
else if(data.weather[0].main == "Clear"){
    weatherimages.src="images/clear.png"
}
else if(data.weather[0].main == "Drizzle"){
    weatherimages.src="images/drizzle.png"
}

else if(data.weather[0].main == "Mist"){

    weatherimages.src="images/mist.png"
}
else if(data.weather[0].main == "Rain"){

    weatherimages.src="images/rain.png"
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error-msg").style.display ="none"

} 
}
    

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value) 
})
