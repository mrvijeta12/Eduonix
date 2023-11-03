function getWeatherData() {
    document.getElementById("weather-data").style.display = "block";
    document.getElementById("map").style.display = "block";
}

async function data() {
    let respone = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=197679b9416f4ac5a317dae02b8efcf8");
    let responseData = await respone.json();
    console.log(responseData)
    return responseData;
}

data().then((ObjectData) => {
    document.getElementById("iframe-latitude").innerText = ObjectData.latitude;
    document.getElementById("iframe-longitude").innerText = ObjectData.longitude;
    document.getElementById("ip-address").innerText = ObjectData.ip;
    document.getElementById("continent").innerText = ObjectData.continent_name;
    document.getElementById("location").innerText = ObjectData.country_name;
    document.getElementById("city").innerText = ObjectData.city;
    document.getElementById("latitude").innerText = ObjectData.latitude;
    document.getElementById("longitude").innerText = ObjectData.longitude;
    document.getElementById("time").innerText = ObjectData.time_zone.current_time;
    document.getElementById("zipcode").innerText = ObjectData.zipcode;
    document.getElementById("state").innerText = ObjectData.state_prov;

}).catch((error) => {
    console.log(error);
})
