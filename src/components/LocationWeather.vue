<template>
    <div class="location">
        <div class="location__icon">
            <!-- <img :src="`../../img/${weather_icon}.png`"> -->
            <img :src="`https://raw.githubusercontent.com/NillsvanLimbeek/nillsvanlimbeek.github.io/master/vue-weather/img/${weather_icon}.png`">
        </div>

        <div class="location__text">
            <h2 class="heading-primary margin-bottom-small">{{ weather }}</h2>
            <h2 class="heading-secondary">{{ city }}, {{ country }}</h2>
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../main.js";
    import { WeatherIcons } from "../functions.js";

    export default {
        data() {
            return {
                city: "",
                weather_icon: "",
                weather: "",
                country: ""
            }
        },
        created() {
            //Init WeatherIcons
            const icons = new WeatherIcons;

            EventBus.$on("updateText", (data) => {
                //Set Weather, City & Country
                this.city = data.city.city;
                this.country = data.city.country;
                this.weather = data.weather.current_observation.weather;
                this.weather_icon = icons.weatherIcons(data.weather.current_observation.icon);
            })
        }
    }
</script>

<style>

</style>
