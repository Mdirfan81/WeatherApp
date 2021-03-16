console.log("The Testing ");

Search = () => {
  let cityName = document.getElementById("cityName").value;
  document.getElementById("cityOut").innerHTML = cityName.toUpperCase();

  // let error = document.getElementById('Error');
  // console.log(cityName);
  // if(cityName.length < 1 ) {
  //     error.classList.add('invalid-feedback')
  //     error.innerHTML =  ' Please Enter a City.'

  // }
  // else {
  //     error.classList.add('valid-feedback')
  //     error.innerHTML =  ' Looks Good!.'
  // }
  getWeather(cityName);
};

getWeather = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1027bc06f9bab8b873531fc2ccbb9f2d";

  fetch(`${URL}?q=${city}&appid=${API_KEY}`)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);

      if (data.cod == 200) {
        let resultScreen = document.getElementById("resultScreen");
        resultScreen.classList.remove("visually-hidden");
        let cloud = data.weather[0].description;
        let temp = data.main.temp;
        let max = data.main.temp_max;
        let min = data.main.temp_min;

        populaData(cloud, temp, max, min);
      }
      else{
        let resultScreen = document.getElementById("resultScreen");
        resultScreen.classList.add("visually-hidden");
        let err = document.querySelector('#err');
        err.innerHTML = "404"
        err.classList.remove("visually-hidden");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

populaData = (cloud, temp, max, min) => {
  document.getElementById("cloud").innerHTML = cloud.toUpperCase();
  document.getElementById("temp").innerHTML = temp;
  document.getElementById("min_temp").innerHTML = max;
  document.getElementById("max_temp").innerHTML = min;
};
