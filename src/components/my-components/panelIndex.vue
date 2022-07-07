
<script>
import { mapState, mapActions } from 'pinia';
import { favouriteList} from '../../stores/favdisney';

export default {
    data() {
        return {
            disneyCaracters : []
        }
    },
    created() {
        fetch("https://api.disneyapi.dev/characters")
        .then(response=>response.json())
        .then(data=>{
            this.disneyCaracters = data.data;
        })      
    },
    computed:{
        ...mapState(favouriteList, ['caracter'])},
    methods:{
            ...mapActions(favouriteList, ["addFavorites"])
        }, 
    
}
 
</script>
<template >
    <div class="indexPanel">
        <div class="cardBox"  v-for="caracter in disneyCaracters" :key="caracter.id" >
           <img class="photo" :src=caracter.imageUrl alt="Imagen del Personaje">
           
            <div class="cardtext">  
                <h5 id="name">Name: {{caracter.name}} </h5> 
                
                
                <h5 id="filmData" v-if = "caracter.films.length === 0 " >Film or show: Desconocido</h5>
                <h5 id="filmData" v-else >Film or show: {{caracter.films}}</h5>
                
                <h5 id="alliesData" v-if = "caracter.allies.length === 0 " >Allies: Desconocido</h5>
                <h5 id="alliesData" v-else>Allies: {{caracter.allies}}</h5>
                
                <h5 id="enemiesData" v-if = "caracter.enemies.length === 0 " >Enemies: Desconocido</h5>
                <h5 id="enemiesData" v-else>Enemies: {{caracter.enemies}}</h5>
            </div> 
             <div class="cardButtons">
                <button id="addFav" @click="addFavorites(caracter)">
                <img src="../../images/mickey-fav-grey.png" id="addImg"/>
                </button>
                
        </div>
        </div>

    </div>

</template>
<style lang="css" scoped>
    .indexPanel{
        max-height: 55vh;
        overflow-y: scroll;
        width: 45vw;
        background-color: white;
        color: black;
        padding: 1%;

    }
.cardBox{
    background-color:#39C1CD;
    display: flex;
    justify-content: center;
    padding: 1vh;
    margin: 1.5vh;
    overflow-y: scroll;
}

.cardButtons{
    display: flex;
    flex-direction:column;
    justify-content: center;
}
.cardtext{
    width:35vw;
    height: 18vh;  
    line-height: 3vh;
    color: black;    
    font-size: 3vh;
    padding: 1vw;
}

.photo{
    width: 8vw;
    display: flex;
    flex-direction: column;    
    justify-content: center;
    
}

button {
    background-color: transparent;
    border: none;
}
#addImg{
    width: 2vw;

}

.stars img{
    width:1vw;
    margin-top: 1vh;
}
#characterImg{
    height: 15vh;
}
</style>

 
    


