var done = function(data){
    var temp = data.query.results.channel.item.condition.temp;
    var text = data.query.results.channel.item.condition.text;
    var date = data.query.results.channel.item.condition.date;
    document.getElementById("date").innerHTML=date;
    document.getElementById("desc").innerHTML=text;
    document.getElementById("temp").innerHTML=temp+"&deg: C";
};

function getweather() {
    const apiKey = 'b819e64251633b78d3925158881882f3';
    const city = document.getElementById('city').value;
    const currentWeather
}