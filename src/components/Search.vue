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
                <button class="btn">Submit</button>
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
                weather_api_key: "84037bef8eeebfca",
                openweather_api_key: "514c62a8b94b2c6d80b782d24bd06107",
                searchResult: []
            }
        },
        methods: {
            moveLabelUp() {
                this.moveLabel = true;
            },
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

                axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${this.openweather_api_key}&q=${city},${country}`)
                    .then(response => {
                        const city = response.data;
                        EventBus.$emit("updateText", city);
                        console.log(city);
                    })
            },
            getSearchData() {
                this.searchResult = [];

                axios.get(`http://api.geonames.org/searchJSON?name=${this.search}&maxRows=10&username=serc`)
                    .then(response => {
                        const data = response.data.geonames;
                        for(let key in data) {
                            this.searchResult.push(data[key])
                        }
                    })
                    .catch(error => console.log(error));
            },
            showSearchBox() {
                this.showSearch = !this.showSearch;
            },
            delaySearchBox() {
                setTimeout(this.showSearchBox, 250);
            }
        }
    }
</script>

<style lang="scss">

</style>
