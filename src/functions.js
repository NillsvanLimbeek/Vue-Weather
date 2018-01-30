//Set Icons
export class WeatherIcons {
    weatherIcons(input) {
        switch(input) {
            case "chanceflurries":
            case "chancesleet":
            case "flurries":
            case "sleet":
                return "flurries";
                break;
            case "chancerain":
            case "rain":
                return "rain";
                break;
            case "chancesnow":
            case "snow":
                return "snow";
                break;
            case "chancetstorms":
            case "tstorms":
            case "unknown":
                return "thunderstorms";
                break;
            case "clear":
            case "hazy":
            case "sunny":
                return "clear";
                break;
            case "cloudy":
            case "overcast":
                return "cloudy"
                break;
            case "fog":
                return "fog";
                break;
            case "mostlycloudy":
            case "partlysunny":
                return "mostly_cloudy";
                break;
            case "mostlysunny":
            case "partlycloudy":
                return "mostly_sunny";
                break;
        };
    }
}

//Set Forecast
export class Forecast {
    setConditions(day, data, num) {
        day.day = data.weather.forecast.simpleforecast.forecastday[num].date.weekday_short;
        day.temp_low = data.weather.forecast.simpleforecast.forecastday[num].high.celsius; 
        day.temp_high = data.weather.forecast.simpleforecast.forecastday[num].low.celsius;
    }  
}