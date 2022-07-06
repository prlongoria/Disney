
<script>


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


}
 
</script>
<template >
    <div class="indexPanel">
        <div class="cardBox"  v-for="caracter in disneyCaracters" :key="key" >
           <img class="photo" :src=caracter.imageUrl alt="Imagen del Personaje">
           
            <div class="cardtext">  
                <h5 id="name">Name: </h5> 
                <p id="nameData">{{caracter.name}}</p>
                <h5 id="film" >Film or Show: </h5>
                <p id="filmData" v-if = "caracter.films.length === 0 " >Desconocido</p>
                <p id="filmData" v-else >{{caracter.films}}</p>
                <h5 id="allies">Allies: </h5>
                <p id="alliesData" v-if = "caracter.allies.length === 0 " >Desconocido</p>
                <p id="alliesData" v-else>{{caracter.allies}}</p>
                <h5 id="enemies">Enemies: </h5>
                <p id="enemiesData" v-if = "caracter.enemies.length === 0 " >Desconocido</p>
                <p id="enemiesData" v-else>{{caracter.enemies}}</p>
            </div> 
             <div class="cardButtons">
                <button id="addFav" @click="addfav">
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
        color: pink;
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
  
    
}
.photo{
    width: 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
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

 
    


