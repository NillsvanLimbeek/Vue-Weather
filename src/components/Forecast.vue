<template>
    <div class="forecast">
        <div class="forecast__first">
            <p class="paragraph paragraph--center">{{ first.day }}</p>
            <!-- <img :src="`../../img/${first.weather_icon}.png`" class="forecast__weather-icon"> -->
            <img :src="`https://raw.githubusercontent.com/NillsvanLimbeek/nillsvanlimbeek.github.io/master/vue-weather/img/${first.weather_icon}.png`" class="forecast__weather-icon">
            <p class="paragraph paragraph--center">{{ first.temp_low }}°/{{ first.temp_high }}°</p>
        </div>
        <div class="forecast__second">
            <p class="paragraph paragraph--center">{{ second.day }}</p>
            <!-- <img :src="`../../img/${second.weather_icon}.png`" class="forecast__weather-icon"> -->
            <img :src="`https://raw.githubusercontent.com/NillsvanLimbeek/nillsvanlimbeek.github.io/master/vue-weather/img/${second.weather_icon}.png`" class="forecast__weather-icon">
            <p class="paragraph paragraph--center">{{ second.temp_low }}°/{{ second.temp_high }}°</p> 
        </div>
        <div class="forecast__third">
            <p class="paragraph paragraph--center">{{ third.day }}</p>
            <!-- <img :src="`../../img/${third.weather_icon}.png`" class="forecast__weather-icon"> -->
            <img :src="`https://raw.githubusercontent.com/NillsvanLimbeek/nillsvanlimbeek.github.io/master/vue-weather/img/${third.weather_icon}.png`" class="forecast__weather-icon">
            <p class="paragraph paragraph--center">{{ third.temp_low }}°/{{ third.temp_high }}°</p> 
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../main.js";
    import { WeatherIcons, Forecast } from "../functions.js";

    export default {
        data() {
            return {
                first: {
                    day: "",
                    weather_icon: "",
                    temp_high: "",
                    temp_low: ""
                },
                second: {
                    day: "",
                    weather_icon: "",
                    temp_high: "",
                    temp_low: ""
                },
                third: {
                    day: "",
                    weather_icon: "",
                    temp_high: "",
                    temp_low: ""
                }
            }
        },
        created() {
            //Init WeatherIcons
            const icons = new WeatherIcons;
            //Init Forecast
            const forecast = new Forecast;

            EventBus.$on("updateText", (data) => {
                //Update First Day
                forecast.setConditions(this.first, data, 1);
                this.first.weather_icon = icons.weatherIcons(data.weather.forecast.simpleforecast.forecastday[1].icon);
                //Update Second Day
                forecast.setConditions(this.second, data, 2);
                this.second.weather_icon = icons.weatherIcons(data.weather.forecast.simpleforecast.forecastday[2].icon);
                //Update Third Day
                forecast.setConditions(this.third, data, 3);
                this.third.weather_icon = icons.weatherIcons(data.weather.forecast.simpleforecast.forecastday[3].icon);
            })
        }
    }
</script>

<style>

</style>
