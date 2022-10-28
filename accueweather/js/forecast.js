var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=3acc923569974a5525ca6628faa9b6e0"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

// 현재 날씨의 모든 정보 얻어오기
getCurrentWeather = (city) => {
  var dataObj;
  var openWeatherAPI = url;

  $.ajax({
    type: "GET",                // 서버에 get 방식으로 요청을 함 (주소에 쿼리붙어있으면 get방식)
    url:  openWeatherAPI += city,
    dataType: "json",           // 응답시 받는 data를 json타입으로 받는다
    async:  false,              // 비 동기를 하지 않겠다.(false로 하겠다.)(결과 데이터를 리턴시키기 위함)
    // async(비동기)는 순서에 상관없이 빠르게 작업함 (적게 걸리는 작업은 먼저 끝낼 수 있음)
    // 반대로는 sync(동기)가 있는데 동기는 순차적으로 작업함 (다음 작업을 하려면 대기필요)
    success:  (data) => {                       // API call 성공 시
      dataObj = data
    },
    error:  (requset, status, error) => {       // API call 실패 시
      console.log(requset, status, error)
    },
  });
  // 비동기로 할 경우 작업이 끝나기 전에 없는 데이터를 리턴하기 때문에 비동기 false
  return dataObj;
};


// 지역 별 현재 온도 얻어오기
getCurrentTemp = (city) => {
  var temp = {};
  var openWeatherAPI = url;

  $.ajax({
    type: "GET",
    url:  openWeatherAPI += city,
    dataType: "json",
    async:  false,
    success:  (data) => {                       // API call 성공 시
      temp.celsius = data.main.temp.toFixed(0)  // 온도
      temp.icon    = data.weather[0].icon       // 날씨 icon
    },
    error:  (requset, status, error) => {       // API call 실패 시
      console.log(requset, status, error)
    },
  });
  console.log(temp)
  return temp;
};

