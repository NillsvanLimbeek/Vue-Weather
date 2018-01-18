<template>
    <div class="main">
        <div class="main__time">
            <h1 class="heading-secondary">{{ day }} {{ time }}</h1>
        </div>

        <div class="main__temperature">
            <h1 class="heading-primary heading-primary--big margin-left-small">{{ temperature }}°</h1>
        </div>

        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                day: "Monday",
                time: "19:25",
                temperature: "20"
            }
        }
    }
</script>

<style>

</style>
