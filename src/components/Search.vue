<template>
    <div class="search">
        <form class="form"
              @submit.prevent="getData()">
            <div class="form__group">
                <label class="form__label" 
                       for="input"
                       :class="{ 'move-up': moveLabel }">Search</label>
                <input class="form__input" 
                       type="text" 
                       id="input"
                       @focus="moveLabelUp()"
                       @blur="moveLabelDown()"
                       v-model="search">
                <button class="btn">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                moveLabel: false,
                search: ""
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
            getData() {
                console.log(`You're looking for ${this.search}?`);
            }
        }
    }
</script>

<style lang="scss">

</style>
