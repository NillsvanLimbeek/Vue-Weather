<template>
    <div class="main">
        <div class="main__left">
                <h1 class="main_time heading-secondary">{{ day }} {{ time }}</h1>
                <h1 class="main__temp heading-primary heading-primary--big">{{ temperature }}°</h1>
        </div>

        <div class="main__right">
            <div class="main__text">
                <p class="paragraph">Humidity:</p>
                <p class="paragraph">Wind:</p>
                <p class="paragraph">Pressure:</p>
            </div>

            <div class="main__values">
              <p class="paragraph paragraph--thick"> {{ humidity }}</p>
              <p class="paragraph paragraph--thick"> {{ windSpeed }} km/h</p>
              <p class="paragraph paragraph--thick"> {{ pressure }} hPa</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../main.js";

    export default {
        data() {
            return {
                showMain: false,
                day: "",
                time: "",
                temperature: "",
                humidity: "",
                windSpeed: "",
                pressure: ""

            }
        },
        created() {
            EventBus.$on("updateText", (data) => {
                //Show Main
                this.showMain = true;                
                // Set Temperature
                const temp = data.weather.current_observation.temp_c;
                this.temperature = temp.toFixed(0);
                // Set Day
                const day = new Date(data.date.time).toString().slice(0, 3);

                switch(day) {
                    case "Mon":
                        this.day = "Monday";
                        break; 
                    case "Tue":
                        this.day = "Tuesday";
                        break; 
                    case "Wed":
                        this.day = "Wednesday";
                        break; 
                    case "Thu":
                        this.day = "Thursday";
                        break; 
                    case "Fri":
                        this.day = "Friday";
                        break; 
                    case "Sat":
                        this.day = "Saturday";
                        break; 
                    case "Sun":
                        this.day = "Sunday";
                        break; 
                }
                // Set Time
                const time = data.date.time;
                const hours = time.toString().slice(11, 13);
                const minutes = time.toString().slice(14, 16);
                this.time = `${hours}:${minutes}`;
                // Set Wind
                this.windSpeed = data.weather.current_observation.wind_gust_kph;
                // Set Humidity
                this.humidity = data.weather.current_observation.relative_humidity;
                // Set Pressure
                this.pressure = data.weather.current_observation.pressure_mb;

            })
        }
    }
</script>

<style>

</style>
