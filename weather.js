const weatherapi={
    key:"c3c33f5c928a7d83766e13a8b760c2dd" ,
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}

const searchinputbox = document.getElementById('input');

 searchinputbox.addEventListener('keypress',(event) =>{
     if(event.keycode==13){
        
     
     console.log(searchinputbox.value);
    }

     getreport(searchinputbox.value) 
     document.querySelector('.weather-body').style.display="block";
 });


function getreport(city){
    fetch(`${weatherapi.baseUrl}q=${city}&appid=${weatherapi.key}&units=metric` )
    .then(weather => {
        return weather.json();

    }) .then(showweatherreport);
}
function showweatherreport(weather){
     console.log(weather);

     let city=document.getElementById('city');
     city.innerText= `${weather.name}`


     let temp=document.getElementById('temp');
     temp.innerHTML=`${weather.main.temp}&deg;C`

     let minmax=document.getElementById('min-max')
      minmax.innerHTML=`${weather.main.temp_min}&deg;C(min)/${weather.main.temp_max}&deg;C(max)`
         
     let wtype=document.getElementById('wtype');
     wtype.innerHTML=`${weather.weather[0].main}`

      if(wtype.textContent=='Clouds') {
          document.body.style.backgroundImage="url('images/cloudy.jpg')";

      }
else  if(wtype.textContent=='Rain') {
    document.body.style.backgroundImage="url('images/rain.jpg')";
}
else  if(wtype.textContent=='Smoke') {
    document.body.style.backgroundImage="url('images/Haze.jpg')";
}
else  if(wtype.textContent=='Haze') {
    document.body.style.backgroundImage="url('images/Haze.jpg')";
}
else  if(wtype.textContent=='Clear') {
    document.body.style.backgroundImage="url('images/clear.jpg')";
}

}



 



