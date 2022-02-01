const app = {
    // event listeners for the buttons
    init: () => {
      document
        .getElementById('btnGet')
        .addEventListener('click', app.fetchWeather);
      document
        .getElementById('btnCurrent')
        .addEventListener('click', app.getLocation);
    },
    // sends request to the API
    fetchWeather: (ev) => {
      //use the values from latitude and longitude to fetch the weather
      let lat = document.getElementById('latitude').value;
      let lon = document.getElementById('longitude').value;
      let key = "285cbfb92b81ac13c5344b946dbf3505";
      let lang = 'en';
      let units = 'imperial';
      let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
      //fetch the weather
      fetch(url)
        .then((resp) => {
          if (!resp.ok) throw new Error(resp.statusText);
          return resp.json();
        })
        .then((data) => {
          app.showWeather(data);
        })
        .catch(console.err);
    },
    // gets user position from the DOM on their computer
    getLocation: (ev) => {
      let opts = {
        enableHighAccuracy: true,
        timeout: 1000 * 10, //10 seconds
        maximumAge: 1000 * 60 * 5, //5 minutes
      };
      navigator.geolocation.getCurrentPosition(app.positionSuccess, app.error, opts);
    },
    // if user position is found, enters the values in the search areas
    positionSuccess: (position) => {
      //got position
      document.getElementById('latitude').value =
        position.coords.latitude.toFixed(2);
      document.getElementById('longitude').value =
        position.coords.longitude.toFixed(2);
    },
    // error if it was not able to retrieve users current location
    error: (err) => {
      //geolocation failed
      console.error(err);
    },
    // shows the 5-day forecast with successful response from API given location
    showWeather: (resp) => {
        console.log(resp);
        let row = document.querySelector('.weather.row');
        //clear out the old weather and add the new
        // row.innerHTML = '';
        row.innerHTML = resp.daily
          // creates a cards with API response
          .map((day, idx) => {
            // gets a forecast for next five days
            if (idx <= 4) {
                // gets the date
                let dt = new Date(day.dt * 1000); //timestamp * 1000
                // create the weather cards
                return `<div class="col">
                    <div class="card">
                    <h5 class="card-title p-2">${dt.toDateString()}</h5>
                    <img
                        src="https://openweathermap.org/img/wn/${
                        day.weather[0].icon
                        }@4x.png"
                        class="card-img-top"
                        alt="${day.weather[0].description}"
                    />
                      <div class="card-body">
                        <h3 class="card-title">${day.weather[0].main}</h3>
                        <p class="card-text">High ${day.temp.max}&deg;F Low ${
                          day.temp.min
                          }&deg;F</p>
                        <p class="card-text">Humidity ${day.humidity}%</p>
                        <p class="card-text uvcolor">UV Index ${day.uvi}</p>
                        <p class="card-text">Precipitation ${day.pop * 100}%</p>
                        <p class="card-text">Wind ${day.wind_speed}m/s, ${
                          day.wind_deg
                          }&deg;</p>
                      </div>
                    </div>
                </div>`;
            }
          })
          .join(' ');
        // color codes the UV index levels
        resp.daily.map((day, idx) => {
            if (idx <= 4) {
                if(day.uvi <= 2){
                    $(".uvcolor").addClass("text-success")
                } else if (day.uvi <= 5) {
                    $(".uvcolor").addClass("text-warning")
                } else {
                    $(".uvcolor").addClass("text-danger")
                }
            }
        });
    },

};
  
// starts the app on page load
app.init();

// var init= function() {
//     document
//         .getElementById("btnGet")
//         .addEventListener("click", fetchWeather);
// };

// var fetchWeather = function() {
//     event.preventDefault();

//     // use the value of city to get lat and lon
//     var city = document.getElementById("city").value;
    
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=285cbfb92b81ac13c5344b946dbf3505")
//             .then(function(response) {
//                 if (!response.ok) {
//                     throw new Error(response.statusText);
//                 } else {
//                     response.json()
//                         .then(function() {
//                             getLat(data);
//                         })
//                 }
//             })
//             .catch(console.err);

//     var getLat = function(coord) {
//         console.log(coord.lat)
//     }

//     getLat();
    
//     use the values from lat and lon to fetch the weather
//     var lat = getLat();
//     var lon = ;
//     var key = "285cbfb92b81ac13c5344b946dbf3505";
//     var lang = "en";
//     var units = "imperial"
//     var url = "http://api.openweathermap.org/data/2.5/onecall?Lat=" + lat + "&Lon=" + lon + "&appid=" + key + "&units=" + units + "&lang=" + lang +""

//     // fetch the weather
//     fetch(url)
//         .then()
//         .then()
//         .catch(console.err)
// },
// showWeather: (resp) => {

// },
// };

// init();