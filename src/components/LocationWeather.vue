<template>
    <div class="location">
        <div class="location__icon">
            <img src="../../img/Sun.png" alt="Sunny">
        </div>

        <div class="location__text">
            <h2 class="heading-primary margin-bottom-small">{{ weather }}</h2>
            <h2 class="heading-secondary">{{ city }}, {{ country }}</h2>
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../main.js";

    export default {
        data() {
            return {
                city: "",
                weather: "",
                country: ""
            }
        },
        methods: {
            updateText() {
                this.city = EventBus.city.display_location.city;
                this.country = EventBus.city.display_location.country;
                this.weather = EventBus.city.weather;
            }
        },
        created() {
            EventBus.$on("updateText", (city) => {
                this.city = city.city.name;
                this.country = city.city.country;
                this.weather = city.list[0].weather[0].main;
            })
        }
    }
</script>

<style>

</style>
