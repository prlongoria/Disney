
<script>
import CardFav from './cardFav.vue';
export default {
    components: { CardFav }

}
</script>

<template>
    <div class="panelFav">
       <CardFav></CardFav> 
    </div>
</template>

<style lang="css" scoped>
    .panelFav{
        width: 45vw;
        height: 55vh;        
        background-color: white;
        margin-top: 4vh;
        overflow: scroll; /*auto también sirve*/
    }
</style>