<template>
    <div class="app">
        <div class="card">
            <app-search></app-search>
            <app-location-weather></app-location-weather>
            <div class="main"></div>
            <div class="forecast"></div>
        </div>
    </div>
</template>

<script>
    import Search from "./components/Search.vue";
    import LocationWeather from "./components/LocationWeather.vue";

    export default {
        name: 'app',
        data() {
            return {
                title: "Hello World"
            }
        },
        components: {
            "appSearch": Search,
            "appLocationWeather": LocationWeather
        }
    }
</script>

<style lang="scss">

    @import "./scss/main";

</style>
