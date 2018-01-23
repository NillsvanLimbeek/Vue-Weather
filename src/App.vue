<template>
    <div class="app">
        <div class="card">
            <app-search></app-search>
            <app-location-weather></app-location-weather>
            <app-main></app-main>
            <app-forecast></app-forecast>
        </div>
    </div>
</template>

<script>
    import Search from "./components/Search.vue";
    import LocationWeather from "./components/LocationWeather.vue";
    import Main from "./components/Main.vue";
    import Forecast from "./components/Forecast.vue";

    export default {
        name: 'app',
        data() {
            return {
                title: "Hello World"
            }
        },
        components: {
            "appSearch": Search,
            "appLocationWeather": LocationWeather,
            "appMain": Main,
            "appForecast": Forecast
        }
    }
</script>

<style lang="scss">

    @import "./scss/main";

</style>
