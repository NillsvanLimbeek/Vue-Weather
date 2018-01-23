<template>
    <div class="main">
        <div class="main__left">
                <h1 class="main_time heading-secondary">{{ day }} {{ time }}</h1>
                <h1 class="main__temp heading-primary heading-primary--big">{{ temperature }}°</h1>
        </div>

        <div class="main__right">
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../main.js";

    export default {
        data() {
            return {
                day: "",
                time: "",
                temperature: ""
            }
        },
        methods: {
            getTime() {                
                //Get date
                const today = new Date();
                //Get hours & minutes
                let hours = today.getHours();
                let minutes = today.getMinutes();
                let seconds = today.getSeconds();
                //Add 0 in front
                if(minutes < 10) {
                    minutes = `0${minutes}`
                    this.time = `${hours}:${minutes}`;
                } else {
                    this.time = `${hours}:${minutes}`;
                }
                //Keep updating the time
                setTimeout(this.getTime, 10000);
            }
        },
        created() {
            this.getTime();
            EventBus.$on("updateText", (city) => {
                //Set Temperature
                const temp = city.list[0].main.temp - 273;
                this.temperature = temp.toFixed(0);
                //Set Day
                // const day = city.local_time_rfc822.slice(0, 3);
                // switch(day) {
                //     case "Mon":
                //         this.day = "Monday";
                //         break; 
                //     case "Tue":
                //         this.day = "Tuesday";
                //         break; 
                //     case 3:
                //         this.day = "Wednesday";
                //         break; 
                //     case 4:
                //         this.day = "Thursday";
                //         break; 
                //     case 5:
                //         this.day = "Friday";
                //         break; 
                //     case 6:
                //         this.day = "Saturday";
                //         break; 
                //     case 7:
                //         this.day = "Sunday";
                //         break; 
                // }
                //Set Time
            })
        }
    }
</script>

<style>

</style>
