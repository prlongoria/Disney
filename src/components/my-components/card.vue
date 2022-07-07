<script>

    export default{
        props: {
            character: Object,
        }
       

    }

</script>
<template>
    <div class="cardBox">
        <div id="photo">
             <img :src=character.imageUrl id="characterImg"/>
             <div class="stars">
                <img src="\src\images\star-grey.png" id="star1"/>
                <img src="\src\images\star-grey.png" id="star2"/>
                <img src="\src\images\star-grey.png" id="star3"/>
             </div>
        </div>
         <div class="cardtext">
            <h5 id="name">Name: {{ character.name }} </h5> 
            <h5 id="film">Film or Show: {{character.films}}</h5>
            <p id="filmData"></p>
            <h5 id="allies">Allies: {{character.allies}}</h5>
            <p id="alliesData"></p>
            <h5 id="enemies">Enemies: {{character.enemies}}</h5>
            <p id="enemiesData"></p>
        </div>
        <div class="cardButtons">
            <button id="delete">
                <img src="/src/images/delete.png" id="deleteImg"/>
            </button>
            <button id="edit">
                <img src="/src/images/edit.png" id="editImg"/>
            </button>
        </div>
    </div>
    
</template>

<style>
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
    line-height: 1px;
    
}
#photo{
    width: 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
button {
    background-color: transparent;
    border: none;
}
#deleteImg, #editImg{
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