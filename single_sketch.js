// Single-sketch example
var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
//var city = 'San Diego';
var units = '&units=metric';

var input;

function setup (){
  createCanvas (600, 400);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');

  //var url = api+city+'&appid=ca44a6aad9418c3af43cff3f34fa6819'+units;
  //loadJSON(url, gotData);
}

function gotData(data){
  weather = data;
  console.log(weather);
}

function weatherAsk(){
  var url = api+input.value()+'&appid=ca44a6aad9418c3af43cff3f34fa6819'+units;
  loadJSON(url, gotData);
}

function draw(){
  background(100);
  if(weather){
    ellipse(400, 200, weather.main.temp, weather.main.temp);
    ellipse(100, 200, weather.main.humidity, weather.main.humidity);
  }
}
