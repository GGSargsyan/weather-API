// Single-sketch example
var weather;

function setup (){
  createCanvas (600, 400);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?id=524901&appid=ca44a6aad9418c3af43cff3f34fa6819', gotData);
}

function gotData(data){
  weather = data;
}


function draw(){
  background(100);
  if(weather){
    ellipse(400, 200, weather.main.temp, weather.main.temp);
    ellipse(100, 200, weather.main.humidity, weather.main.humidity);
  }
}
