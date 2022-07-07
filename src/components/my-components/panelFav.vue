
<script>
import { mapWritableState } from 'pinia';
import { favouriteList } from '../../stores/favdisney';
import Card from './card.vue';
export default {
    components: { Card },
    computed:{
    ...mapWritableState(favouriteList, ['charactersInFav'])
    }
}
</script>

<template>
    <div class="panelFav" > 
        <div v-for="(character,key) in charactersInFav" :key="key">
                   
        <Card :character="character"></Card>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .panelFav{
        width: 45vw;
        height: 55vh;        
        background-color: white;
        margin-top: 4vh;
        
    }
</style>