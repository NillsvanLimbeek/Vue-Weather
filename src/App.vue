<template>
    <div class="app">
        <div class="card">
            <div class="overlay" v-if="showOverlay">
                <h1 class="heading-primary">Waiting for Input</h1>
            </div>
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

    import { EventBus } from "./main.js";

    export default {
        name: 'app',
        data() {
            return {
                showOverlay: true
            }
        },
        components: {
            "appSearch": Search,
            "appLocationWeather": LocationWeather,
            "appMain": Main,
            "appForecast": Forecast
        },
        created() {
            EventBus.$on("updateText", (data) => {
                this.showOverlay = false;
            })
        }
    }
</script>

<style lang="scss">

    @import "./scss/main";

</style>
