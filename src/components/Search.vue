<template>
    <div class="search">
        <form class="form"
              @input="getSearchData()">
            <div class="form__group">
                <label class="form__label" 
                       for="input"
                       :class="{ 'move-up': moveLabel }">Search</label>
                <input class="form__input" 
                       type="text" 
                       id="input"
                       autocomplete="off"
                       @focus="moveLabelUp(), delaySearchBox()"
                       @blur="moveLabelDown(), delaySearchBox()"
                       v-model="search">
            </div>
            <div class="form__search-results">
                <ul class="form__list">
                    <li class="form__item" 
                        v-for="(item, index) in searchResult"
                        @click="getData(index)"
                        :key="index"
                        v-if="showSearch">{{ item.name }}, {{ item.countryCode }}</li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from "axios";
    import { EventBus } from "../main.js";

    export default {
        data() {
            return {
                moveLabel: false,
                showSearch: false,
                search: "",
                wunderground_api_key: "84037bef8eeebfca",
                openweather_api_key: "514c62a8b94b2c6d80b782d24bd06107",
                searchResult: []
            }
        },
        methods: {
            //Move Label on Focus
            moveLabelUp() {
                this.moveLabel = true;
            },
            //Move Label on Blur
            moveLabelDown() {
                if(this.search.length > 0) {
                    this.moveLabel = true;
                } else {
                    this.moveLabel = false;
                }
            },
            getData(index) {
                const city = this.searchResult[index].name;
                const country = this.searchResult[index].countryName;
                const countryCode = this.searchResult[index].countryCode;
                const lat = this.searchResult[index].lat;
                const long = this.searchResult[index].lng;

                axios.all([
                    //Get Forecast & Weather
                    axios.get(`https://cors-anywhere.herokuapp.com/api.wunderground.com/api/84037bef8eeebfca/conditions/forecast/q/${lat},${long}.json`),
                    //Get Local Date & Time
                    axios.get(`https://cors-anywhere.herokuapp.com/api.geonames.org/timezoneJSON?lat=${lat}&lng=${long}&username=serc`)
                ])
                .then(axios.spread((weatherResponse, dateResponse) => {
                    const data = {
                        weather: weatherResponse.data,
                        date: dateResponse.data,
                        city: {
                            city: city,
                            country: countryCode
                        }
                    }
                    EventBus.$emit("updateText", data);
                    console.log(data);
                }));

            },
            getSearchData() {
                this.searchResult = [];
                //Get List of Cities
                axios.get(`https://cors-anywhere.herokuapp.com/api.geonames.org/searchJSON?name=${this.search}&maxRows=10&username=serc`)
                    .then(response => {
                        const data = response.data.geonames;
                        for(let key in data) {
                            this.searchResult.push(data[key])
                        }
                    })
                    .catch(error => console.log(error));
            },
            //Show List on Input
            showSearchBox() {
                this.showSearch = !this.showSearch;
            },
            //Delay List
            delaySearchBox() {
                setTimeout(this.showSearchBox, 250);
            }
        }
    }
</script>

<style lang="scss">

</style>
