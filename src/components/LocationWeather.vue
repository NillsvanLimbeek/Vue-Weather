<template>
    <div class="location">
        <div class="location__icon">
            <img src="../../img/Sun.png" alt="Sunny">
        </div>

        <div class="location__text">
            <h2 class="heading-primary margin-bottom-small">{{ weather }}</h2>
            <h2 class="heading-secondary">{{ location }}, {{ country }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                location: "Volendam",
                weather: "Sunny",
                country: "NL"
            }
        }
    }
</script>

<style>

</style>
